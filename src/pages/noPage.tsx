import { Container, Typography, Link} from "@mui/material"
import React from "react"

export function NoPage() {
  return (
    <Container>
          <Typography variant="h4" gutterBottom>
            404 - Page Not Found
          </Typography>
          <Typography variant="body1" paragraph>
            Oops! The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </Typography>
          <Typography variant="body1" paragraph>
            Please check the URL for any spelling mistakes, or{' '}
            <Link href="/home">
              return to the homepage
            </Link>
            .
          </Typography>
      </Container>
  )
}

export default NoPage
