import { Box, Button, Container, Stack, TextField } from "@mui/material";
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
  };

  return (
    <Container>
      <TextField
        onChange={handleChange}
        label="Please Enter Name"
        variant="standard"
        fullWidth
        margin="dense"
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
