import { Typography, TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        localStorage.setItem("user", JSON.stringify(formData));
      }}
    >
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
          Register to BlogApp
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
          label="Email"
          name="email"
          type="email"
          sx={{ marginY: "1rem" }}
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => {
              return { ...prev, email: event.target.value };
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginY: "1rem" }}
        >
          Register
        </Button>
        <Link to="/login">
          <Button>Already a user?</Button>
        </Link>
      </Box>
    </form>
  );
};

export default RegisterForm;
