import React, { useState } from "react"
import { Button, useTheme } from "@mui/material"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import CloseIcon from "@mui/icons-material/Close"
import ChatbotPopover from "../chatbotPopover"

const ChatbotButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={anchorEl ? <CloseIcon /> : <AutoAwesomeIcon />}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          borderRadius: "50px",
          color: theme.palette.text.secondary
        }}
      >
        {anchorEl ? "Close Chat" : "Chat with us"}
      </Button>

      <ChatbotPopover
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
      />
    </>
  )
}

export default ChatbotButton
