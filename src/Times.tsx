import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Times: React.FC = () => {
  const times: string[] = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
  return (
    <Grid container direction="column" spacing={0}>
      <Grid item>
        <Button
          variant="text"
          sx={{ width: "50%", minWidth: "0px", height: 30 }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      </Grid>
      {times.map((time, index) => (
        <Grid item key={index} sx={{ height: 30 }}>
          <Button variant="text" sx={{ width: "50%", minWidth: "0px" }}>
            {time}
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Button
          variant="text"
          sx={{ width: "50%", minWidth: "0px", height: 30 }}
        >
          <KeyboardArrowDownIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Times;
