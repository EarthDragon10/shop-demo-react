import React, { useContext } from "react";
import { Stack, Paper, Chip } from "@mui/material";
import SearchBar from "./SearchBar";
import { AppContext } from "../../App"

export default function Filters() {

  const [state, dispatch] = useContext(AppContext);

  return (
    <>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        <SearchBar />
      </Stack>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        {/* {filters?.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            color={selectedFilter === filter ? "secondary" : "primary"}
            onClick={() => selectFilter(filter)}
            variant={selectedFilter === filter ? "filled" : "outlined"}
          />
        ))} */}
      </Stack>
    </>
  );
}
