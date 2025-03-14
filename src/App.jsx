import React from "react";
import { BrowserRouter} from "react-router-dom";

import {
  Header,
  Footer,
  Navbar,
  Sidebar,
  UserProfile,
  ThemeSetting,
  Notification,
} from "./components";
import MyRoutes from "./MyRoutes";

import { useStateContext } from "./contexts/ContextProvider";
import { SettingIcon } from "./components/SettingIcon";
function App() {
  const { activeMenu, themeSettings, currentMode } = useStateContext();
  return (
    <BrowserRouter>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <div
            className={`fixed h-full transition-all duration-300 ${
              activeMenu ? "w-72" : "w-0"
            }`}
          >
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div
            className={`flex-1 transition-all duration-300 ${
              activeMenu ? "ml-72" : "ml-0"
            }`}
          >
            {/* Navbar -----------*/}
            <div className="w-full bg-light-gray dark:bg-main-dark">
              <Navbar />
            </div>

            {/* Page Content *--------------*/}
            <div className=" p-4 bg-light-gray dark:bg-main-dark">
              <MyRoutes />
            </div>
          </div>

          {/* Settings & Theme --------------*/}
          <SettingIcon />
          {themeSettings && <ThemeSetting />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
