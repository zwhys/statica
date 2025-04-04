import React, { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material"
import { fetchUserInfo, updateUserInfo } from "./api"
import { useMutation, useQuery } from "@tanstack/react-query"

export const UserProfileDialog: React.FC<DisplayProps> = ({ open, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const userId = useSelector((state: RootState) => state.user.userId)
  const theme = useTheme()

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => fetchUserInfo(userId),
    enabled: !!userId,
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserInfoFormValues>({
    defaultValues: { userId: userId, ...userInfo },
  })
  console.log(userInfo)
  const mutation = useMutation({
    mutationFn: async (data: UserInfoFormValues) => {
      return updateUserInfo(data, userId)
    },
    onSuccess: () => {
      onClose()
    },
    onError: error => {
      console.error("Error editing user info:", error)
    },
    onSettled: () => {
      setIsProcessing(false)
    },
  })

  const onSubmit: SubmitHandler<UserInfoFormValues> = data => {
    setIsProcessing(true)
    mutation.mutate(data)
    reset(userInfo)
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose()
        reset()
      }}
      PaperProps={{
        sx: {
          borderRadius: 4,
        },
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 2 }}>
          User Info
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                id="age"
                label="Age"
                variant="outlined"
                placeholder="Eg. 25"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary,
                  },
                }}
                {...register("age", {
                  pattern: {
                    value: /^[1-9][0-9]{0,3}$/,
                    message: "Please enter a valid number",
                  },
                })}
                error={!!errors.age}
                helperText={errors.age ? errors.age.message : ""}
              />
              <TextField
                id="weight"
                label="Weight"
                variant="outlined"
                placeholder="Eg. 70kg"
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.primary,
                  },
                }}
                {...register("weight", {
                  pattern: {
                    value: /^[1-9][0-9]{0,3}$/,
                    message: "Please enter a valid number",
                  },
                })}
                error={!!errors.weight}
                helperText={errors.weight ? errors.weight.message : ""}
              />
            </Stack>

            <TextField
              id="additionalInfo"
              label="Additional Information"
              variant="outlined"
              placeholder="Eg. Pre-existing Conditions, Dietary Restrictions, ..."
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.primary,
                },
              }}
              {...register("additionalInfo")}
            />

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => {
                  onClose()
                  reset()
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.text.secondary,
                  minWidth: "67px",
                }}
                disabled={isProcessing}
              >
                {isProcessing ? <CircularProgress size="25px" /> : "Save"}
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Dialog>
  )
}

export default UserProfileDialog
