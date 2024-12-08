import { Box, Typography, IconButton } from "@mui/material"
import { GitHub, LinkedIn } from "@mui/icons-material"
import { FaFileCode } from "react-icons/fa"

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        bgcolor: theme => theme.palette.grey[900], // Dark gray background
        color: theme => theme.palette.grey[50], // Light text color
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography>About</Typography>
        <Typography>Services</Typography>
        <Typography>Contact</Typography>
        <Typography>Privacy Policy</Typography>
      </Box>

      <Box>
        <IconButton color="inherit" href="https://github.com/zwhys" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton color="inherit" href="https://leetcode.com/u/tanziyan/" target="_blank">
          <FaFileCode />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://linkedin.com/in/tan-zi-yan-9087ab2b9/"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Footer Text */}
      <Typography variant="body2">
        © {new Date().getFullYear()} Railway. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
