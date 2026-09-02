import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Login, Register, Home, Menu, Cart } from "../containers";
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