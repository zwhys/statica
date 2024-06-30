import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Dialog, DialogContent, Typography, TextField } from "@mui/material"


const SignUp: React.FC<Props> = ({ open, onClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormValues>()

  const checkUniqueUsername = async (username: string) => {
    try {
      const response = await fetch("http://localhost:3001/check_username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })

      const result = await response.json()
      return result.isUnique
    } catch (error) {
      console.error("Error checking username uniqueness:", error)
      return false
    }
  }

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      const isUnique = await checkUniqueUsername(data.username)

      if (!isUnique) {
        return
      }

      const response = await fetch("http://localhost:3001/add_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

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
                maxLength: {
                  value: 50,
                  message: "Username cannot exceed 50 characters",
                },
                validate: async value => {
                  const isUnique = await checkUniqueUsername(value)
                  if (!isUnique) {
                    return "Username is taken. Please choose another"
                  }
                  return true
                },
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
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

export default SignUp

//TODO: Welcome user when creating new account