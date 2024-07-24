import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  ListItemIcon,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material"
import { addUser, checkUsernameAvailable } from "../api"
import { setUserId } from "../../redux/reducer"
import { Login, PersonAdd } from "@mui/icons-material"

export const SignUp: React.FC<DisplayProps> = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>()

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      const usernameAvailabilityResponse = await checkUsernameAvailable(data.username)
      const isUsernameAvailable: boolean = usernameAvailabilityResponse.isUsernameAvailable
      if (!isUsernameAvailable) {
        return
      }
      const responseData = await addUser(data)
      const userId: number = responseData.userId
      dispatch(setUserId(userId))
      navigate("/?dialog=open") //TODO: Fix this so that it opens
    } catch (error) {
      console.error("Error adding user:", error)
    }
  }

  const password = watch("password", "")
  const confirmPassword = watch("confirmPassword", "")

  const passwordsMatch = password && confirmPassword === password

  return (
    <>
      <MenuItem onClick={() => setIsDialogOpen(true)}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Signup
      </MenuItem>
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
                    const response = await checkUsernameAvailable(value)
                    const isUsernameAvailable: boolean = response.isUsernameAvailable
                    if (!isUsernameAvailable) {
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
                type={showPassword ? "text" : "password"}
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
                <>
                  <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showPassword}
                        onClick={() => setShowPassword(!showPassword)}
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
                  background: "#8390FA",
                  color: "white",
                }}
                disabled={!passwordsMatch}
              >
                Sign Up
              </Button>
            </Box>
            <img src="/login.png" alt="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Box>
        </form>
      </Dialog>
    </>
  )
}

export default SignUp

//!: Fix password visibility feature for signup where you can click outside and still change it
//TODO: fix noimplicitany
