import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  Button,
  Dialog,
  Typography,
  TextField,
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  ListItemIcon,
  useTheme,
} from "@mui/material"
import { Login, Visibility, VisibilityOff } from "@mui/icons-material"
import { getUserId } from "../api"
import { setUserId } from "../../redux/reducer"

export const LogIn: React.FC<DisplayProps> = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useTheme()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>()

  const onSubmit: SubmitHandler<UserFormValues> = async data => {
    try {
      const response = await getUserId(data)
      const userId: number = response.userId
      if (!userId) {
        setAuthError("Username or Password is incorrect")
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
