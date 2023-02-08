import React, { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import FAutoComplete from "../../forms/FAutoComplete";
import { searchKeywords } from "../../../data/fetchKeywords";

function KeywordsAccordion() {
  const [keywordsList, setKeywordsList] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState();

  useEffect(() => {
    const getKeyWords = async (keyword) => {
      const data = await searchKeywords(keyword);
      setKeywordsList(data.results);
    };
    getKeyWords(currentKeyword);
  }, [currentKeyword]);

  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Find By Keywords
      </AccordionSummary>
      <AccordionDetails>
        <FAutoComplete
          name="keywords"
          label="Keywords"
          options={keywordsList || []}
          setCurrentKeyword={setCurrentKeyword}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default KeywordsAccordion;
