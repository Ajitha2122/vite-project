import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import Layout from "./Layout";
export default function Search() {
  const icons = [
    { icon: <SearchIcon /> },
    { icon: <NotificationsIcon sx={{ marginLeft: "100vh" }} /> },
    { icon: <PersonIcon sx={{ marginLeft: "1vh" }} /> },
    { icon: <SettingsIcon sx={{ marginLeft: "1vh" }} /> },
  ];
  const icon = icons.map((item, index) => <div key={index}>{item.icon}</div>);

  return (
    <div>
      <Layout icon={icon} />
    </div>
  );
}
