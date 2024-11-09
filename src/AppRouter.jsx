import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { CategoryPage } from "./pages/CategoryPage"
import { Navbar } from "./components";

export const AppRouter = () => {
    return (
    <>

    <Navbar />
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/category/:category' element={<CategoryPage />}/>

    </Routes>
    </>
    
);
};
