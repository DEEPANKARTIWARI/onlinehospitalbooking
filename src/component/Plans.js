import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import "../component/Plans.css";

function Plans({ setMenudata }) {
  const [bookSlot, setBookSlot] = useState([
    {
      img: "https://newassets.apollo247.com/organs/ic_blood.png",
      test: "Blood test",
      drName: "Prem Jadhav",
      mrp: "320",
      actMrp: "180",
      slots: "10",
    },
    {
      img: "https://newassets.apollo247.com/organs/ic_thyroid.png",
      test: "Thyroid",
      drName: "Suhail Ahamed",
      mrp: "435",
      actMrp: "370",
      slots: "10",
    },
    {
      img: "https://newassets.apollo247.com/organs/ic_kidney.png",
      test: "Complete Urine Examination",
      drName: "Mani",
      mrp: "524",
      actMrp: "420",
      slots: "10",
    },
    {
      img: "https://newassets.apollo247.com/cms/2021-05/heart.png",
      test: "Blood Pressure",
      drName: "Sheetal Bagal",
      mrp: "199",
      actMrp: "109",
      slots: "10",
    },
    {
      img: "https://newassets.apollo247.com/cms/2021-07/Full%20body.png",
      test: "Full Body Checkup",
      drName: "Samanth ",
      mrp: "1435",
      actMrp: "1370",
      slots: "10",
    },
    {
      img: "https://newassets.apollo247.com/cms/2021-05/pregnancy.png",
      test: "Pregnancy Test",
      drName: "Mounika",
      mrp: "599",
      actMrp: "449",
      slots: "10",
    },
  ]);

  // let temp;
  // let lc = localStorage.getItem("adminData");
  // if (lc === !null) {
  //   temp = JSON.parse(lc);
  // } else {
  //   temp = bookSlot;
  // }
  // localStorage.setItem("adminData", JSON.stringify(bookSlot));

  let temp = JSON.parse(localStorage.getItem("adminData"));

  return (
    <Container gutterBottom>
      <Box className="bx-1">
        <Grid container spacing={2}>
          {temp.map((e,i) => {
            return (
              <Grid item key={i} lg={4}>
                <Card>
                  <CardContent>
                    <div className="cb1">
                      <img src={e.img} alt="blood-test" />
                    </div>
                    <Typography variant="h5" component="div" gutterBottom>
                      {e.test}
                    </Typography>
                    <div className="cb2">
                      <div>
                        <Typography
                          variant="h6"
                          gutterBottom
                          color="text.secondary"
                        >
                          Dr. {e.drName}
                        </Typography>
                      </div>
                      <div className="cb3">
                        <div>
                          <div className="cb4">
                            <div>
                              <span className="cb01">MRP</span>
                              <span className="cb02">₹{e.mrp}</span>
                              <span className="cb03">23% off</span>
                            </div>
                          </div>
                        </div>
                        <div className="cb5">
                          <p>₹{e.actMrp}</p>
                        </div>
                        <div>
                          <Typography
                            variant="body1"
                            marginTop={3}
                            color="green"
                          >
                            Available slots- {e.slots}/10
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => setMenudata("Book Slots")}>
                      Book slot
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default Plans;
