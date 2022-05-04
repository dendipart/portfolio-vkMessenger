import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FieldValues, UseFormSetValue } from "react-hook-form";

import { countries, CountryType } from "./countries";
import { INPUT_NAMES } from "../../constants";

interface SelectCountryProps {
  handleChange: UseFormSetValue<FieldValues>;
}

const SelectCountry = (props: SelectCountryProps) => {
  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: CountryType | null
  ) => {
    if (value) {
      props.handleChange(INPUT_NAMES.COUNTRY_CODE, value.phone);
    }
  };

  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      onChange={handleChange}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
            label: "Country", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default SelectCountry;
