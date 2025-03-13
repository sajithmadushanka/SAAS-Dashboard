import React, {useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotificationLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import avatar from '../data/data/avatar.jpg'
import { Cart, Chat, Notification, ThemeSetting, UserProfile } from "./index";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <>
      <button
        data-tooltip-id={title} 
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
      <Tooltip id={title} content={title} />
    </>
  );
  
const Navbar = () => {
  const { setActiveMenu,isClicked, handleClick, screenSize , setScreenSize, currentColor} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
 
  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prev) => !prev)}
          icon={<AiOutlineMenu />}
          color={currentColor}
        />

        <div className="flex gap-4">
          <NavButton
            title="Cart"
            customFunc={() => handleClick('cart')}
            icon={<FiShoppingCart />}
            color={currentColor}
          />

          <NavButton
            title="Notification"
            customFunc={() => handleClick('notification')}
            icon={<BsChatLeft />}
            color={currentColor}
            dotColor={"#03C9D7"}
          />
          <NavButton
            title="Chat"
            customFunc={() => handleClick('chat')}
            icon={<RiNotificationLine />}
            color={currentColor}
            dotColor="rgb(254, 201, 15)"
          />
          {/*user profile */}
          <button  data-tooltip-id="user-profile">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Mash
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
          <Tooltip id="user-profile" content="Profile" />
        </button>
        
            { isClicked.cart&& <Cart />}
            {isClicked.chat&& <Chat />}
            {isClicked.userProfile && <UserProfile />}
            { isClicked.notification && <Notification />}
        
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
