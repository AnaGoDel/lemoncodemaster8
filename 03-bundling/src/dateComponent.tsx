import React from "react";
import { getFullDate } from "./dateService";
const classes = require('./dateComponentStyles.scss');

export const DateComponent: React.FC = () => {
  const [today, setToday] = React.useState<string>("");

  React.useEffect(() => {
    const myDate: Date = new Date();
    setToday(getFullDate(myDate));
  }, []);

  return (
    <div className={classes.dateText}>
      <span className={classes.resultBackground}>It's {today}! A good day to learn Webpack!</span>
    </div>
  );
};
