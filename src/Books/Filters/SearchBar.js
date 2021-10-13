import React, { useContext } from "react";
import { Input, InputLabel, InputAdornment, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../../App"

export default function SearchBar() {

  const [, dispatch] = useContext(AppContext);
  return (
    <FormControl variant='standard' className='custom-input'>
      <InputLabel htmlFor='input-with-icon-adornment'>Search a book</InputLabel>
      <Input
        id='input-with-icon-adornment'
        name='name'
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
        onChange={(event) => dispatch({ type: "ONCHANGE", payload: event.target.value})}
      />
    </FormControl>
  );
}
