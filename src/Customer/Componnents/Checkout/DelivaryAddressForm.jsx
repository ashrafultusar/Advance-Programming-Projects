import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import { Box, Button, Grid, TextField } from "@mui/material";

const DelivaryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      phoneNumber: data.get("phoneNumber"),
    };

    console.log(address);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={4}>
        {/* Address Card Section */}
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: 2,
              height: "100%",
              overflow: "auto",
              padding: 2,
            }}
          >
            <AdressCard />
            <Button
              sx={{
                mt: 2,
                bgcolor: "RGB(145, 85, 253)",
                "&:hover": { bgcolor: "RGB(120, 60, 200)" },
              }}
              size="large"
              variant="contained"
              className="w-full rounded-md"
            >
              Deliver Here
            </Button>
          </Box>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: 2,
              padding: 3,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="street-address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      mt: 2,
                      bgcolor: "RGB(145, 85, 253)",
                      "&:hover": { bgcolor: "RGB(120, 60, 200)" },
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                    className="w-full rounded-md"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DelivaryAddressForm;
