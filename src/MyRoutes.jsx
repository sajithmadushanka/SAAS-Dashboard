import { Routes,Route } from "react-router-dom";
import { ECommerce, Order, Employees } from "./pages";
import Customers from "./pages/Customers";
function MyRoutes() {
    return (
       
        <Routes>
            <Route path="/" element={<ECommerce />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
        </Routes>
 
    );
    }

export default MyRoutes;