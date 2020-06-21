import React from 'react';
import Grid from '@material-ui/core/Grid';
import MarvelHeroes from './MarvelHeroes';
import { makeStyles } from '@material-ui/core/styles';
import {getCharacters} from './../services/MarvelService';


const useStyles = makeStyles((theme) => ({
 
    centrar : {
        margin: 'auto'
    }
    
   
  }));


const MainContainer = () => {
    const classes = useStyles();
    const [heroes, setHeroes] = React.useState([]);

    React.useEffect(()=>{
        const fetchData = async () => {
            const heroes = await getCharacters();
        setHeroes(heroes);
        
        }

        fetchData();
       
    },[])

    
    
    const Heroes = () => {
        return heroes.map( hero => 
            <MarvelHeroes data={hero} />
         )
    }
    
    return (
        
           
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                
                <Heroes />
                
            </Grid> 
            
            
        
    )
}

export default MainContainer;