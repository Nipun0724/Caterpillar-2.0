import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Header from "./Header";
import Tires from "./Tires";
import "./Questionnaire.css";
import Battery from "./Battery";
import Exterior from "./Exterior";
import Brakes from "./Brakes";
import Engine from "./Engine";
import Customer from "./Customer";

const steps = [
  "Details",
  "Tires",
  "Battery",
  "Exterior",
  "Brakes",
  "Engine",
  "Customer",
];

function Questionnaire() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && <Header setActiveStep={setActiveStep} />}
      {activeStep === 1 && <Tires setActiveStep={setActiveStep} />}
      {activeStep === 2 && <Battery setActiveStep={setActiveStep} />}
      {activeStep === 3 && <Exterior setActiveStep={setActiveStep} />}
      {activeStep === 4 && <Brakes setActiveStep={setActiveStep} />}
      {activeStep === 5 && <Engine setActiveStep={setActiveStep} />}
      {activeStep === 6 && <Customer setActiveStep={setActiveStep} />}

      {/* You can add more conditions for other steps if needed */}
    </Box>
  );
}

export default Questionnaire;
