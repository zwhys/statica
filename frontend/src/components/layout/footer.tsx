import { Box, Typography, IconButton, Link } from "@mui/material"
import { GitHub, LinkedIn } from "@mui/icons-material"
import { FaFileCode } from "react-icons/fa"

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        bgcolor: theme => theme.palette.grey[900],
        color: theme => theme.palette.grey[50],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <Link href="/about" underline="hover" sx={{ color: "#F8F1EB" }}>
          About
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScA92xHdi9H1FGf4_392WnDyHnTM7BF2cwmnlT9uzgjTPIizQ/viewform"
          target="_blank"
          underline="hover"
          sx={{ color: "#F8F1EB" }}
        >
          Report Bugs
        </Link>
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

      <Typography variant="body2">
        © {new Date().getFullYear()} Statica. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
