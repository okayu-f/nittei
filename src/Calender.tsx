import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { getYear, getMonth, getDay, previousSunday, nextSaturday } from "date-fns";

const Calender: React.FC = () => {
  const today = new Date();
  const { month, setMonth } = useState(getMonth(today));
  const startOfMonth = new Date(getYear(today), month, 1);
  const startDate = getDay(startOfMonth) === 0 ? startOfMonth : previousSunday(startOfMonth);
  const endOfMonth = new Date(getYear(today), month + 1, 0);
  const endDate = getDay(endOfMonth) === 6 ? endOfMonth : nextSaturday(endOfMonth);

  // const days: Date[] = Array.from({ length: (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1 }, (_, index) => {
  //   const currentDate = new Date(startDate);
  //   currentDate.setDate(startDate.getDate() + index);
  //   return currentDate;
  // });

  const days: Date[] = [
    new Date(2024, 4, 1),
    new Date(2024, 4, 2),
    new Date(2024, 4, 3),
    new Date(2024, 4, 4),
    new Date(2024, 4, 5),
    new Date(2024, 4, 6),
    new Date(2024, 4, 7),
    new Date(2024, 4, 8),
    new Date(2024, 4, 9),
    new Date(2024, 4, 10),
    new Date(2024, 4, 11),
    new Date(2024, 4, 12),
    new Date(2024, 4, 13),
    new Date(2024, 4, 14),
    new Date(2024, 4, 15),
    new Date(2024, 4, 16),
    new Date(2024, 4, 17),
    new Date(2024, 4, 18),
    new Date(2024, 4, 19),
    new Date(2024, 4, 20),
    new Date(2024, 4, 21),
    new Date(2024, 4, 22),
    new Date(2024, 4, 23),
    new Date(2024, 4, 24),
    new Date(2024, 4, 25),
    new Date(2024, 4, 26),
    new Date(2024, 4, 27),
    new Date(2024, 4, 28),
    new Date(2024, 4, 29),
    new Date(2024, 4, 30),
    new Date(2024, 5, 1),
    new Date(2024, 5, 2),
    new Date(2024, 5, 3),
    new Date(2024, 5, 4),
    new Date(2024, 5, 5),
  ]

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
        {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
          <Grid item xs={1} key={day}>
            <Typography sx={{ fontWeight: "bold" }}>{day}</Typography>
          </Grid>
        ))}
      </Grid>
      {Array.from({ length: 5 }, (_, index) => (
        <Week key={index} days={days.slice(index * 7, (index + 1) * 7)} />
      ))}
    </>
  );
};

interface WeekProps {
  days: Date[];
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
  day: Date;
}

const Day: React.FC<DayProps> = (props) => {
  const day = props.day.getDate();
  return (
    <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
      {day}
    </Button>
  );
};

export default Calender;
