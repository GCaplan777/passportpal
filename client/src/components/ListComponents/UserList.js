import React, { useReducer, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const UserList = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length * Math.random(),
            name: action.name,
          },
        ];
      // Bonus: Remove a todo from the list.
      case "remove":
        return state.filter((_, index) => {
          return index !== action.index;
        });
      default:
        return state;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  };

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <h1>Create Your Packing List</h1>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <div>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  id="standard-basic"
                  label="Enter an Item"
                  ref={inputRef}
                />
                <Button
                  onClick={() => {
                    alert("clicked");
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </Grid>
          <h2>To Pack </h2>
          <List>
            {items.map((item) => (
              <ListItemText key={item.id}>
                {item.name}
                <Button
                  variant="contained"
                  className="btn btn-danger ml-5"
                  onClick={() => dispatch({ type: "remove" })}
                >
                  X Remove
                </Button>
              </ListItemText>
            ))}
          </List>

          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </>
  );
};
export default UserList;
