import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Tlo from "../Image/obrazek glowny.jpg";
import { Card } from "@material-ui/core";
import Box from "@mui/material/Box";
import Compose from "./Compose";
import Order from "./Order";
import Button from "@mui/material/Button";
const Home = () => {
  const [pizza, setPizza] = useState(0);

  const receive = (pizza) => {
    setPizza(pizza);
  };
  return (
    <>
      <Grid
        container
        alignContent="flex-start"
        alignItems="center"
        justify="flex-start"
      >
        <Card>
          <div>
            <CardMedia
              style={{ width: "100vw", height: "23vw" }}
              component="img"
              src={Tlo}
            />
            <div
              style={{
                position: "absolute",
                color: "white",
                width: 320,
                top: "6vw",
                left: "44vw",
                fontFamily: "SofiaPro",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "3vw",
                //transform: "translateX(-50%)",
              }}
            >
              Best Pizza !
            </div>
            <div
              style={{
                position: "absolute",
                color: "white",
                width: 320,
                top: "10vw",
                left: "43vw",
                fontFamily: "SofiaPro",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "0.9vw",
                //transform: "translateX(-50%)",
              }}
            >
              The best pizza on the world, only for you!
              <div
                style={{
                  position: "absolute",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  marginLeft: "21vw",
                  top: "9vw",
                }}
              >
                <Button
                  style={{
                    textTransform: "none",
                    background: "#920303",
                    borderRadius: 10,
                    border: "none",
                    height: "2vw",
                    width: "10vw",
                    color: "white",
                    fontSize: "0.7vw",
                  }}
                >
                  O Nas
                </Button>
                <Button
                  style={{
                    textTransform: "none",
                    background: "#920303",
                    borderRadius: 10,
                    border: "none",
                    height: "2vw",
                    width: "10vw",
                    color: "white",
                    fontSize: "0.7vw",
                    marginLeft: "0.8vw",
                  }}
                >
                  Dostawa
                </Button>
                <Button
                  style={{
                    textTransform: "none",
                    background: "#920303",
                    borderRadius: 10,
                    border: "none",
                    height: "2vw",
                    width: "10vw",
                    color: "white",
                    fontSize: "0.7vw",
                    marginLeft: "0.8vw",
                  }}
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Grid>
      <Box sx={{ marginTop: 2, width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={6}>
            <Compose receivePizza={receive} />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Order newPizza={pizza} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
