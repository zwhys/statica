import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Dialog, DialogContent, Typography, TextField, Grid, Box } from "@mui/material"

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
      window.location.href = "/calendar"
    } catch (error) {
      console.error("Error during login:", error)
    }
  }

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        sx={{ margin: 1 }}
        onClick={() => setIsDialogOpen(true)}
      >
        Log In
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent sx={{ height: 600, width: 900 }}>
            <Typography variant="h5" component="h1" gutterBottom>
              Log in to your account
            </Typography>
            <Box>
              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
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
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Login
              </Button>
            </Box>
            <Box>
              
            </Box>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

export default LogIn
//TODO: Fix logging in feature
