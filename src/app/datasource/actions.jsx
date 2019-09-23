import {INJECTDATA} from '../../actions/Actions';

export const fetchData =()=> dispatch =>{
    
    console.log("set loading false Done");

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
        console.log("got data");
    
    
    dispatch({
        type:INJECTDATA,
        payload:json
    })
} 
    )

  

    //dispatch({});   
}