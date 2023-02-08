import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import FDatePicker from "../../forms/FDatePicker";

function DatePickerAccordion() {
  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Release Date
      </AccordionSummary>
      <AccordionDetails>
        <FDatePicker name={"primary_release_date.gte"} label={"From"} />
        <FDatePicker name={"primary_release_date.lte"} label={"To"} />
      </AccordionDetails>
    </Accordion>
  );
}

export default DatePickerAccordion;
