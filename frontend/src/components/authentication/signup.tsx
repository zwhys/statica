import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Dialog, Box, Typography, TextField } from "@mui/material"

const SignUp: React.FC<Props> = ({ open, onClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const {
    register,
    watch,
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

      const result = await response.json() //See what this does
        onClose()
        reset()
        window.location.href = "/home"
    } catch (error) {
      console.error("Error adding user:", error)
    }
  }

  const password = watch("password", "")
  const confirmPassword = watch("confirmPassword", "")

  const passwordsMatch = password && confirmPassword === password

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
        Sign Up
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
              {password && (
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  margin="normal"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: {
                      matchesPassword: value =>
                        value === watch("password") || "Passwords do not match",
                    },
                  })}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                />
              )}

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
                disabled={!passwordsMatch}
              >
                Sign Up
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

export default SignUp

//TODO: Welcome user when creating new account
