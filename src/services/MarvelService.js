import { Avatar } from "@material-ui/core";

const URL = 'https://gateway.marvel.com:443/v1/public';
const APIKEY = ''
const HASH = ''
//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=32cdd5d297450711fc1f823a22624a4b&hash=352e5128ca5626d0f026e43c8519c1e8
export const getCharacters = async () => {
    
    const response = await fetch(URL+`/characters?ts=1&apikey=${ APIKEY }&hash=${HASH}`);
    const json = await response.json();
    


    return json.data.results;

    
}