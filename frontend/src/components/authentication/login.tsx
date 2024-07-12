import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux"
import {
  Button,
  Dialog,
  Typography,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material/"
import { getUserId } from "../api"
import { setUserId } from "../../redux/actions"

const LogIn: React.FC<Props> = ({ open, onClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState("")
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>()

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      const userId: number = await getUserId(data)
      if (!userId) {
        return
      }
      console.log(userId)
      dispatch(setUserId(userId))
      window.location.href = "/home"
      setAuthError("Username or Password is incorrect")
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
                type={showPassword ? "text" : "password"}
                margin="normal"
                fullWidth
                {...register("password", {
                  required: "Password is required",
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
