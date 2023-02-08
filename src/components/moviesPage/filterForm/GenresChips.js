import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import { Chip } from "@mui/material";
import { getGenres } from "../../../data/fetchGenres";

function GenresChips({ selectedChips, setSelectedChips }) {
  const [chipList, setChipList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setChipList(data);
      } catch (error) {
        console.log("Error at fetchGenres");
      }
    };
    fetchGenres();
  }, [selectedChips]);

  function handleSelectionChange(id) {
    const newSet = new Set(selectedChips);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedChips(newSet);
  }

  return (
    <Stack flexWrap={"wrap"} direction="row">
      {chipList.map((chip) => {
        return (
          <Chip
            key={chip.id}
            label={chip.name}
            onClick={() => handleSelectionChange(chip.id)}
            variant={selectedChips.has(chip.id) ? "filled" : "outlined"}
          ></Chip>
        );
      })}
    </Stack>
  );
}

export default GenresChips;
