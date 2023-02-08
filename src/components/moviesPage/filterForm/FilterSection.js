import React, { useState } from "react";
import SortAccordion from "./SortAccordion";
import { FilterSectionContainer } from "./FilterSectionContainer";
import { useForm } from "react-hook-form";
import FormProvider from "../../forms/FormProvider";
import { Button, Divider } from "@mui/material";
import GenresAccordion from "./GenresAccordion";
import UserScoreAccordion from "./UserScoreAccordion";
import DatePickerAccordion from "./DatePickerAccordion";
import KeywordsAccordion from "./KeywordsAccordion";

const defaultValues = {
  sortBy: "popularity.asc",
  genres: [],
  votingAverage: [0, 10],
  primary_release_date: { gte: "", lte: "" },
};

function FilterSection({ setFormData }) {
  const methods = useForm({ defaultValues });
  const [selectedChips, setSelectedChips] = useState(new Set());
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    // The genres for the API must be in the form of ("Id1,Id2,..." not [Id1,Id2,...] or a Set => Required a spread)
    data.genres = [...selectedChips].join(",");
    setFormData(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FilterSectionContainer>
        <SortAccordion />
        <GenresAccordion
          selectedChips={selectedChips}
          setSelectedChips={setSelectedChips}
        />
        <UserScoreAccordion />
        <DatePickerAccordion />
        <KeywordsAccordion />
        <Divider />
        <Button variant="container" type="submit">
          Submit
        </Button>
      </FilterSectionContainer>
    </FormProvider>
  );
}

export default FilterSection;
