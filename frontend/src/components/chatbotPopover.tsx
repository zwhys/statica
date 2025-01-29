import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  Box,
  Grid,
  Popover,
  TextField,
  useTheme,
} from "@mui/material"

export const ChatbotPopover: React.FC<DisplayProps> = ({ open, onClose, anchorEl }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const theme = useTheme()

  const { register, handleSubmit, reset } = useForm<UserInfoFormValues>()

  const onSubmit: SubmitHandler<UserInfoFormValues> = async data => {
    try {
      setIsProcessing(true)
      setIsProcessing(false)
    } catch (error) {
      console.error("Error editing user info:", error)
    }
  }

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={() => {
        onClose()
        reset()
      }}
      anchorOrigin={{
        horizontal: "center",
        vertical: "top",
      }}
      transformOrigin={{
        horizontal: "center",
        vertical: 65,
      }}
    >
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <TextField
              id="additional_info"
              label="Start a chat"
              variant="outlined"
              placeholder="Eg. Pre-existing Conditions, Dietary Restrictions, ..."
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.primary,
                },
              }}
              {...register("additional_info")}
            />
          </Grid>
        </form>
      </Box>
    </Popover>
  )
}

export default ChatbotPopover
