import React , { useEffect }  from 'react';
import Loader from 'react-loader-spinner'



const Datasource =(props)=>{

    useEffect(() => {

    //simulate delay   
    console.log("%c Simulating delay","color:red"); 
   
    setTimeout(()=>{
        if(props.loading)
          props.fetchData()

    },4000) 
      
        
      });

const RenderData = props.userData.map(user =>{
     return  <div key={user.id}>
             
             <span>ID </span> {user.id} <br/>
               <hr/> <br/>
             <span>Email :</span> {user.email} <br/>
              <div className="message-body">
              {user.body}
              </div>
              
              </div>
});

    
   return(
       <div>
              {
                props.loading ? <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={10000000} //3 secs
                className="loader"

                /> :<div className="container">
                  
                {RenderData}
                </div>
                
                }



       </div>

    

   )
   
}

export default Datasource;