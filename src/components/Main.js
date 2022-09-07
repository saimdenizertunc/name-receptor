import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import React from "react";

function Main() {
  return (
    <>
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ padding: 1, marginTop: 4 }}
      >
        Predict Nationality, Gender and Age of a person given their name!
      </Typography>
      <Container>
        <TextField
          onChange={() => {}}
          label="Please Enter Name"
          variant="standard"
          fullWidth
          margin="dense"
        />
        <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large" endIcon={<SendIcon />}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Main;
