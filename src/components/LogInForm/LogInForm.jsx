import { Typography, TextField, Box, Button } from "@mui/material";

const LogInForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20rem",
        bgcolor: "whitesmoke",
        padding: "2.5rem",
        borderRadius: "1em",
        alignItems: "center",
      }}
    >
      <Typography sx={{ marginY: "1rem", fontSize: "1.5rem" }}>
        Log in to BlogApp
      </Typography>
      <TextField label="Username" sx={{ marginY: "1rem" }}></TextField>
      <TextField
        type="password"
        label="Password"
        sx={{ marginY: "1rem" }}
      ></TextField>
      <Button variant="contained" color="primary" sx={{ marginY: "1rem" }}>
        Log In
      </Button>
    </Box>
  );
};

export default LogInForm;
