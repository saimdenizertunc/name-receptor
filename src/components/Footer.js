import { Box, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

function Copyright() {
  return (
    <Typography
      variant="caption"
      color="text.secondary"
      align="center"
      component="p"
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
      <Link color="inherit" href="https://github.com/saimdenizertunc">
        Deniz Ertunç <GitHubIcon size="small" />
      </Link>
    </Typography>
  );
}

function Footer() {
  return (
    <footer>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Copyright />
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
