import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { Stack } from "@mui/system";
import { alignProperty } from "@mui/material/styles/cssUtils";

function BookingSlots() {
  const [bookinginfo, setBookinginfo] = React.useState({
    Date: null,
    Gender: "",
    Plan: "",
    Payment: "",
  });
  const [bookingerror, setBookingError] = React.useState({
    DateError: false,
    GenderError: false,
    PlanError: false,
    PaymentError: false,
  });
  const validateBooking = () => {
    let error = false;
    let tempDateError = false;
    let tempGenderError = false;
    let tempPlanError = false;
    let tempPaymentError = false;
    if (bookinginfo.Date == null) {
      tempDateError = true;
      error = true;
    }
    if (bookinginfo.Gender === "") {
      tempGenderError = true;
      error = true;
    }
    if (bookinginfo.Plan === "") {
      tempPlanError = true;
      error = true;
    }
    if (bookinginfo.Payment === "") {
      tempPaymentError = true;
      error = true;
    }
    setBookingError({
      DateError: tempDateError,
      GenderError: tempGenderError,
      PlanError: tempPlanError,
      PaymentError: tempPaymentError,
    });
    if (error == false) {
      let temp;
      let lc = localStorage.getItem("email.bookings");
      if (lc == null) {
        temp = [];
      } else {
        temp = JSON.parse(lc);
      }
      temp.push(bookinginfo);
      localStorage.setItem("email.bookings", JSON.stringify(temp));
    }
  };

  return (
    <Box width={"50%"} marginLeft={"25%"} marginTop={"10%"}>
      <Typography variant="h3">Slot Booking Form</Typography>
      <Box>
        <Typography align="left">Name:</Typography>
        <Box padding={3} sx={{ display: "flex", gap: 8 }} paddingLeft={0}>
          <Typography align="left" padding={2} paddingLeft={0}>
            Date of Booking<sup style={{ color: "red" }}>*</sup>
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={bookinginfo.Date}
              onChange={(newValue) => {
                setBookinginfo({ ...bookinginfo, Date: newValue });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {bookingerror.DateError && (
            <Typography align="left" padding={2} paddingLeft={0} color="error">
              Please select the Date
            </Typography>
          )}
        </Box>
        <Typography align="left">
          Gender<sup style={{ color: "red" }}>*</sup>
        </Typography>
        {bookingerror.GenderError && (
          <Typography align="left" padding={2} paddingLeft={0} color="error">
            Please select the Gender
          </Typography>
        )}
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={bookinginfo.Gender}
          onChange={(newValue) => {
            setBookinginfo({ ...bookinginfo, Gender: newValue.target.value });
          }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <Box sx={{ minWidth: 120 }} padding={3} paddingLeft={0}>
          <Typography align="left" padding={2} paddingLeft={0}>
            Plan<sup style={{ color: "red" }}>*</sup>
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="Plan">Plan</InputLabel>{" "}
            <Select
              labelId="Plan"
              id="Plan-select"
              value={bookinginfo.Plan}
              label="Age"
              onChange={(newValue) => {
                setBookinginfo({ ...bookinginfo, Plan: newValue.target.value });
              }}
            >
              <MenuItem value={"Blood Test"}>Blood Test</MenuItem>
              <MenuItem value={"Tyroid"} disabled={true}>
                Tyroid
              </MenuItem>
              <MenuItem value={"Complete Urine Examination"}>
                Complete Urine Examination
              </MenuItem>
              <MenuItem value={"Blood pressure"}>Blood pressure</MenuItem>
              <MenuItem value={"Pregnancy Test"}>Pregnancy Test</MenuItem>
              <MenuItem value={"Full Body Checkup"}>Full Body Checkup</MenuItem>
            </Select>
            {bookingerror.PlanError && (
              <Typography
                align="left"
                padding={2}
                paddingLeft={0}
                color="error"
              >
                Please select the Plan
              </Typography>
            )}
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }} padding={3} paddingLeft={0} width="25%">
          <Typography align="left" padding={2} paddingLeft={0}>
            Mode of Payment<sup style={{ color: "red" }}>*</sup>
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="Payment">Payment</InputLabel>
            <Select
              labelId="Payment"
              id="Payment-select"
              value={bookinginfo.Payment}
              label="Age"
              onChange={(newValue) => {
                setBookinginfo({
                  ...bookinginfo,
                  Payment: newValue.target.value,
                });
              }}
            >
              <MenuItem value={"UPI"}>UPI</MenuItem>
              <MenuItem value={"Net Banking"}>Net Banking</MenuItem>
              <MenuItem value={"Cash"}>Cash</MenuItem>
            </Select>
            {bookingerror.PaymentError && (
              <Typography
                align="left"
                padding={2}
                paddingLeft={0}
                color="error"
              >
                Please select the Payment
              </Typography>
            )}
          </FormControl>
        </Box>
      </Box>
      <Stack spacing={2} direction="row" justifyContent={"center"}>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            validateBooking();
          }}
        >
          Conform Booking
        </Button>

        <Button variant="outlined" color="error">
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}

export default BookingSlots;
