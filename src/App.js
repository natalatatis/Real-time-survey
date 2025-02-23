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
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
} from "@mui/material";

function App() {
  //Create a theme with a custom font
  const theme = createTheme({
    typography: {
      fontFamily: "'Inter', sans-serif",
    },
  });

  //state to store the values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    satisfaction: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [satisfaction, setSatisfaction] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ecc35b",
          padding: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: 4,
            borderRadius: 3,
            boxShadow: 3,
            width: "100%",
            maxWidth: 500,
          }}
        >
          <h2>PLEASE COMPLETE THE SURVEY</h2>

          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <FormControl component="fieldset" margin="normal">
            <h4>Satisfaction Level</h4>
            <RadioGroup
              name="satisfaction"
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => console.log(formData)}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
