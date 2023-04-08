import React from "react";
import Navbar from "./components/Navbar";
import { Container, Grid } from "@mui/material";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/SliderSelect";

function App() {
  return <div className="App">
    <Navbar />
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>

      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}>
          <SliderSelect />
          <TenureSelect />
        </Grid>
        <Grid item xs={12} md={6}>
          <Result />
        </Grid>
      </Grid>

    </Container>
  </div>;
}

export default App;