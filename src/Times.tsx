import Button from "@mui/material/Button";
import { useState } from "react";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface TimesProps {
  onTimesClick: (time: string) => void;
}

const Times: React.FC<TimesProps> = ({onTimesClick}) => {
  const timesList: string[] = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
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
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];
  const [timesStart, setTimesStart] = useState(20);
  const times = timesList.slice(timesStart, timesStart + 14);

  const handleUpClick = () => {
    if (timesStart > 0) {
      setTimesStart(timesStart - 1);
    }
  }

  const handleDownClick = () => {
    if (timesStart < 34) {
      setTimesStart(timesStart + 1);
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleUpClick();
    } else {
      handleDownClick();
    }
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <Button variant="text" onClick={handleUpClick} sx={{ width: "50%", minWidth: "0px", height: 30 }}>
          <KeyboardArrowUpIcon />
        </Button>
      </Box>
      <Box onWheel={handleWheel}>
        {times.map((time, index) => (
          <Box key={index}>
            <Button variant="text" onClick={() => onTimesClick(time)} sx={{ width: "50%", minWidth: "0px", height: 30 }}>
              {time}
            </Button>
          </Box>
        ))}
      </Box>
      <Box>
        <Button variant="text" onClick={handleDownClick} sx={{ width: "50%", minWidth: "0px", height: 30 }}>
          <KeyboardArrowDownIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Times;
