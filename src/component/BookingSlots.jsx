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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { Stack } from "@mui/system";

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
  let adminData = JSON.parse(localStorage.getItem("adminData"));
  const token = JSON.parse(localStorage.getItem("user_login"));

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
    if (error === false) {
      let finalbooking;
      adminData.map((element, index) => {
        if (bookinginfo.Plan === element.test) {
          finalbooking = {
            ...bookinginfo,
            Doctor: adminData[index].drName,
            price: adminData[index].actMrp,
          };
        }
      });
      let temp;
      let lc = localStorage.getItem(`${token[0].name}.bookings`);
      if (lc == null) {
        temp = [];
      } else {
        temp = JSON.parse(lc);
      }
      temp.push(finalbooking);
      localStorage.setItem(`${token[0].name}.bookings`, JSON.stringify(temp));
    }
    adminData.map((element, index) => {
      if (bookinginfo.Plan === element.test) {
        adminData[index].slots = --element.slots;
      }
      localStorage.setItem("adminData", JSON.stringify(adminData));
    });
    setBookinginfo({
      Date: null,
      Gender: "",
      Plan: "",
      Payment: "",
    });
  };
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg')",
        backgroundRepeat: "no-repeat",
        margin: "-30px",
        backgroundSize: "cover",
        position: "relative",
        isolation: "isolate",
        padding: "30px",
        "&::after": {
          content: "''",
          position: "absolute",
          zIndex: -1,
          background: "rgb(243,231,231)",
          inset: 0,
          opacity: 0.6,
        },
      }}
    >
      <Box width={"75%"} marginLeft={"12.5%"} marginTop={"2.5%"}>
        <Typography
          variant="h2"
          textAlign={"center"}
          fontFamily={"serif"}
          fontStyle={"oblique"}
          sx={{ textDecorationLine: "underline" }}
          fontWeight={"bold"}
        >
          Slot Booking Form
        </Typography>
        <Box>
          <Typography
            align="left"
            sx={{
              my: 2,
              borderBottom: "gray solid",
              fontSize: "20px",
            }}
            fontWeight={"bold"}
          >
            Name:
            <span
              style={{
                fontFamily: "serif",
                fontStyle: "oblique",
                fontSize: "30px",
                paddingLeft: "5px",
              }}
            >
              {token[0].name}
            </span>
          </Typography>
          <Box padding={3} sx={{ display: "flex", gap: 8 }} paddingLeft={0}>
            <Typography
              align="left"
              padding={2}
              paddingLeft={0}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  my: 2,

                  fontSize: "20px",
                },
              }}
              fontWeight={"bold"}
            >
              Date of Booking<sup style={{ color: "red" }}>*</sup>
            </Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={bookinginfo.Date}
                onChange={(newValue) => {
                  setBookinginfo({
                    ...bookinginfo,
                    Date: `${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`,
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {bookingerror.DateError && (
              <Typography
                align="left"
                padding={2}
                paddingLeft={0}
                color="error"
              >
                Please select the Date
              </Typography>
            )}
          </Box>
          <Typography
            align="left"
            sx={{ my: 1, fontSize: "20px" }}
            fontWeight={"bold"}
          >
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
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <Box sx={{ minWidth: 120 }} padding={3} paddingLeft={0}>
            <Typography
              align="left"
              padding={2}
              paddingLeft={0}
              sx={{ mt: 1, fontSize: "20px" }}
              fontWeight={"bold"}
            >
              Plan<sup style={{ color: "red" }}>*</sup>
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="Plan">Plan</InputLabel>{" "}
              <Select
                sx={{
                  border: "solid 1px black",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    zIndex: -1,
                    background: "rgb(243,231,231)",
                    inset: 0,
                    opacity: 0.7,
                  },
                }}
                labelId="Plan"
                id="Plan-select"
                value={bookinginfo.Plan}
                label="Age"
                onChange={(newValue) => {
                  setBookinginfo({
                    ...bookinginfo,
                    Plan: newValue.target.value,
                  });
                }}
              >
                <MenuItem
                  value={`${adminData[0].test}`}
                  disabled={adminData[0].slots <= 0 ? true : false}
                >
                  <img
                    style={{ marginRight: "30px" }}
                    src={`${adminData[0].img}`}
                    alt={`${adminData[0].test}`}
                    width={"50px"}
                  ></img>
                  {adminData[0].test}
                </MenuItem>
                <MenuItem
                  value={`${adminData[1].test}`}
                  disabled={adminData[1].slots <= 0 ? true : false}
                >
                  <img
                    style={{ marginRight: "30px" }}
                    src={`${adminData[1].img}`}
                    alt={`${adminData[1].test}`}
                    width={"50px"}
                  ></img>
                  {adminData[1].test}
                </MenuItem>
                <MenuItem
                  value={`${adminData[2].test}`}
                  disabled={adminData[2].slots <= 0 ? true : false}
                >
                  <img
                    style={{ marginRight: "30px" }}
                    src={`${adminData[2].img}`}
                    alt={`${adminData[2].test}`}
                    width={"50px"}
                  ></img>
                  {adminData[2].test}
                </MenuItem>
                <MenuItem
                  value={`${adminData[3].test}`}
                  disabled={adminData[3].slots <= 0 ? true : false}
                >
                  <img
                    style={{ marginRight: "30px" }}
                    src={`${adminData[3].img}`}
                    alt={`${adminData[3].test}`}
                    width={"50px"}
                  ></img>
                  {adminData[3].test}
                </MenuItem>
                <MenuItem
                  value={`${adminData[4].test}`}
                  disabled={adminData[4].slots <= 0 ? true : false}
                >
                  <img
                    style={{ marginRight: "30px" }}
                    src={`${adminData[4].img}`}
                    alt={`${adminData[4].test}`}
                    width={"50px"}
                  ></img>
                  {adminData[4].test}
                </MenuItem>
                <MenuItem
                  value={`${adminData[5].test}`}
                  disabled={adminData[5].slots <= 0 ? true : false}
                >
                  <img
                    style={{ marginRight: "30px" }}
                    src={`${adminData[5].img}`}
                    alt={`${adminData[5].test}`}
                    width={"50px"}
                  ></img>
                  {adminData[5].test}
                </MenuItem>
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
          <Box
            sx={{ minWidth: 120 }}
            padding={3}
            paddingLeft={0}
            width="45%"
            display={"flex"}
          >
            <Typography
              align="left"
              sx={{ my: 2, fontSize: "20px" }}
              fontWeight={"bold"}
            >
              Mode of Payment<sup style={{ color: "red" }}>*</sup>
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="Payment">Payment</InputLabel>
              <Select
                sx={{
                  border: "solid 1px black",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    zIndex: -1,
                    background: "rgb(243,231,231)",
                    inset: 0,
                    opacity: 0.7,
                  },
                }}
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
            variant="contained"
            color="success"
            onClick={() => {
              validateBooking();
            }}
          >
            Conform Booking
          </Button>

          <Button variant="contained" color="error">
            Cancel
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default BookingSlots;
