import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});

const postCard = [
    {
        textmain: "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.",
        image: "https://ripeme.com/wp-content/uploads/RF-10012-RIPE-ORGANIC-ORGANIC-BANANAS.jpg",
        text: "Banana",
        id: 1
    },
    {
        textmain: "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae, native to China.[1] It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.referred to as bitter orange.referred to as bitter",
        image: "https://soappotions.com/wp-content/uploads/2017/10/orange.jpg",
        text: "Orange",
        id: 2
    },
    {
        textmain: "Kiwifruit (often abbreviated as kiwi outside Australia and New Zealand), or Chinese gooseberry, is the edible berry of several species of woody vines in the genus Actinidia.[1][2] The most common cultivar group of kiwifruit The most common cultivar group of kiwifruit kiwikiwi",
        image: "https://www.wonderopolis.org/wp-content/uploads/2012/10/Kiwi_shutterstock_84220885-1.jpg",
        text: "Kiwi",
        id: 3
    },
    {
        textmain: "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. worldwide and are the most widely grown species in the genus Malus.worldwide and are the most widely  ",
        image: "https://cdn.tridge.com/image/original/55/1d/ba/551dba83e093686dff32049f43be86779f3888b8.jpg",
        text: "Apple",
        id: 4
    }
]

const Post = () => {
    const classes = useStyles()
    return (
        <div style={{ marginTop: 150, padding: 20 }}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} >
                {postCard.map(item =>
                    <Grid item key={item.id}>
                        <Card className={classes.card}>
                            <CardActionArea>

                                <CardMedia
                                    component="img"
                                    alt="fruits"
                                    height="150"
                                    image={item.image}
                                    title={item.text}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.text}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.textmain}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary" href="https://www.bc.fi">
                                    Learn More
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default Post
