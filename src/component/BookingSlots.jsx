import {
  Box,
  Typography,
  Radio,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Select,
} from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";

function BookingSlots() {
  const [bookinginfo, setBookinginfo] = React.useState({
    Date: "",
    Gender: "",
    Plan: "",
    Payment: "",
  });
  console.log(bookinginfo);
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
    if (bookinginfo.Date == "") {
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
      Date: new Date().toISOString().slice(0, 10),
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
      <Box width={"75%"} marginLeft={"12.5%"} marginTop={"40px"}>
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
              {token[0].name} {token[0].lname}
            </span>
          </Typography>
          <Box padding={3} sx={{ display: "flex", gap: 8 }} paddingLeft={0}>
            <Typography
              align="left"
              padding={2}
              pb={1}
              paddingLeft={0}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },

                fontSize: "20px",
              }}
              fontWeight={"bold"}
            >
              Date of Booking<sup style={{ color: "red" }}>*</sup>
            </Typography>
            <TextField
              defaultValue={new Date().toISOString().slice(0, 10)}
              inputProps={{
                min: new Date().toISOString().slice(0, 10),
              }}
              type={"date"}
              onChange={(e) => {
                setBookinginfo({ ...bookinginfo, Date: e.target.value });
              }}
            ></TextField>

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
            sx={{ mt: 1, fontSize: "20px" }}
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
            sx={{ width: "1%" }}
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={bookinginfo.Gender}
            onChange={(newValue) => {
              setBookinginfo({ ...bookinginfo, Gender: newValue.target.value });
            }}
          >
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
          <Box sx={{ minWidth: 120 }} pb={3} paddingLeft={0}>
            <Typography
              align="left"
              p={1}
              paddingLeft={0}
              sx={{ fontSize: "20px" }}
              fontWeight={"bold"}
            >
              Plan<sup style={{ color: "red" }}>*</sup>
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="Plan">Plan</InputLabel>
              <Select
                sx={{
                  color: "black",
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
                label="Plan"
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
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
                my: 2,
                fontSize: "20px",
              }}
              fontWeight={"bold"}
            >
              Mode of Payment<sup style={{ color: "red" }}>*</sup>
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="Payment">Payment</InputLabel>
              <Select
                sx={{
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
                <MenuItem value={"UPI"}>
                  <img
                    style={{ marginRight: "30px" }}
                    src=".\img\upi-icon.svg"
                    alt="UPI"
                    width={"50px"}
                  ></img>
                  UPI
                </MenuItem>
                <MenuItem value={"Net Banking"}>
                  {" "}
                  <img
                    style={{ marginRight: "30px" }}
                    src=".\img\net-banking-icon.svg"
                    alt="net banking"
                    width={"50px"}
                  ></img>
                  Net Banking
                </MenuItem>
                <MenuItem value={"Cash"}>
                  {" "}
                  <img
                    style={{ marginRight: "30px" }}
                    src=".\img\payroll-salary-icon.svg"
                    alt="cash"
                    width={"50px"}
                  ></img>
                  Cash
                </MenuItem>
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

        <Stack spacing={4} direction="row" justifyContent={"center"}>
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
