
import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";


function Faq(){

  

  return(
    <div id="faq">
  
  <Typography sx={{color:'blue',marginLeft:"50px",fontWeight:'bold',marginTop:'40px'}} variant="h5">FAQ</Typography>
 <Box sx={{
  width:{xs:'98%',md:'600px',marginLeft:'50px'}
 }}>
  <Accordion sx={{border:'2px solid blue',marginTop:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Can education flashcards be used for all ages group?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

  <Accordion sx={{border:'2px solid blue',marginTop:'5px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How do education flashcards do works?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

  <Accordion sx={{border:'2px solid blue',marginTop:'5px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Can education flashcards be used for test preparation?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Box>
    </div>
  )

}

export default Faq