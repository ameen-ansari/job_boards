import { useState } from "react";
import logo from "../../../../assets/images/logo.svg";
import menuBtn from "../../../../assets/images/menuBtnNavbar.svg";
import SideBar from "../../Sidebar/SideBar";

function MobileNavbar() {
  const [show, setshow] = useState(false);

  return (
    <div className="bg-[#FFF] px-[16px] py-[12px] z-[2] flex justify-between w-[100%] align-middle border border-b-[#EAECF0] fixed top-0 left-0">
      <img
        width={142}
        height={32}
        src={logo}
        className="cursor-pointer"
        alt="logo"
      />
      <img
        width={40}
        height={40}
        src={menuBtn}
        className="cursor-pointer"
        alt="menuButton"
        onClick={() => setshow(!show)}
      />
      <SideBar show={show} onClose={() => setshow(!show)} />
    </div>
  );
}

export default MobileNavbar;
