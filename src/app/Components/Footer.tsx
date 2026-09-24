// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#111313] border-t border-[#242727]">
//       <div
//         className="
//           mx-auto
//           flex
//           min-h-[116px]
//           w-full
//           max-w-[1440px]
//           items-center
//           justify-between
//           px-6
//           py-8
          
//           sm:px-8
          
//           md:px-10
          
//           lg:px-12
          
//           max-[640px]:flex-col
//           max-[640px]:justify-center
//           max-[640px]:gap-6
//           max-[640px]:text-center
//         "
//       >
//         {/* LEFT — BRAND */}
//         <div className="flex items-center gap-2.5">
//           {/* FitLog Logo Icon */}
//           <svg
//             width="22"
//             height="22"
//             viewBox="0 0 22 22"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <path
//               d="M3 7.5H6.5V14.5H3V7.5Z"
//               fill="#B7FF00"
//             />
//             <path
//               d="M15.5 7.5H19V14.5H15.5V7.5Z"
//               fill="#B7FF00"
//             />
//             <path
//               d="M6.5 9H15.5V13H6.5V9Z"
//               fill="#B7FF00"
//             />
//             <path
//               d="M1.5 9H3V13H1.5V9Z"
//               fill="#B7FF00"
//             />
//             <path
//               d="M19 9H20.5V13H19V9Z"
//               fill="#B7FF00"
//             />
//           </svg>

//           <span
//             className="
//               text-[14px]
//               font-bold
//               tracking-[-0.02em]
//               text-white
//             "
//           >
//             FITLOG
//           </span>
//         </div>

//         {/* RIGHT — COPYRIGHT */}
//         <p
//           className="
//             text-right
//             text-[13px]
//             font-medium
//             leading-5
//             text-[#858989]
            
//             max-[640px]:text-center
//           "
//         >
//           ©️ 2026 FitLog — Workout Library. Train hard, log honest.
//         </p>
//       </div>
//     </footer>
//   );
// }








export default function Footer() {
  return (
    <footer className="w-full bg-[#111313] border-t border-[#242727] m-0 p-0">
      <div
        className="
          mx-auto
          flex
          min-h-[110px]
          w-full
          max-w-[1600px]
          items-center
          justify-between
          px-6
          py-6
          sm:px-8
          lg:px-12
          
          max-[640px]:flex-col
          max-[640px]:justify-center
          max-[640px]:gap-4
          max-[640px]:text-center
        "
      >
        {/* LEFT - LOGO */}
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 7.5H6.5V14.5H3V7.5Z" fill="#B7FF00" />
            <path d="M15.5 7.5H19V14.5H15.5V7.5Z" fill="#B7FF00" />
            <path d="M6.5 9H15.5V13H6.5V9Z" fill="#B7FF00" />
            <path d="M1.5 9H3V13H1.5V9Z" fill="#B7FF00" />
            <path d="M19 9H20.5V13H19V9Z" fill="#B7FF00" />
          </svg>

          <span className="text-sm font-bold text-white">
            FITLOG
          </span>
        </div>

        {/* RIGHT - COPYRIGHT */}
        <p className="text-xs font-medium text-[#858989]">
          ©️ 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}