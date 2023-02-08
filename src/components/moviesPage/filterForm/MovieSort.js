import React from "react";
import FSelect from "../../forms/FSelect";

function MovieSort() {
  return (
    <FSelect name="sortBy" size="small" sx={{ width: "100%" }}>
      {[
        { value: "popularity.asc", label: "Popularity - Ascending" },
        { value: "popularity.desc", label: "Popularity - Descending" },
        { value: "releaseDateAsc", label: "Release date - Ascending" },
        { value: "releaseDateDesc", label: "Release date - Descending" },
        { value: "vote_average.asc", label: "Rating - Ascending" },
        { value: "vote_average.desc", label: "Rating - Descending" },
      ].map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </FSelect>
  );
}

export default MovieSort;
