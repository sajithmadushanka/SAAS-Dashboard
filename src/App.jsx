import React from "react";
import { Tooltip } from "react-tooltip";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes } from "react-router-dom";

import {Header, Footer, Navbar, Sidebar, UserProfile, ThemeSetting, Notification} from './components'
import { ECommerce,Order, Employee } from "./pages";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* dashboard */}
      <Route path="/" element='ECommerce' />
      <Route path="/ecommerce" element='ECommerce' />

      {/*pages*/}
      <Route path="/orders" element="Orders" />
      <Route path="/employees" element="employees" />
      <Route path="/customer" element="customer" />
      
      {/*settings*/}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
