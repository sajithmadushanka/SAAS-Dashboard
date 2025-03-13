import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { links } from "../data/data/dummy";
import{useStateContext} from '../contexts/ContextProvider';

const Sidebar = () => {
     const { activeMenu,setActiveMenu, screenSize , currentColor} = useStateContext();



  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900 ) {
      setActiveMenu(false);
    }

  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  
  return (
    <div
      className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10
   "
    >
      {activeMenu && (
        <>
          <div
            className=" border-2 border-red-500 flex items-center justify-between
        mt-4"
          >
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware className="text-2xl" />
              <span>Shooso</span>
            </Link>

            <button data-tooltip-id="settings-tooltip" className="block pr-2"
            onClick={handleCloseSideBar}>
              <MdOutlineCancel />
            </button>
            <Tooltip id="settings-tooltip" content="menu" />
          </div>

          {/* sidebar links ----------------------------*/}

          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
