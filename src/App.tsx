import "./App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container, TextField } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Calender: React.FC = () => {
  const days: number[] = [];
  days.push(31);
  days.push(...[...Array(30)].map((_, index) => index + 1));
  days.push(...[...Array(4)].map((_, index) => index + 1));
  console.log(days);
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Button variant="text">
            <KeyboardArrowLeftIcon />
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">今日</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="text">2024年4月</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">
            <KeyboardArrowRightIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid container columns={7}>
        <Grid item xs={1}>
          <Typography sx={{ fontWeight: "bold" }}>日</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ fontWeight: "bold" }}>月</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ fontWeight: "bold" }}>火</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ fontWeight: "bold" }}>水</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ fontWeight: "bold" }}>木</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ fontWeight: "bold" }}>金</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ fontWeight: "bold" }}>土</Typography>
        </Grid>
      </Grid>
      {[...Array(5)].map((_, index) => (
        <Week key={index} days={days.slice(index * 7, (index + 1) * 7)} />
      ))}
    </>
  );
};

interface WeekProps {
  days: number[];
}

const Week: React.FC<WeekProps> = (props) => {
  return (
    <Grid container columns={7} spacing={0}>
      <Grid item xs={1}>
        <Day day={props.days[0]} />
      </Grid>
      <Grid item xs={1}>
        <Day day={props.days[1]} />
      </Grid>
      <Grid item xs={1}>
        <Day day={props.days[2]} />
      </Grid>
      <Grid item xs={1}>
        <Day day={props.days[3]} />
      </Grid>
      <Grid item xs={1}>
        <Day day={props.days[4]} />
      </Grid>
      <Grid item xs={1}>
        <Day day={props.days[5]} />
      </Grid>
      <Grid item xs={1}>
        <Day day={props.days[6]} />
      </Grid>
    </Grid>
  );
};

interface DayProps {
  day: number;
}

const Day: React.FC<DayProps> = (props) => {
  return (
    <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
      {props.day}
    </Button>
  );
};

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

function App() {
  return (
    <Container sx={{ minWidth: 720 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
        日程調整メーカー
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Calender />
            </Grid>
            <Grid item xs={4}>
              <Times />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                multiline
                minRows={8}
                defaultValue={"以下の日程でご都合いかがでしょうか。"}
                inputProps={{ style: { fontSize: 14 } }}
                sx={{ width: "100%" }}
              >
                日程調整メーカー
              </TextField>
            </Grid>
            <Grid item xs={8}>
              <Button variant="contained" fullWidth>
                copy
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" fullWidth>
                reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
