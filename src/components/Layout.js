import { makeStyles } from "@material-ui/core";
import React from "react";
import { Typography } from "@material-ui/core";
import {Drawer} from "@material-ui/core";
import { useLocation, useNavigate } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3),
      },
      root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      active: {
        background: '#270082'
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      avatar:{
        marginLeft:theme.spacing(2)
      },
      date: {
        flexGrow: 1
      },
      toolbar: theme.mixins.toolbar
    }
  })
const Layout = ({ children }) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

  const menuItems = [
    { 
      text: 'My Notes', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Create Note', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/create' 
    },
  ];

  return (
    <>
    <div className={classes.root}>
    {/* app bar */}

    <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.date}>
          Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Admin</Typography>
          <Avatar src="/logo192.png" className={classes.avatar}/>
        </Toolbar>
      </AppBar>

    {/* side drawer  */}
    <Drawer 
    className={classes.drawer}
    variant='permanent'
    anchor='left'
    classes={{paper:classes.drawerPaper}}
    >
        <div>
            <Typography variant="h4"
            style={{ margin: '10px' }}
            >
            Todo Lists</Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => navigate(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
    </Drawer>
      <div className={classes.page}>
      <div className={classes.toolbar}></div>

      {children}
      </div>
      </div>
    </>
  );
};

export default Layout;
