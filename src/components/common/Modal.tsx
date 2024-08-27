// 'use client';
// import React from 'react';
// import Image from 'next/image';

// const Modal = ({
//   title,
//   content,
//   openModal,
//   setOpenModal,
//   modalBackground,
//   onClick,
// }: {
//   title: string;
//   content?: string;
//   openModal?: boolean;
//   setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
//   onClick: () => void;
//   modalBackground?: any;
// }) => {
//   return (
//     <div
//       className="flex justify-center items-center bg-BlackOpa60 fixed top-0 z-50 w-[375px] h-screen"
//       onClick={(e) => e.stopPropagation()}
//     >
//       <div
//         className="p-5 rounded-2xl bg-White w-[335px] h-[343]"
//         ref={modalBackground}
//       >
//         <div className="flex items-center justify-center">
//           <Image alt="alert mark" src={mark} />
//         </div>
//         <p className="flex flex-col items-center justify-center bg-">
//           {content ? (
//             <>
//               <span className="mt-5 mb-3">{title}</span>
//               <span>{content}</span>
//             </>
//           ) : (
//             <>
//               <span>탈퇴 시 모든 계정 정보 및</span>
//               <span>보유 중인 수강권은 삭제되며,</span>
//               <span>삭제된 데이터는 복구가 불가능해요</span>
//               <span>정말 탈퇴하시겠어요?</span>
//             </>
//           )}
//         </p>
//         <div className="flex justify-between mt-6 w-[294px]">
//           <button
//             className="flex justify-center items-center border border-solid border-ToggleText rounded-lg  w-[145px] h-[44px]"
//             onClick={() => {
//               setModal(false);
//               setOpenModal(false);
//             }}
//           >
//             취소
//           </button>
//           <button
//             onClick={onClick}
//             className="flex justify-center items-center border border-solid border-ToggleText rounded-lg bg-BG text-white w-[145px] h-[44px]"
//           >
//             확인
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
