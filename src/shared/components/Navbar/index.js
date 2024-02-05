import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

export default Navbar;
