import React from 'react'
import './App.css';
import AppBar  from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';
import MainNavigation from './components/MainNavigation';
import Toolbar from '@material-ui/core/Toolbar';
import Post from './components/Post';
import Footer from './components/Footer';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

 const useStyles = makeStyles({
    root: {
    flexGrow: 1,
     padding: 30,
     background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%);"
    },
    list:{
      background:"green"
    },
    title:{
      flexGrow: 1
    }
  });
  
  const App = () => {
   const classes = useStyles();
    
    return ( 
      <div>
        <AppBar className={classes.root}>
          <Toolbar>
          <Typography varient="h5" className={classes.title}> Material UI</Typography>
        <MainNavigation />
          </Toolbar>
       </AppBar>
        <Button variant="contained" color="primary">MaterialButton</Button>   

        <Post />
        <Footer />
      </div>
     
    )
  }


export default App