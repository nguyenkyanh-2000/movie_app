import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import GenresChips from "./GenresChips";

function GenresAccordion({ selectedChips, setSelectedChips }) {
  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Genres
      </AccordionSummary>
      <AccordionDetails>
        <GenresChips
          selectedChips={selectedChips}
          setSelectedChips={setSelectedChips}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default GenresAccordion;
