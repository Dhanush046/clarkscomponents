// import Home from "./components/Home";
// import About from "./components/About";
// import NavBar from "./components/NavBar";
// // import OurProducts from "./components/OurProducts ";
// import { OurProducts } from "./components/OurProducts";
// import ProductAbout from "./components/ProductAbout";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Home />
//       <About />
//       <ProductAbout />
//       <OurProducts />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { OurProducts } from "./components/OurProducts";
// import ProductAbout from "./components/ProductAbout";
import ImageSlider from "./components/ImageSlider";
import AdditionalSegment from "./components/AdditionalSegment";
import Additional from "./components/Additional";
import ProductDetail from "./components/ProductDetail"; // ✅ Make sure this is imported

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <ImageSlider />
            <OurProducts />
            <AdditionalSegment />
            <Additional />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* ✅ Dynamic Route */}
      </Routes>
    </Router>
  );
}

export default App;

