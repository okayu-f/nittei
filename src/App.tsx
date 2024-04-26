import "./App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Calender: React.FC = () => {
  const days: number[] = [...Array(31).keys()];
  console.log(days);
  return (
    <table>
      <thead>
        <Grid container columns={7}>
          <Grid item xs={1}><Typography>日</Typography></Grid>
          <Grid item xs={1}><Typography>月</Typography></Grid>
          <Grid item xs={1}><Typography>火</Typography></Grid>
          <Grid item xs={1}><Typography>水</Typography></Grid>
          <Grid item xs={1}><Typography>木</Typography></Grid>
          <Grid item xs={1}><Typography>金</Typography></Grid>
          <Grid item xs={1}><Typography>土</Typography></Grid>
        </Grid>
        {[...Array(6)].map((_, index) => (
          <Week key={index} days={days.slice(index * 7, (index + 1) * 7)} />
        ))}
      </thead>
    </table>
  );
};

interface WeekProps {
  days: number[];
}

const Week: React.FC<WeekProps> = (props) => {
  return (
    <Grid container columns={7} spacing={0}>
      <Grid item xs={1}><Day day={props.days[0]} /></Grid>
      <Grid item xs={1}><Day day={props.days[1]} /></Grid>
      <Grid item xs={1}><Day day={props.days[2]} /></Grid>
      <Grid item xs={1}><Day day={props.days[3]} /></Grid>
      <Grid item xs={1}><Day day={props.days[4]} /></Grid>
      <Grid item xs={1}><Day day={props.days[5]} /></Grid>
      <Grid item xs={1}><Day day={props.days[6]} /> </Grid>
    </Grid>
  );
};

interface DayProps {
  day: number;
}

const Day: React.FC<DayProps> = (props) => {
  return <Button variant="text" sx={{width: '100%', minWidth: "0px"}} >{props.day}</Button>;
}

function App() {
  return (
    <>
      <Typography variant="h5" component="h1" sx={{mb: 4}}>
        日程調整メーカー
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Calender />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField multiline minRows={8}>日程調整メーカー</TextField>
            </Grid>
            <Grid item xs={8}>
              <Button variant="contained" fullWidth>copy</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" fullWidth>text</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
