import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function App() {
  const [satisfaction, setSatisfaction] = useState("");

  return (
    <Container maxWidth="sm">
      <h2>INTERACTIVE FORM</h2>

      <TextField label="Name" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Age"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControl component="fieldset" margin="normal">
        <h4>Satisfaction Level</h4>
        <RadioGroup
          value={satisfaction}
          onChange={(e) => setSatisfaction(e.target.value)}
        >
          <FormControlLabel
            value="Very Satisfied"
            control={<Radio />}
            label="Very Satisfied"
          />
          <FormControlLabel
            value="Satisfied"
            control={<Radio />}
            label="Satisfied"
          />
          <FormControlLabel
            value="Neutral"
            control={<Radio />}
            label="Neutral"
          />
          <FormControlLabel
            value="Disappointed"
            control={<Radio />}
            label="Disappointed"
          />
          <FormControlLabel
            value="Very Disappointed"
            control={<Radio />}
            label="Very Disappointed"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}

export default App;
