import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TenureSelect({data, setData}) {

  const handleChange = (event) =>{
    setData({
      ...data, 
      loanTerm: event.Target.value
    });
  };
  
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Tenure
        </InputLabel>
        <Select
          labelId='dem0-simple-select-label'
          id="demo-simple-select"
          value={data.loanTerm}
          label="Tenure"
          defaultValue={5}
          onchange={handleChange}
          >
            <MenuItem value={5}>5 years</MenuItem>
            <MenuItem value={5}>10 years</MenuItem>
            <MenuItem value={5}>15 years</MenuItem>
            <MenuItem value={5}>20 years</MenuItem>
            <MenuItem value={5}>25 years</MenuItem>
          </Select>
      </FormControl>
    </div>
  )
}

export default TenureSelect;
