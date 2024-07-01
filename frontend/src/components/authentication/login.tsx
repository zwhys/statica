import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Dialog, Typography, TextField, Box } from "@mui/material"

const LogIn: React.FC<Props> = ({ open, onClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [authError, setAuthError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormValues>()

  const checkIsAuthenticated = async (data: UserFormValues) => {
    try {
      const response = await fetch("http://localhost:3001/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log(result)
      return result.isAuthenticated // bool
    } catch (error) {
      console.error("Error checking authentication:", error)
      return false
    }
  }

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      const isAuthenticated = await checkIsAuthenticated(data)
      if (!isAuthenticated) {
        setAuthError("Username or Password is incorrect")
        return
      }

      onClose()
      reset()
      window.location.href = "/home"
    } catch (error) {
      console.error("Error during login:", error)
    }
  }

  return (
    <>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        sx={{
          margin: 1,
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white",
        }}
        onClick={() => setIsDialogOpen(true)}
      >
        Log In
      </Button>
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 8,
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" height={500} width={722}>
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={{ margin: 3 }}
            >
              <Typography variant="h4" sx={{ textAlign: "left", marginBottom: 2 }}>
                Login
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                {...register("username", {
                  required: "Username is required",
                })}
                error={!!errors.username || !!authError}
                helperText={errors.username ? errors.username.message : authError}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                margin="normal"
                fullWidth
                {...register("password", {
                  required: "Password is required",
                })}
                error={!!errors.password || !!authError}
                helperText={errors.password ? errors.password.message : authError}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  color: "white",
                }}
              >
                Login
              </Button>
            </Box>
            <img
              src="/login.png"
              alt="Login Image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </form>
      </Dialog>
    </>
  )
}

export default LogIn
