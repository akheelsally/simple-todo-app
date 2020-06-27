import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [sort_filter, setSort] = React.useState(1);

  const handleChange = (event) => {
    setSort(event.target.value);
    props.onChange(sort_filter);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sort_filter}
          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value={1}>High to Low prices</MenuItem>
          <MenuItem value={2}>Low to High Prices</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
