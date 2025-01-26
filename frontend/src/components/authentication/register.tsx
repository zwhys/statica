import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux"
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material"
import { addUser, checkUsernameAvailable } from "../api"
import { setUserId } from "../../redux/reducer"

export const Register: React.FC<DisplayProps> = ({ sx, icon, text }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  const dispatch = useDispatch()
  const theme = useTheme()

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormValues>()

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      setIsProcessing(true)
      const responseData = await addUser(data)
      const userId: number = responseData.userId
      dispatch(setUserId(userId))
    } catch (error) {
      console.error("Error adding user:", error)
    }
  }

  const password = watch("password", "")
  const confirmPassword = watch("confirmPassword", "")

  const passwordsMatch = password && confirmPassword === password

  return (
    <>
      <MenuItem onClick={() => setIsDialogOpen(true)} sx={sx}>
        {icon}
        {text}
      </MenuItem>
      <Dialog
        open={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false)
          reset()
        }}
        PaperProps={{
          sx: {
            borderRadius: 8,
            width: { sx: "100%", md: "50%" },
            maxWidth: "100vw",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={"row"}>
            <Box sx={{ width: { xs: "100%", sm: "50%" }, padding: 3 }} alignContent="center">
              <Typography variant="h4" sx={{ textAlign: "left", marginBottom: 2 }}>
                Create an account
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary,
                  },
                }}
                {...register("username", {
                  required: "Required",
                  maxLength: {
                    value: 50,
                    message: "Username cannot exceed 50 characters",
                  },
                  validate: async value => {
                    try {
                      setIsProcessing(true)
                      const response = await checkUsernameAvailable(value)
                      const isUsernameAvailable: boolean = response.isUsernameAvailable
                      if (!isUsernameAvailable) {
                        return "Username is taken. Please choose another"
                      }
                      return true
                    } catch (err) {
                      console.error("Error validating username:", err)
                      return "Error validating username"
                    } finally {
                      setIsProcessing(false)
                    }
                  },
                })}
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
              />
              <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary,
                  },
                }}
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
                <>
                  <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: theme.palette.text.primary,
                      },
                    }}
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showPassword}
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{
                          color: theme.palette.text.primary,
                        }}
                      />
                    }
                    label="Show Password"
                  />
                </>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  background: theme.palette.primary.main,
                  color: theme.palette.text.secondary,
                }}
                disabled={!passwordsMatch || isProcessing}
              >
                {isProcessing ? <CircularProgress size="25px" /> : "Register"}
              </Button>
            </Box>
            <Box
              component="img"
              src="/login.png"
              alt="Login"
              sx={{
                width: "50%",
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            />{" "}
          </Stack>
        </form>
      </Dialog>
    </>
  )
}

export default Register
