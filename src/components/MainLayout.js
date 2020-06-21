import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Drawer, List, ListItem, ListItemIcon,ListItemText } from '@material-ui/core';
import SideMenu from './SideMenu';
import MainContainer from './MainContainer';

const useStyles = makeStyles((theme) => ({
 
    container: {
     marginTop: -21
    },
    item1:{
      width: '143px',
      height: '100vh',
      backgroundColor: 'red',
      float: 'left'
    },
    item2:{
      
      width: '100%',
      backgroundColor: 'green',
      
    }
    
   
  }));

const MainLayout = () => {

    const classes = useStyles();

    
      return (
        <div className={classes.container}>
          
          <div className={classes.item2}>
            <MainContainer />
          </div>
        </div>
          
           
          
        
        
      );



}


export default MainLayout;