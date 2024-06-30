//TODO: Fix logging in feature

import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  Link,
  TextField,
} from "@mui/material"

export const LogIn: React.FC<Props> = ({ open, onClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormValues>()
  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      })

      if (!response.ok) {
        throw new Error("Invalid password")
      }
      onClose()
      reset()
      window.location.href = "/calendar";
    } catch (error) {
      console.error("Error logging in:", error)
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
          <DialogContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Log in to your account
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("username", {
                required: "Required", maxLength: {
                  value: 50, 
                  message: 'Username cannot exceed 50 characters'
                }
              })}
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ""}
            />
           <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              {...register("password", {
                required: "Required",
                },
              )}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
            <Link href="/calendar">
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Login
              </Button>
            </Link>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

export default LogIn
