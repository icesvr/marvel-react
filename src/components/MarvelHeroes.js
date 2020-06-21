import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 10
    },
    media: {
      height: 300,
    },
  });


const MarvelHeroes = ({data}) => {
    const classes = useStyles();

    let history = useHistory();
    console.log("Props marvel: ",data)
    return(
    
    
        <Grid item xs={12} sm={6} md={4} onClick={()=> history.push(`/hero/${data.id}`)}>
            <Card className={classes.root}>
            <CardActionArea>
                    <CardMedia className={classes.media} image={data.thumbnail.path +'.'+data.thumbnail.extension} title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
    
    
    
    
    
    )
}

export default MarvelHeroes;