import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MainNavigation from '../components/MainNavigation'
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    maindiv: {
        display: 'flex',
        direction: "row",
        justify: "space-between",
        alignItems: "center",
        width: 1200,
        margin: 'auto'

    },
    firstcontainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 500,
        marginTop: 50,
        backgroundColor: '#FFEBCD',
        float: 'right'
    },

    secondcontainer: {

        width: 400,
        marginTop: 50,
        float: 'left'
    },
    root: {
        width: 500,
        borderRadius: 5,
        padding: 25

    },

    formControl: {
        margin: 20,
    },

    checkbox: {
        display: 'flex',
        marginTop: 50,
    },


})



const Footer = () => {
    const classes = useStyles()
    return (

        <div className={classes.maindiv} >
            <form className={classes.firstcontainer}>
                <TextField className={classes.root} variant="outlined" margin="normal" label="Firstname" Required></TextField>
                <TextField className={classes.root} variant="outlined" margin="normal" label="Lastname"></TextField>
                <TextField className={classes.root} variant="outlined" margin="normal" label="Email" type="email"></TextField>
                <TextField className={classes.root} variant="outlined" margin="normal" label="Phone" type="phone"></TextField>

                <FormControl component="fieldset" className={classes.formControl} >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>


                    <TextField className={classes.root} margin="normal" label="Message" type="text"></TextField>
                    <FormControl className={classes.checkbox}>
                        <FormLabel component="label">Subscription</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="danger" />}
                                label="Subscribe for newsletter"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                control={<Checkbox color="danger" />}
                                label="Send me all stuff you have"
                                labelPlacement="end"
                            />
                        </FormGroup>

                        <Button variant="outlined" color="primary" className={classes.button}> Submit </Button>
                    </FormControl>
                </FormControl>

            </form>
            <div className={classes.secondcontainer} >
                <MainNavigation />
            </div>
        </div>
    )
}

export default Footer
