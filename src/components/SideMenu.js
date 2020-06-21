import React from 'react';
import { Paper, Drawer, List, ListItem, ListItemIcon,ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: 100,
      backgroundColor: 'green'
    },
    drawerPaper : {
       display: 'block'
    },
    logo: {
        width: '150px'
    }
   
  }));

const SideMenu = () => {    
    const classes = useStyles();

    return(
        <div style={{display: 'flex'}}>
              <Drawer variant="temporary"
                anchor="left"
                open={true}
                className={classes.drawerPaper}
                
              >
                  
                  <List>
                     
                      <ListItem button>
                          <ListItemIcon>
                              <HomeIcon />
                          </ListItemIcon>
                          <ListItemText>
                              Home
                          </ListItemText>
                      </ListItem>
                      <ListItem button>
                          <ListItemIcon>
                              <HomeIcon />
                          </ListItemIcon>
                          <ListItemText>
                              Menu 2
                          </ListItemText>
                      </ListItem>
                      <ListItem button>
                          <ListItemIcon>
                              <HomeIcon />
                          </ListItemIcon>
                          <ListItemText>
                              Menu 3
                          </ListItemText>
                      </ListItem>
                  </List>

              </Drawer>
          </div>
    )

}


export default SideMenu;