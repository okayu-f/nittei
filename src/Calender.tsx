import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { getYear, getMonth, getDay, previousSunday, nextSaturday, eachDayOfInterval, startOfToday, startOfMonth, endOfMonth, isSameMonth } from "date-fns";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import gray from "@mui/material/colors/grey";

const Calender: React.FC = () => {
  const today = startOfToday();
  const [year, setYear] = useState(getYear(today));
  const [month, setMonth] = useState(getMonth(today));
  const startOfThisMonth = startOfMonth(today);
  const startDate = getDay(startOfThisMonth) === 0 ? startOfThisMonth : previousSunday(startOfThisMonth);
  const endOfThisMonth = endOfMonth(today);
  const endDate = getDay(endOfThisMonth) === 6 ? endOfThisMonth : nextSaturday(endOfThisMonth);

  const dates: Date[] = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
            <KeyboardArrowLeftIcon />
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
            今日
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
            {year}年
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="text" sx={{ width: "100%", minWidth: "0px" }}>
            {month + 1}月
          </Button>
        </Grid>
        <Grid item xs={1}>
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
        <Week key={index} dates={dates.slice(index * 7, (index + 1) * 7)} year={year} month={month}/>
      ))}
    </>
  );
};

interface WeekProps {
  dates: Date[];
  year: number;
  month: number;
}

const Week: React.FC<WeekProps> = (props) => {
  return (
    <Grid container columns={7} spacing={0}>
      {props.dates.map((date, index) => (
        <Grid item xs={1} key={index}>
          <Day date={date} year={props.year} month={props.month}/>
        </Grid>
      ))}
    </Grid>
  );
};

interface DayProps {
  date: Date;
  year: number;
  month: number;
}

const Day: React.FC<DayProps> = (props) => {
  const theme = createTheme({
    palette: {
      secondary: gray
    },
  });

  const date = props.date.getDate();
  const isThisMonth = isSameMonth(props.date, new Date(props.year, props.month, 1));
  const color = isThisMonth ? "primary" : "secondary";
  return (
    <ThemeProvider theme={theme}>
      <Button variant="text" sx={{ width: "100%", minWidth: "0px"}} color={color}>
        {date}
      </Button>
    </ThemeProvider>
  );
};

export default Calender;
