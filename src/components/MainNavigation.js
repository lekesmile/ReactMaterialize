import React from 'react'
import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { textAlign } from '@material-ui/system';

  const useStyles = makeStyles({
        listItem: {
            display: 'inline-block',
            width:150,
            textAlign:"right"
            
        }
    });


    const listItem = [
        {
            text: "Home",
            id: 1
        },
        {
            text: "About",
            id: 2
        },
        {
            text: "Product",
            id: 3
        },
        {
            text: "Contact",
            id: 4
        }
    ]
const MainNavigation = () => {
  const classes = useStyles();
    return (
        <div>
            <List component="nav">
                {listItem.map(item =>(
                <ListItem className={classes.listItem} key={item.id}>
                    <ListItemText>
                        <Typography>
                           {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
                ))}
            </List>

{/* 
            <List>
                <ListItem>
                    <ListItemText className={classes.listItem}>
                        <Typography>
                            About
                        </Typography>
                    </ListItemText>
                </ListItem>

            </List>



            <List>
                <ListItem>
                    <ListItemText className={classes.listItem}>
                        <Typography>
                            Products
                        </Typography>
                    </ListItemText>
                </ListItem>

            </List> */}

        </div>
    )
}

export default MainNavigation
