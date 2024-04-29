import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


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
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
            <KeyboardArrowLeftIcon />
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
            今日
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
            2024年4月
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
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

export default Calender;
