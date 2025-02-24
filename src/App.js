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

  //email validation
  const [emailError, setEmailError] = useState("");

  //success message for when the survey is sent
  const [successMessage, setSuccessMessage] = useState("");

  //function that handles everything when submitted
  const handleSubmit = () => {
    if (!formData.email.includes("@")) {
      setEmailError("Invalid email address!");
      return;
    }
    setEmailError("");

    setSuccessMessage("Survey complete!");

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        age: "",
        satisfaction: "",
      });
      setSuccessMessage("");
    }, 5000);
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

  const [ageError, setAgeError] = useState("");

  const handleChange = (e) => {
    //this prevents gettting ages under 12 or above 120
    const { name, value } = e.target;
    if (name === "age") {
      const age = Number(value);
      if (age && (age < 12 || age > 120)) {
        setAgeError("Age must be between 12 and 120.");
      } else {
        setAgeError("");
      }
    }

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
          <h2>RATE OUR SERVICE</h2>

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
            label="Name *"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email *"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            label="Age *"
            name="age"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.age}
            onChange={handleChange}
            error={!!ageError}
            helperText={ageError}
          />

          <FormControl component="fieldset" margin="normal">
            <h4>Satisfaction Level *</h4>
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
            onClick={handleSubmit}
            disabled={
              !formData.name.trim() ||
              !formData.email.trim() ||
              !formData.age.trim() ||
              !formData.satisfaction
            }
          >
            Submit
          </Button>
          {successMessage && (
            <Typography
              variant="body1"
              sx={{
                color: "green",
                mt: 2,
                fontWeight: "bold",
              }}
            >
              {successMessage}
            </Typography>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
