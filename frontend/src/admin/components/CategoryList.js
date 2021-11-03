import React,{useEffect,useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch,useSelector } from 'react-redux';
import {catagorySetting} from '../../statemanager/actions/catagorySetting';



export default function CategoryList() {
  const [expanded, setExpanded] = useState(false);
  const [open,setOpen] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const subhandleChange = (panel) => (event, isOpen) => {
    setOpen(isOpen ? panel : false);
  };

  const dispatch = useDispatch();
  const catagories = useSelector((state)=>state.catagorySetting.items);

  useEffect(()=>{
      dispatch(catagorySetting());
  },[]);
  return (
    <div>
      <Typography variant="h6" align="center" style={{background:"#bbdefb",borderBottom:"1px solid white"}}>All Categories</Typography>
      { catagories.map((mainCat)=>(
        <Accordion 
        expanded={expanded === mainCat._id} 
        onChange={mainCat.Subcatagory.length !==0 && handleChange(mainCat._id)} 
        style={{margin: "1px 0"}}
        >
          <AccordionSummary
            expandIcon={mainCat.Subcatagory.length !==0 && <ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{background:"#bbdefb"}}
          >
            <Typography 
            sx={{ width: '33%', flexShrink: 0 }}
            
            >
            {mainCat.CatagoryName}
            </Typography>
            
          </AccordionSummary>
          {
          mainCat.Subcatagory.map((subcat)=>(
          <AccordionDetails style={{padding:"1px 1px 1px"}}> 
                <div>
                  <Accordion
                   open={open === subcat._id} 
                   onChange={subhandleChange(subcat._id)} 
                   style={{margin: "1px 0"}}
                   >
                    <AccordionSummary
                      expandIcon={subcat.Subcatagory_two.length!==0 &&<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      style={{background:"#b2ebf2"}}
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      {subcat.SubcatagoryName}
                      </Typography>
                      
                    </AccordionSummary>
                      {
                      subcat.Subcatagory_two.map((subcattwo)=>(
                      <AccordionDetails style={{background:"#40c4ff",borderBottom: "1px solid white"}}>
                        <Typography>{subcattwo.Subcatagory_twoName}</Typography>
                      </AccordionDetails>
                      ))}
                </Accordion>
              </div>
          </AccordionDetails> 
          ))}
        </Accordion>
       ))}
    </div>
  );
}