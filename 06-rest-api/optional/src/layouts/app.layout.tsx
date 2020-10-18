import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as classes from './app.layout.styles';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img className={classes.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtBVCLE4ZmIteeID6zS3WEzK-kuBbpYAUCgg&usqp=CAU" alt="" />
          <Typography variant="subtitle1">Rick And Morty API</Typography>
          <div className={classes.menu}>
            <Link to="/characters" className={classes.links}>Characters</Link>
            <Link to="/episodes" className={classes.links}>Episodes</Link>
            <Link to="/locations" className={classes.links}>Locations</Link>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
