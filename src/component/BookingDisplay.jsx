import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

function BookingDisplay() {
  const [first, setfirst] = useState(false);
  const token = JSON.parse(localStorage.getItem("user_login"));
  let ls = JSON.parse(localStorage.getItem(`${token[0].name}.bookings`));
  let adminData = JSON.parse(localStorage.getItem("adminData"));

  const cancelBooking = (index, plan) => {
    ls.splice(index, 1);
    localStorage.setItem(`${token[0].name}.bookings`, JSON.stringify(ls));

    adminData.map((element, index) => {
      if (plan === element.test) {
        console.log(adminData[index].slots);
        adminData[index].slots = ++element.slots;
      }
      localStorage.setItem("adminData", JSON.stringify(adminData));
    });

    setfirst(!first);
  };
  let isEmpty = false;
  if (ls == null || ls.length === 0) {
    isEmpty = true;
  }
  return (
    <Box>
      <Typography
        variant="h2"
        fontFamily={"initial"}
        textAlign={"center"}
        sx={{
          backgroundImage: " linear-gradient(to right,white, black , white)",
          color: "white",
        }}
      >
        Your Bookings
      </Typography>

      {ls &&
        ls.map((element, index) => {
          return (
            <Box
              textAlign={"start"}
              key={index}
              padding={5}
              sx={{
                border: "solid",
                borderColor: "white",
                borderRadius: "50px",
                margin: 5,
                backgroundImage:
                  " linear-gradient(to right,white , #2196f3 5% , white)",
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ float: "right", display: { md: "Block", xs: "none" } }}
                  onClick={() => {
                    cancelBooking(index, element.Plan);
                  }}
                >
                  Cancel booking
                </Button>

                <DisabledByDefaultIcon
                  variant="contained"
                  color="error"
                  sx={{
                    float: "right",
                    display: { xs: "Block", md: "none" },
                    fontSize: "50px",
                  }}
                  onClick={() => {
                    cancelBooking(index, element.Plan);
                  }}
                />
              </Box>
              <Typography variant="h4" fontFamily={"fantasy"} my={1}>
                Plan:{element.Plan}
              </Typography>
              <Typography variant="h4" fontFamily={"cursive"} my={1}>
                Doctor Name: Dr. {element.Doctor}
              </Typography>
              <Typography variant="h4" fontFamily={"monospace"} my={1}>
                Date:{element.Date}
              </Typography>
              <Typography variant="h5" fontFamily={"monospace"} my={1}>
                Price:&#8377;{element.price}
              </Typography>
              <Typography variant="h5" fontFamily={"monospace"} my={1}>
                Mode of Payment:{element.Payment}
              </Typography>
            </Box>
          );
        })}

      {isEmpty && (
        <Box textAlign={"center"} my={3}>
          <Typography variant="h2" fontFamily={"fantasy"} my={3}>
            No bookings!!!!
          </Typography>
          <Typography variant="h3" fontFamily={"cursive"}>
            We are happy that You are healthy
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default BookingDisplay;
