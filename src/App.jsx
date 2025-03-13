import React from "react";
import { Tooltip } from "react-tooltip";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Header,
  Footer,
  Navbar,
  Sidebar,
  UserProfile,
  ThemeSetting,
  Notification,
} from "./components";
import { ECommerce, Order, Employees } from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
function App() {
  const { activeMenu } = useStateContext();
  return (
    <BrowserRouter>
      <div className="flex bg-main w-full h-screen dark:bg-secondary-dark">
        {/* Sidebar */}
        {activeMenu ? (
          <div className="w-72 fixed h-full dark:bg-secondary-dark bg-white transition-all duration-300">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 transition-all duration-600">
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div
          className={`flex flex-col transition-all duration-300 ${
            activeMenu ? "ml-72 w-[calc(100%-18rem)]" : "w-full"
          }`}
        >
          {/* Navbar */}
          <div className="fixed md:static bg-main dark:bg-main-dark w-full">
            <Navbar />
          </div>

          {/* Main Pages */}
          <div className="mt-1 p-4">
            <Routes>
              {/* dashboard */}
              <Route path="/" element={<ECommerce />} />
              <Route path="/ecommerce" element={<ECommerce />} />

              {/*pages*/}
              <Route path="/orders" element={<Order />} />
              <Route path="/employees" element={<Employees />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
