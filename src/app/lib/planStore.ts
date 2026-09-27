export interface PlanWorkout {
  id: number | string;
  name: string;
  image: string;
  duration?: number;
  calories?: number;
  difficulty?: string;
}

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

function readStorage(key: string): PlanWorkout[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const data = localStorage.getItem(key);

    if (!data) {
      return [];
    }

    const parsed: unknown = JSON.parse(data);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as PlanWorkout[];
  } catch (error) {
    console.error(`Error reading ${key}:`, error);
    return [];
  }
}

function writeStorage(key: string, data: PlanWorkout[]): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(data));

    window.dispatchEvent(new CustomEvent("fitlog-storage"));
  } catch (error) {
    console.error(`Error writing ${key}:`, error);
  }
}

export function getPlan(): PlanWorkout[] {
  return readStorage(PLAN_KEY);
}

export function addToPlan(workout: PlanWorkout): boolean {
  const currentPlan = getPlan();

  const alreadyExists = currentPlan.some(
    (item) => String(item.id) === String(workout.id),
  );

  if (alreadyExists) {
    return false;
  }

  const updatedPlan = [...currentPlan, workout];

  writeStorage(PLAN_KEY, updatedPlan);

  return true;
}

export function removeFromPlan(id: number | string): void {
  const currentPlan = getPlan();

  const updatedPlan = currentPlan.filter(
    (item) => String(item.id) !== String(id),
  );

  writeStorage(PLAN_KEY, updatedPlan);
}

export function clearPlan(): void {
  writeStorage(PLAN_KEY, []);
}

export function getSaved(): PlanWorkout[] {
  return readStorage(SAVED_KEY);
}

export function saveForLater(workout: PlanWorkout): boolean {
  const currentSaved = getSaved();

  const alreadySaved = currentSaved.some(
    (item) => String(item.id) === String(workout.id),
  );

  if (alreadySaved) {
    return false;
  }

  const updatedSaved = [...currentSaved, workout];

  writeStorage(SAVED_KEY, updatedSaved);

  return true;
}

export function removeFromSaved(id: number | string): void {
  const currentSaved = getSaved();

  const updatedSaved = currentSaved.filter(
    (item) => String(item.id) !== String(id),
  );

  writeStorage(SAVED_KEY, updatedSaved);
}

export function clearSaved(): void {
  writeStorage(SAVED_KEY, []);
}
