import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Aboutme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name:RAMYA GAJULA</Typography>
<Typography>Father Name: SATHAIAH</Typography>
<Typography>Mother Name: MADHAVI</Typography>
<Typography>Email: ramyagajula42@gmail.com</Typography>
<Typography>Phone No.: 9381812381</Typography>
 </>
        
    )
    } 