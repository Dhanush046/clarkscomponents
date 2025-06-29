// import pic from "../assets/leather.png";
// import { Link } from "react-scroll";

// const Home = () => {

//   return (
//     <div
//       name="home"
//       className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="mx-auto max-w-screen-lg flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className=" flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             CLARKS MATERIAL ONLINE GALLERY
//           </h2>
//           <div>
//             <span className="hover:scale-110">
//               <a href="/about" className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-black cursor-pointer transition ease-in-out delay-100 hover:bg-gray-500 duration-300">
//                <Link to="ourproducts" smooth duration={500}> Reach out
//                </Link>
//               </a>
//             </span>
//           </div>
//         </div>
//         <div>
//           <img src={pic} alt="profile" className="mx-auto rounded-2xl w-4/5" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import background from "../assets/aba6177147b31cfc14c21f186978a10b233c5237.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="mx-auto max-w-screen flex flex-col items-center  h-full px-4 md:flex-row bg-black/75">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            CLARKS MATERIAL
          </h2>
          <h3 className="text-4xl sm:text-6xl text-white">
            ONLINE GALLERY
            </h3>
          <div className="mt-4">
            <span className="hover:scale-110 inline-block">
              <a
                href="/about"
                className="text-white group w-fit px-6 py-3 flex items-center rounded-md cursor-pointer transition ease-in-out delay-100 hover:bg-slate-800 duration-300"
              >
                <Link to="ourproducts" smooth duration={500}>
                  Reach out
                </Link>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
