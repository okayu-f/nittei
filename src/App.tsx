import "./App.css";
import Calender from "./Calender";
import Times from "./Times";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container, TextField } from "@mui/material";


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
