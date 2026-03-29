import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  alpha
} from "@mui/material";

const logoPath = "/logo-movie-1.png";

function LoginPage({ onLogin, defaultCredentials }) {
  const [email, setEmail] = useState(defaultCredentials.email);
  const [password, setPassword] = useState(defaultCredentials.password);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 2,
        py: { xs: 3, md: 4 }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 480,
          p: { xs: 3, md: 5 },
          borderRadius: "10px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.94 : 0.9),
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 28px 70px rgba(0,0,0,0.2)"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at top right, rgba(80,27,148,0.16), transparent 24%), radial-gradient(circle at bottom left, rgba(80,27,148,0.1), transparent 26%)"
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Avatar
            src={logoPath}
            alt="CineTime logo"
            variant="rounded"
            sx={{
              width: 88,
              height: 88,
              mb: 2.5,
              bgcolor: alpha("#000", 0.18),
              boxShadow: "0 18px 40px rgba(0,0,0,0.24)"
            }}
          />
          <Typography variant="overline" color="primary.light">
            Welcome Back
          </Typography>
          <Typography variant="h4" sx={{ mt: 1, maxWidth: 420 }}>
            Manager Login
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 560 }}>
            Use your hall manager credentials to open the admin dashboard.
          </Typography>

          <Box
            component="form"
            sx={{ mt: 4, display: "grid", gap: 2.25 }}
            onSubmit={(event) => {
              event.preventDefault();
              onLogin();
            }}
          >
            <TextField label="Email" value={email} onChange={(event) => setEmail(event.target.value)} fullWidth />
            <TextField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} fullWidth />
            <Button size="large" variant="contained" type="submit" sx={{ mt: 0.5, minHeight: 52 }}>
              Login to Dashboard
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginPage;
