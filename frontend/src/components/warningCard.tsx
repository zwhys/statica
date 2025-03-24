import { Card, CardContent, Button, Typography, useTheme, Box } from "@mui/material"
import { useState } from "react"

export default function WarningCard() {
  const [isVisible, setIsVisible] = useState(true)
  const theme = useTheme()

  return (
    <>
      {isVisible ? (
        <Card
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            maxWidth: 400,
            backgroundColor: theme.palette.background.paper,
            border: "1px solid red",
            padding: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Typography variant="h5">Security Warning</Typography>
            <Button variant="contained" color="error" onClick={() => setIsVisible(false)}>
              Hide
            </Button>
          </Box>
          <CardContent>
            <Typography variant="body2">
              This site is no longer actively maintained and may not be secure. Do not enter any
              sensitive information.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Button
          variant="contained"
          color="error"
          onClick={() => setIsVisible(true)}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          Show Warning
        </Button>
      )}
    </>
  )
}
