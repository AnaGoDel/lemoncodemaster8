import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { switchRoutes } from 'router/routes';
import { MyContext } from 'pods/context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const AppBarComponent: React.FC = () => {
    const classes = useStyles();
    const myContext = React.useContext(MyContext);
    const [anchorEl, open] = React.useState(null);
    const handleClick = event => {
        open(event.currentTarget);
    };

    const handleClose = () => {
        open(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="Menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem
                            component={Link}
                            to={switchRoutes.cats}
                        >Cats</MenuItem>
                        <MenuItem
                            component={Link}
                            to={switchRoutes.dogs}
                        >Dogs</MenuItem>

                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        Pictures List
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={() => myContext.setCartVisible(!myContext.cartVisible)}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
