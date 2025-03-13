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
  const {activeMenu, currentColor, themeSettings, setThemeSettings, currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? 'dark' : ''}>
    <BrowserRouter>
     <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <Tooltip id="Settings" content="Settings" />
              <button data-tooltip-id="Settings"
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

          
          </div>
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

          {themeSettings && (<ThemeSetting />)}
          
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
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
