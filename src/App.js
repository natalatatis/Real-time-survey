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
  LinearProgress,
  Typography,
} from "@mui/material";

function App() {
  //state to store the values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    satisfaction: "",
  });

  //function to reset the survey
  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
      satisfaction: "",
    });
  };

  //fields for the progress bar
  const totalFields = Object.keys(formData).length;
  const filledFields = Object.values(formData).filter(Boolean).length;
  //percentage
  const progress = (filledFields / totalFields) * 100;

  //Create a theme with a custom font
  const theme = createTheme({
    typography: {
      fontFamily: "'Inter', sans-serif",
    },
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

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
          <h2>HOW WAS OUR SERVICE?</h2>

          {/*Progress bar */}
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ mt: 2, height: 10 }}
          />
          <Typography variant="body2">
            {Math.round(progress)}% completed
          </Typography>

          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.age}
            onChange={handleChange}
          />

          <FormControl component="fieldset" margin="normal">
            <h4>Satisfaction Level</h4>
            <RadioGroup
              name="satisfaction"
              value={formData.satisfaction}
              onChange={handleChange}
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
            onClick={handleClear}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
