import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  Button,
  Box,
  CircularProgress,
  Dialog,
  IconButton,
  InputAdornment,
  ListItemIcon,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material"
import { Login, Visibility, VisibilityOff } from "@mui/icons-material"
import { getUserId } from "../api"
import { setUserId } from "../../redux/reducer"

export const LogIn: React.FC<DisplayProps> = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useTheme()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormValues>()

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      setIsProcessing(true)
      const response = await getUserId(data)
      const userId: number = response.userId
      if (!userId) {
        setAuthError("Username or Password is incorrect")
        setIsProcessing(false)
        return
      }
      dispatch(setUserId(userId))
      navigate("/")
    } catch (error) {
      console.error("Error during login:", error)
    }
  }

  return (
    <>
      <MenuItem onClick={() => setIsDialogOpen(true)}>
        <ListItemIcon>
          <Login fontSize="small" />
        </ListItemIcon>
        Login
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
            <Box sx={{ width: { xs: "100%", sm: "50%" }, margin: 3 }} alignContent="center">
              <Typography variant="h4" sx={{ textAlign: "left", marginBottom: 2 }}>
                Login
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
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary,
                  },
                }}
                {...register("password", {
                  required: "Password is required",
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
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
                  background: theme.palette.primary.main,
                  color: theme.palette.text.secondary,
                }}
                disabled={isProcessing}
              >
                {isProcessing ? <CircularProgress size="25px" /> : "Login"}
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
            />
          </Stack>
        </form>
      </Dialog>
    </>
  )
}

export default LogIn
