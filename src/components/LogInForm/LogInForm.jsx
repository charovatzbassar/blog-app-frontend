import { Typography, TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "whitesmoke",
          padding: "2.5rem",
          borderRadius: "1em",
          alignItems: "center",
        }}
      >
        <Typography sx={{ marginY: "1rem", fontSize: "1.5rem" }}>
          Log in to BlogApp
        </Typography>
        <TextField
          label="Username"
          name="username"
          sx={{ marginY: "1rem" }}
          value={formData.username}
          onChange={(event) =>
            setFormData((prev) => {
              return { ...prev, username: event.target.value };
            })
          }
        ></TextField>
        <TextField
          type="password"
          label="Password"
          sx={{ marginY: "1rem" }}
          value={formData.password}
          onChange={(event) =>
            setFormData((prev) => {
              return { ...prev, password: event.target.value };
            })
          }
        ></TextField>
        <Button variant="contained" color="primary" sx={{ marginY: "1rem" }}>
          Log In
        </Button>
        <Link to="/register">
          <Button>Not a user?</Button>
        </Link>
      </Box>
    </form>
  );
};

export default LogInForm;
