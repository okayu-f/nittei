import "./App.css";
import Calender from "./Calender";
import Times from "./Times";

import { useState } from "react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container, TextField } from "@mui/material";

const Main: React.FC = () => {
  const [text, setText] = useState("以下の日程でご都合いかがでしょうか。");

  const handleClick = (date: Date) => {
    const newText = text + `\n${format(date, "M月d日(E) ", { locale: ja })}`;
    setText(newText);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Calender onCalenderClick={handleClick} />
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
              value={text}
              onChange={(e) => setText(e.target.value)}
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
  );
};

const App = () => {
  return (
    <Container sx={{ minWidth: 720 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
        日程調整メーカー
      </Typography>
      <Main />
    </Container>
  );
};

export default App;
