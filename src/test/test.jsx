import { Button, IconButton, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { useState } from "react"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Tooltip from "@mui/material/Tooltip";
import AddCircleIcon from '@mui/icons-material/AddCircle';


const style={
  box:{
    display:"flex" ,
    justifyContent:'center',
    width:'100%',
    flexDirection:"row"
  },
  buttonOn:{
    color:'blue',
    fontWeight:'bold',
    borderBottom:'2px solid blue',
    borderRadius:'0'
  },
  buttonOf:{
    color:'black'
  }
}

function Test(){


  return(
    <>
      <Typography variant="h5" sx={{color:'blue',fontWeight:'bold',marginLeft:'50px'}}>Relations and Functions (Mathmetics)</Typography>
      <TestScreen/>
      <Box display={'flex'}
      flexBasis={'row'}
      width={'94%'}
      marginLeft={'3%'}
      justifyContent={'space-between'}
      marginTop={'30px'}
      >
        <Box>
          <Typography sx={{marginBottom:'-10px',marginLeft:"3px",color:'grey'}}>Powered By</Typography>
          <Typography variant="h4" fontWeight={'bold'}>Hyggex</Typography>
        </Box>
        <Box display={'flex'}
        alignItems={'center'}
        >
          <IconButton>
            <AddCircleIcon sx={{ bgcolor:'blue',borderRadius:'50%',color:'white'}}/>
          </IconButton>
          <Typography fontWeight={'bold'} color="blue">
            Create Flasecard          
          </Typography>
        </Box>
      </Box>
    </>
  )

}

const questions=[
  {
    question:'9+6+7x-2x-3',
    hint:"hint 9+6+7x-2x-3 for "
  },
  {
    question:'7+62+7x-2x-3',
    hint:"hint"
  },
  {
    question:'9+6+7x-2x-6',
    hint:"hint"
  },
  {
    question:'9+6+5x-2x-3',
    hint:"hint"
  },
  {
    question:'19+6+7x-2x-3',
    hint:"hint"
  }
]

function TestScreen(){


  const [current,setCurren] = useState('study')

  const items = ['study','quiz','Test','game','other']

  const [currentQues,setCurrentQues]= useState(1)

  return(
    <>
    <Box sx={style.box}>
        <Box display={'flex'}
        flexDirection={'row'}
        sx={{width:{xs:'100%',md:'600px'},marginTop:'20px'}}
        justifyContent={'space-evenly'}
        color={'black'}
        marginBottom={'5px'}
        >
          {
            items.map((i,index)=>{

               return <Button sx={i===current?style.buttonOn:style.buttonOf}
               key={index}
               onClick={()=>setCurren(i)}
               >{i}</Button>

            })
          }
          
        </Box>
      </Box>
      <Box
      sx={style.box}
      >
      <Box 
        display="flex" 
        flexDirection={'column'}
        width={500} height={280} 
        bgcolor="#0039a6"
        //justifyContent="center"
        borderRadius={5}
        color='white'
        fontWeight={'bold'}
      >
        <Box display={'flex'}
        width={'100%'}
        justifyContent={'space-between'}
        >
          <Tooltip title={questions[currentQues-1].hint}>
          <IconButton>
          <LightbulbIcon sx={{color:'white'}}/>
          </IconButton>
          </Tooltip>
  
          <IconButton>
          <VolumeUpIcon sx={{color:'white'}}/>
          </IconButton>
        </Box>
        <Box 
        justifyContent={'center'}
        display={'flex'}
        height={'100%'}
        alignItems={'center'}
        >
         
         <Typography variant="h6" fontWeight={'bold'}>{currentQues} : {questions[currentQues-1].question}</Typography>

        </Box>
      </Box>
      </Box>
      <Box style={style.box}>
        <Box 
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        sx={{width:{xs:'100%',md:'400px'}}}
        alignItems={'center'}
        >
           <IconButton 
           onClick={()=>setCurrentQues(1)}
           >
             <RestartAltIcon/>
           </IconButton>
           <Box sx={{display:'flex',alignItems:'center'}}>
              <IconButton 
               onClick={()=>{

                 if(currentQues!==1) setCurrentQues(currentQues-1)

               }}
              >
                 <ChevronLeftIcon sx={{color:"white",bgcolor:"blue",borderRadius:'50%'}}/>
              </IconButton>
              <Typography>{currentQues}/{questions.length}</Typography>
              <IconButton onClick={()=>{
 

                    if(currentQues!=questions.length) setCurrentQues(currentQues+1)

               }}>
                <NavigateNextIcon sx={{color:"white",bgcolor:"blue",borderRadius:'50%'}}/>
              </IconButton>
           </Box>
           <IconButton 
           >
             <FullscreenIcon/>
           </IconButton>
        </Box>
      </Box>
    </>
  )

}

export default Test