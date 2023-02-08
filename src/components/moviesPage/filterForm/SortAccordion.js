import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import MovieSort from "./MovieSort";

function SortAccordion() {
  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Sort By
      </AccordionSummary>
      <AccordionDetails>
        <MovieSort />
      </AccordionDetails>
    </Accordion>
  );
}

export default SortAccordion;
