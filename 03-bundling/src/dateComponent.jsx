import React from "react";
import { getFullDate } from "./dateService";
const classes = require('./dateComponentStyles.scss');

export const DateComponent = () => {
  const [today, setToday] = React.useState(0);

  React.useEffect(() => {
    setToday(getFullDate());
  }, []);

  return (
    <div>
      <span className={classes.resultBackground}>It's {today}! Have a good day!</span>
    </div>
  );
};
