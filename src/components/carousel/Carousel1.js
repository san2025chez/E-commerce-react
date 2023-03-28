/* import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import mock from '../../resource/mock.json'



function Carousel1()
{
    
    return (
        <Carousel>
            {
                mock.map( (item, i) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Carousel1; */

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Carousel } from 'react-material-ui-carousel';
import {Divider, Grid} from '@material-ui/core'
import mock from '../../resource/mock.json'
import Home from '../../Home/Home';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function Carousel1() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"

  
  style={{ backgroundColor:'white', marginTop:'40px'}}
>
    <Box style={{alignItems:"center",
  justifyContent:"center"/* border: '2px solid  #dc004e' */, width:"80%" , height:'20%'}} sx={{ width: 400,maxHeight: 400, flexGrow: 1 }}
    md={{ width: 900 ,height: 900, flexGrow: 1 }} >
   {/*    <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      
      <AutoPlaySwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {mock.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
         
              <Box
                component="img"
                lg={{ width: '100%',height: '100%', flexGrow: 1 }}
                md={{ width: '100%',height: '100%', flexGrow: 1 }}
                sx={{
                 
                  display: 'block',
                 
         
                  overflow: 'hidden',
                  width: '100%',
                  height: '100%'
                }}
                src={step.imagen}
                alt={step.id}
                maxHeight='100%'
                justifyContent='center'
                alignItems= 'center'
              />
             ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

     
    </Box>
<Grid style={{marginBottom:'20px'}}><Divider/>
</Grid>
    <Home></Home>
    </Grid>
    </>
  );
}

export default Carousel1;