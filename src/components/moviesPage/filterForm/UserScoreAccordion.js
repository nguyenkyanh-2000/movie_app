import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import FSlider from "../../forms/FSlider";

function UserScoreAccordion() {
  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        User Score
      </AccordionSummary>
      <AccordionDetails>
        <FSlider name="votingAverage"></FSlider>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserScoreAccordion;
