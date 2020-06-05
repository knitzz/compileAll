import React from 'react';
import Button  from '@material-ui/core/Button';
import compileRequest from '../services/compileCall';
function BasicCompilation(props)  {
    const handleSubmit=()=>{
        if(props.isFile)
         compileRequest(true,props.file,"",props.language).then((resp)=>{
                console.log(resp);
                props.onOutputChange(resp.data);
            });
        else  
            compileRequest(false,"",props.code,props.language).then((resp)=>{
                console.log(resp);
                props.onOutputChange(resp.data);
            });
    }
      return (
          <div>
          <Button variant="contained" onClick={ handleSubmit } color="default" >
        Submit
      </Button>
          </div>
      );
    
}
 export default BasicCompilation;