import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DelivaryAddressForm from "./DelivaryAddressForm";
import OrderSummery from "./OrderSummery";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const querySearch = new URLSearchParams(location.search);
    const step = Number(querySearch.get("step")); // Convert to number
    if (!isNaN(step) && step >= 0 && step < steps.length) {
      setActiveStep(step); // Update activeStep based on URL step
    }
  }, [location.search]); 

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    navigate(`?step=${nextStep}`); 
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    navigate(`?step=${prevStep}`); 
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>

      <div>
        {activeStep === 1 ? (
          <DelivaryAddressForm />
        ) : (
          <OrderSummery />
        )}
      </div>
    </div>
  );
}
