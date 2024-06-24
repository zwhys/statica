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
          width: 300,
          padding: 4,
          borderRadius: 1,
          boxShadow: 1,
          bgcolor: "white"
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <Link href="/calendar">
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default Login
