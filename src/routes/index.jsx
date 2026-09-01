import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";
import { Menu } from "../containers/Menu";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Cart } from "../containers/Cart";
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
            <Header></Header>
            <Home/>
            <Footer></Footer>
            </>
        )
        
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
       path: '/cadastro',
       element: <Register/>
   },
    {
       path: '/cardapio',
       element: 
       (
            <>
            <Header></Header>
            <Menu/>
            </>
        )
       
   },
   {
       path: '/carrinho',
       element: <Cart/>
   },
    
])