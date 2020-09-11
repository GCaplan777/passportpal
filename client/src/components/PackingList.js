import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// I need a form with inputs for user to make a list
// I need it to display
// User needs to be able to checkoff completed items,
// completed items will live in a different column or list

// starting elements

// user interactions

// display user

const PackingList = () => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button
          onClick={() => {
            alert("clicked");
          }}
        >
          Add an Item
        </Button>
      </form>
    </div>
  );
};

export default PackingList;
