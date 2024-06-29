//TODO: Add unique username requirement

import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Dialog, DialogContent, Typography, TextField } from "@mui/material"

export const SignUp: React.FC<Props> = ({ open, onClose }) => {
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
      console.log(data)
      const response = await fetch("http://localhost:3001/add_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to add user")
      }

      onClose()
      reset()
      window.location.href = "/calendar"
    } catch (error) {
      console.error("Error adding user:", error)
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
        Sign Up
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Create an account
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("username", {
                required: "Required",
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
                pattern: {
                  value: /^.{8,}$/,
                  message: "Password must be at least 8 characters long",
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

export default SignUp
