// import React from 'react';
// import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// export default function HomeSlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className='max-w-[1320px] mx-auto py-10'>
//       <h1 className='font-bold text-center text-green-600 text-3xl mb-8'>Our Courses</h1>
      
//       <Slider {...settings} id="homeSlider">
//         <div className="p-4">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <h2 className="text-xl font-semibold mb-2">Course 1</h2>
//             <p className="text-gray-600">Introduction to Programming</p>
//           </div>
//         </div>

//         <div className="p-4">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <h2 className="text-xl font-semibold mb-2">Course 2</h2>
//             <p className="text-gray-600">Web Development Basics</p>
//           </div>
//         </div>

//         <div className="p-4">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <h2 className="text-xl font-semibold mb-2">Course 3</h2>
//             <p className="text-gray-600">Advanced JavaScript</p>
//           </div>
//         </div>

//         <div className="p-4">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <h2 className="text-xl font-semibold mb-2">Course 4</h2>
//             <p className="text-gray-600">React for Beginners</p>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }
