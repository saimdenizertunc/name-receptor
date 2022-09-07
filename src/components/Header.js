import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
        <Typography
          variant="h4"
          component="a"
          href="/"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Name Receptor
        </Typography>
      </Container>
    </AppBar>
  );
}

export default Header;
