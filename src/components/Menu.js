import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function Menu({departments}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
        <List>
            {departments.map((department, index) => (
            <ListItem button key={department.title.en}>
                <ListItemText primary={department.title.en} />
            </ListItem>
            ))}
        </List>
        </div>
    );

    return (
        <div>
        <Button onClick={toggleDrawer('left', true)}>Actions</Button>
        <Button onClick={toggleDrawer('right', true)}>Departments</Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
        </Drawer>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {sideList('right')}
        </Drawer>
        </div>
    );
}