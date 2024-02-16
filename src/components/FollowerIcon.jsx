import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Follow from "./Follow";
export default function FollowerIcon() {
  const groups = [
    {
      av: <Avatar>S</Avatar>,
      text: <span style={{}}>"Sanshika"</span>,
      butt: (
        <Button
          variant="outlined"
          sx={{ marginTop: "-70px", marginRight: "-70px" }}
        >
          follow
        </Button>
      ),
    },
    {
      av: <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar>,
      text: "Dinesh",
      butt: (
        <Button
          variant="outlined"
          sx={{ marginTop: "-70px", marginRight: "-70px" }}
        >
          follow
        </Button>
      ),
    },
    {
      av: <Avatar sx={{ bgcolor: deepPurple[500] }}>KV</Avatar>,
      text: "Krithvik",

      butt: (
        <Button
          variant="outlined"
          sx={{ marginTop: "-70px", marginRight: "-70px" }}
        >
          follow
        </Button>
      ),
    },
    {
      av: <Avatar sx={{ bgcolor: deepPurple[500] }}>SP</Avatar>,
      text: "Shobika",
      butt: (
        <Button
          variant="outlined"
          sx={{ marginTop: "-70px", marginRight: "-70px" }}
        >
          follow
        </Button>
      ),
    },
    {
      av: <Avatar sx={{ bgcolor: deepPurple[500] }}>DP</Avatar>,
      text: "Deepa",
      butt: (
        <Button
          variant="outlined"
          sx={{ marginTop: "-70px", marginRight: "-70px" }}
        >
          follow
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Follow group={groups} />
    </div>
  );
}
