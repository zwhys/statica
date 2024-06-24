import React from "react"
import { Link, Container, Box, Typography, TextField, Button } from "@mui/material"

export function Login() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          width: 500,
          padding: 4,
          borderRadius: 1,
          boxShadow: 1,
          bgcolor: "white"
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Log in to your account
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <Link href="/home">
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </Link>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Link
            href="/statistics"
            underline="always"
            color="inherit"
            variant="body1"
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="body1">Forgot Password?</Typography>
          </Link>
          <Link
            href="/statistics"
            underline="always"
            color="inherit"
            variant="body1"
            sx={{ marginLeft: 1, cursor: "pointer" }}
          >
            <Typography variant="body1">Forgot Username?</Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
