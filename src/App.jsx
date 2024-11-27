
import "slick-carousel/slick/slick.css";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,Route,Link, createRoutesFromElements,} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ShopePage from "./pages/shop/ShopePage";
import Layout from "./components/Layout";
import AboutPage from "./pages/about/AboutPage";
import ProductDtals from "./pages/shop/ProductDtals";
import Error from "./pages/error/Error";
import HelpCenter from "./pages/HelpCenter";
import HowtoOrder from "./pages/HowtoOrder";

function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>} >
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/shop" element={<ShopePage />}></Route>
      <Route path="/shop/:id" element={<ProductDtals />}loader={() => fetch('/fakeData.json')} />
      <Route path="/about" element={<AboutPage />} ></Route>
      <Route path="/helpcenter" element={<HelpCenter />}></Route>
      <Route path="/how to order" element={<HowtoOrder/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Route>
  ))


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
