// // import React from "react";
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

// const NavBar = () => {
//   const [nav, setNav] = useState(false);

//   const Home1 = [
//     {
//       id: 6,
//       link: "home",
//       name2: "Dhanush",
//     },
//   ];

//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     // {
//     //   id: 2,
//     //   link: "about",
//     // },
//     {
//       id: 3,
//       link: "ourproducts",
//     },
//     // {
//     //   id: 4,
//     //   link: "productabout",
//     // },
//     // {
//     //   id: 5,
//     //   link: "contact",
//     // },
//   ];

//   return (
//     <div className=" fixed flex h-18 bg-[#C4A484] px-6 py-2 text-white justify-between w-full">
//       <div className="flex font-Signature text-2xl cursor-pointer">
//         {Home1.map(({ id, link }) => (
//           <Link key={id} to={link} smooth duration={500}>
//             Clarks
//           </Link>
//         ))}
//       </div>

//       <ul className="hidden md:flex">
//         {links.map(({ id, link }) => (
//           <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200">
//             <Link to={link} smooth duration={500} className=" hover:text-[#5B3B1D]">
//               {link}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//       >
//         {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
//       </div>

//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-8 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
//           {links.map(({ id, link }) => (
//             <li key={id} className="cursor-pointer capitalize py-6 text-4xl">
//               <Link
//                 onClick={() => setNav(!nav)}
//                 to={link}
//                 smooth
//                 duration={500}
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { animateScroll as scroll, scroller } from "react-scroll";

// const NavBar = () => {
//   const [nav, setNav] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // 👇 Scroll to top
//   const scrollToTop = () => {
//     scroll.scrollToTop({ duration: 500, smooth: true });
//   };

//   // 👇 Scroll to 'ourproducts' section
//   const scrollToOurProducts = () => {
//     scroller.scrollTo("ourproducts", {
//       duration: 500,
//       smooth: true,
//       offset: -60, // adjust for navbar height
//     });
//   };

//   const handleHomeClick = () => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => scrollToTop(), 200);
//     } else {
//       scrollToTop();
//     }
//   };

//   const handleOurProductsClick = () => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => scrollToOurProducts(), 200);
//     } else {
//       scrollToOurProducts();
//     }
//   };

//   return (
//     <div className="fixed flex h-20 bg-[#C4A484] px-6 py-2 text-white justify-between w-full z-50">
//       {/* Logo -> Home */}
//       <div
//         className="flex font-Signature text-2xl cursor-pointer"
//         onClick={handleHomeClick}
//       >
//         Clarks
//       </div>

//       {/* Desktop Links */}
//       <ul className="hidden md:flex">
//         <li
//           className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200"
//           onClick={handleHomeClick}
//         >
//           Home
//         </li>

//         <li
//           className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200"
//           onClick={handleOurProductsClick}
//         >
//           Our Products
//         </li>
//       </ul>

//       {/* Hamburger icon */}
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//       >
//         {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
//       </div>

//       {/* Mobile Menu */}
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-8 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
//           <li
//             onClick={() => {
//               setNav(false);
//               handleHomeClick();
//             }}
//             className="cursor-pointer capitalize py-6 text-4xl"
//           >
//             Home
//           </li>
//           <li
//             onClick={() => {
//               setNav(false);
//               handleOurProductsClick();
//             }}
//             className="cursor-pointer capitalize py-6 text-4xl"
//           >
//             Our Products
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import logo from "../assets/ClarksLogo_Update2 2.png";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  const scrollToOurProducts = () => {
    scroller.scrollTo("ourproducts", {
      duration: 500,
      smooth: true,
      offset: -60,
    });
  };
  const scrollToAdditional = () => {
    scroller.scrollTo("additional", {
      duration: 500,
      smooth: true,
      offset: -60,
    });
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToTop(), 200);
    } else {
      scrollToTop();
    }
  };

  const handleOurProductsClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToOurProducts(), 200);
    } else {
      scrollToOurProducts();
    }
  };
  const handleAdditionalClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToAdditional(), 200);
    } else {
      scrollToAdditional();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 z-50 text-black bg-white/10 backdrop-blur-md backdrop-saturate-150 border-b border-white/20">
      <div className="h-full w-full flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="font-Signature text-2xl cursor-pointer;
"
          onClick={handleHomeClick}>
            <img
                src={logo}
                alt="Clarks"
                className="w-50 h-20 object-cover hover:scale-105 transition duration-200 hover:invert"
              />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center">
          <li
            className="px-4 cursor-pointer capitalize hover:text-[#953F00] font-medium hover:scale-125 duration-200"
            onClick={handleHomeClick}
          >
            Home
          </li>
          <li
            className="px-4 cursor-pointer capitalize hover:text-[#953F00] font-medium hover:scale-125 duration-200"
            onClick={handleOurProductsClick}
          >
            Components
          </li>
          <li
            className="px-4 cursor-pointer capitalize hover:text-[#953F00] font-medium hover:scale-125 duration-200"
            onClick={handleAdditionalClick}
          >
            Additional Components
          </li>
        </ul>

        {/* Mobile Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-black bg-opacity-90">
          <li
            onClick={() => {
              setNav(false);
              handleHomeClick();
            }}
            className="cursor-pointer capitalize py-6 text-4xl text-white"
          >
            Home
          </li>
          <li
            onClick={() => {
              setNav(false);
              handleOurProductsClick();
            }}
            className="cursor-pointer capitalize py-6 text-4xl text-white"
          >
            Components
          </li>
          <li
            onClick={() => {
              setNav(false);
              handleOurProductsClick();
            }}
            className="cursor-pointer capitalize py-6 text-4xl text-white"
          >
            Additional Components
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;

