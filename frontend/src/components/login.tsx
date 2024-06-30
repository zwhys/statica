import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Dialog, Typography, TextField, Box } from "@mui/material"

const LogIn: React.FC<Props> = ({ open, onClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormValues>()

  const checkIsAuthenticated = async (username: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3001/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        throw new Error("Authentication failed")
      }

      const result = await response.json()
      return result.isLogInDetailsValid
    } catch (error) {
      console.error("Error checking authentication:", error)
      return false
    }
  }

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      const isAuthenticated = await checkIsAuthenticated(data.username, data.password)

      if (!isAuthenticated) {
        // Handle authentication failure, show error message, etc.
        return
      }

      setIsAuthenticated(true)
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
        sx={{ margin: 1, background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color:"white" }}
        onClick={() => setIsDialogOpen(true)}
      >
        Log In
      </Button>
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
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
                  required: "Required",
                  maxLength: {
                    value: 50,
                    message: "Username cannot exceed 50 characters",
                  },
                })}
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                margin="normal"
                fullWidth
                {...register("password", {
                  required: "Required",
                  validate: async value => {
                    if (!isAuthenticated) {
                      return "Incorrect Password."
                    }
                    return true
                  },
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color:"white" }}
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
//TODO: Fix logging in feature
