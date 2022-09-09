import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useContext, useState } from "react";
import Context from "../context/Context";

function NameSearch() {
  const { setName, getData } = useContext(Context);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setName(input);
    getData(input);
    setInput("");
  };

  return (
    <Container>
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ padding: 1, marginTop: 4 }}
      >
        Predict Nationality, Gender and Age of a person given their name!
      </Typography>
      <Divider />
      <TextField
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        label="Please Enter Name"
        variant="standard"
        fullWidth
        margin="dense"
        value={input}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default NameSearch;
