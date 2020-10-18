import React from 'react';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import * as classes from './no-result.styles';

export const NoResultComponent: React.FunctionComponent = () => {
  return (
    <div className={classes.root}>
      <p>No results were found... Why don't you try another filter?</p>
      <SentimentVerySatisfiedIcon color="primary" />
    </div>
  );
};
