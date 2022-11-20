import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Tlo from "../Image/order.jpg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
const Order = (props) => {
  const [orders, setOrders] = useState([]);
  const [cost, setCost] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.newPizza) {
      setOrders((ord) => [...ord, props.newPizza]);
    }
  }, [props.newPizza]);

  useEffect(() => {
    let costAll = orders.reduce((suma, pizza) => suma + pizza.koszt, 0);
    setCost(costAll);
  }, [orders]);

  const deletePizza = (indx) => {
    let ord = orders.filter((pizza, index) => index !== indx);
    setOrders(ord);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pay = () => {
    setCost([]);
    setOrders([]);
    handleClickOpen();
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
              left: "74vw",
              fontFamily: "SofiaPro",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "2vw",
              //transform: "translateX(-50%)",
            }}
          >
            Zamówienie
            {orders.map((pizza, index) => {
              return (
                <div
                  key={index}
                  style={{
                    fontSize: "0.7vw",

                    display: "inline",
                  }}
                >
                  <h3>
                    {index + 1}- {pizza.size} pizza &nbsp; | &nbsp;
                    {(pizza.koszt / 100).toFixed(2)}zł
                    <Button
                      onClick={() => deletePizza(index)}
                      style={{
                        hight: "0.5vw",
                        width: "0.5vw",
                        marginLeft: "1vw",
                        color: "white",
                        backgroundColor: "red",
                      }}
                    >
                      X
                    </Button>
                  </h3>
                </div>
              );
            })}
            <p>___________________</p>
            <p
              style={{
                fontSize: "0.9vw",
                color: "white",
                position: "absolute",
              }}
            >
              Do zaplaty: {(cost / 100).toFixed(2)} zł
              <Button
                onClick={() => pay()}
                style={{
                  position: "absolute",
                  textTransform: "none",
                  background: "#920303",
                  borderRadius: 10,
                  border: "none",
                  height: "1.5vw",
                  width: "10vw",
                  color: "white",
                  fontSize: "0.8vw",
                  left: "0.2vw",
                  top: "1.5vw",
                }}
                path={"/Shopping"}
              >
                Zapłać
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <p
                  style={{
                    fonstSize: " 1vw",
                    fontWeight: "bold",
                    marginLeft: " 4vw",
                  }}
                >
                  Dziękujemy za złożenie zamówienia
                </p>
                <DialogContent>
                  Twoje zamówienie jest w trakcie realizacji! Dziękujemy
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Zamknij</Button>
                </DialogActions>
              </Dialog>
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Order;
