import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Tlo from "../Image/compose.jpg";
import Dane from "../dane.js";
import IconPizza from "../assets/pizza.png";
import Button from "@mui/material/Button";

const Compose = (props) => {
  const [dodatki, setDodatki] = useState([]);
  const [koszt, setKoszt] = useState(0);
  const [baza, setBaza] = useState(700);
  useEffect(() => {
    Dane.map((dodatek) => {
      dodatek.checked = dodatek.koszt === 0 ? true : false;
      return dodatek;
    });
    setDodatki(Dane);
  }, []);

  useEffect(() => {
    setKoszt(
      dodatki.reduce((suma, dodatek) => {
        return dodatek.checked ? suma + dodatek.koszt : suma;
      }, baza)
    );
  }, [baza, dodatki]);

  const ComposeChange = (dodatek) => {
    setDodatki(
      dodatki.map((el) => {
        if (el.nazwa === dodatek.nazwa) el.checked = !el.checked;
        return el;
      })
    );
  };

  const ChangeSize = (size) => {
    setBaza(size);
  };
  const AddOrder = () => {
    let size = "Średnia";
    if (baza === 600) {
      size = "Mała";
    } else if (baza === 1000) {
      size = " Duża";
    }
    let order = { size: size, koszt: koszt, dodatki: [] };
    dodatki.forEach((dodatek) => {
      if (dodatek.checked) order.dodatki.push(dodatek);
    });
    props.receivePizza(order);
    resetPizza();
  };

  const resetPizza = () => {
    dodatki.forEach((dodatek) => {
      dodatek.koszt === 0
        ? (dodatek.checked = true)
        : (dodatek.checked = false);
    });
    setBaza(700);
  };

  return (
    <>
      <Card>
        <div>
          <CardMedia style={{ height: "25vw" }} component="img" src={Tlo} />
          <div
            style={{
              position: "absolute",
              color: "white",
              width: 320,
              top: "25vw",
              left: "11vw",
              fontFamily: "SofiaPro",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "2vw",
              //transform: "translateX(-50%)",
            }}
          >
            Twoja Pizza
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                width: " 20vw",
                top: "3vw",
                right: " 3vw",
              }}
            >
              <img
                onClick={() => ChangeSize(600)}
                style={{ height: "3vw", width: "3vw", cursor: "pointer" }}
                src={IconPizza}
              />
              <img
                onClick={() => ChangeSize(800)}
                style={{ height: "3.5vw", width: "3.5vw", cursor: "pointer" }}
                src={IconPizza}
              />
              <img
                onClick={() => ChangeSize(1000)}
                style={{ height: "4vw", width: "4vw", cursor: "pointer" }}
                src={IconPizza}
              />
              <p
                style={{
                  position: "absolute",
                  left: "13vw",
                  fontSize: "1.5vw",
                }}
              >
                Cena: {(koszt / 100).toFixed(2)}zł
              </p>

              <Button
                onClick={() => AddOrder()}
                style={{
                  position: "absolute",
                  left: "20vw",
                  width: "5vw",
                  height: "2vw",
                  fontSize: "0.5vw",
                  backgroundColor: "red",

                  color: "white",
                }}
              >
                Dodaj zamówienie
              </Button>
            </div>
            <div
              style={{
                position: "absolute",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                fontSize: "0.8vw",
                right: "0.1vw",
                top: "8vw",
              }}
            >
              {Dane.map((dodatek, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 1vw",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={dodatek.checked}
                      onChange={() => ComposeChange(dodatek)}
                    />
                    <div>{dodatek.nazwa}</div>

                    <p style={{ marginLeft: "auto" }}>
                      {(dodatek.koszt / 100).toFixed(2)}
                      zł
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Compose;
