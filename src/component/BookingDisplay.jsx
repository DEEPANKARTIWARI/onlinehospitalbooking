import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useState } from "react";

function BookingDisplay() {
  const [first, setfirst] = useState(false);
  let ls = JSON.parse(localStorage.getItem("email.bookings"));
  const cancelBooking = (index) => {
    console.log(index);
    ls.splice(index, 1);
    localStorage.setItem("email.bookings", JSON.stringify(ls));
    setfirst(!first);
  };
  let isEmpty = false;
  if (ls == null || ls.length === 0) {
    isEmpty = true;
  }
  return (
    <Box>
      <Typography variant="h2">Your Bookings</Typography>

      {ls &&
        ls.map((element, index) => {
          return (
            <Box
              textAlign={"start"}
              key={index}
              padding={5}
              sx={{
                border: "solid",
                borderColor: "red",
                borderRadius: "50px",
                margin: 5,
                backgroundImage: " linear-gradient(to right, red , yellow)",
              }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ float: "right" }}
                onClick={() => {
                  cancelBooking(index);
                }}
              >
                Cancel booking
              </Button>

              <Typography variant="h3" fontFamily={"fantasy"} my={2}>
                Plan:{element.Plan}
              </Typography>
              <Typography variant="h5" fontFamily={"cursive"} my={2}>
                Doctor Name:
              </Typography>
              <Typography variant="h3" fontFamily={"monospace"} my={2}>
                Date:{element.Date}
              </Typography>
              <Typography variant="h3" fontFamily={"fantasy"} my={2}>
                Price:
              </Typography>
              <Typography variant="h4" fontFamily={"monospace"} my={2}>
                Mode of payment:{element.Payment}
              </Typography>
            </Box>
          );
        })}

      {isEmpty && (
        <>
          <Typography variant="h2" fontFamily={"fantasy"}>
            No bookings!!!!
          </Typography>
          <Typography variant="h3" fontFamily={"cursive"}>
            We are happy that You are healthy
          </Typography>
        </>
      )}
    </Box>
  );
}

export default BookingDisplay;
