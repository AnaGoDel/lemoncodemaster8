import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as classes from './filter.styles';

interface Props {
  onFilter: (filter: string) => void;
  label: string;
}

export const FilterComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { onFilter, label } = props;

  return (
    <TextField
      className={classes.root}
      label={label}
      placeholder="Search"
      onChange={e => onFilter(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
