import React from "react";
import TextField from "@material-ui/core/Button";

const PackingList = () => {
  return (
    <div>
      <form className noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
};

export default PackingList;
