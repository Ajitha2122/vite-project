import imgLogo from "../assets/hearder.png";
import SideBar from "./SideBar";
function Logo() {
  return (
    <div>
      <img src={imgLogo} alt="side bar Logo" width={"20px"} height={"20px"} />
      <SideBar image={imgLogo} title="Linglee" />
    </div>
  );
}
export default Logo;
