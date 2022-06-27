import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Example(props)
{
    var items = [
        {
            name: "https://modesens.com/banner/12474/getimg/?img=%2Fbanner%2F20220621-modesens-SSENSE-1140x400-EN.jpg",
            
        },
        {
            name: "https://modesens.com/banner/12539/getimg/?img=%2Fbanner%2F20220617-modesens-Farfetch-1140x400-EN.jpg",
           
        },
        {
            name: "https://modesens.com/banner/11843/getimg/?img=%2Fbanner%2F20220621-modesens-Sale-1140x400-EN.jpg",
           
        },
        {
            name: "https://modesens.com/banner/12648/getimg/?img=%2Fbanner%2F20220626-modesens-MODES-1140x400-EN.jpg",
           
        },
        {
            name: "https://modesens.com/banner/12543/getimg/?img=%2Fbanner%2F20220617-modesens-NAP-1140x400.jpg",
            
        },
        {
            name: "https://modesens.com/banner/12643/getimg/?img=%2Fbanner%2F20220626-modesens-DorotheeSchumacher-1140x400-EN.jpg",
            
        },
        {
            name: "https://modesens.com/banner/12626/getimg/?img=%2Fbanner%2F20220624-modesens-AGJeans-1140x400-EN.jpg",
            
        },
        {
            name: "https://modesens.com/banner/12560/getimg/?img=%2Fbanner%2F20220621-modesens-BagsonSale-1140x400-F.jpg",
            
        },

    ]

    return (
      <div className="n">
          <Carousel  height={400} width={100} indicators={false} animation={"slide"} duration={700} swipe={false} cycleNavigation={true} NavButton={({onClick, className, style, next, prev}) => {
            // Other logic
    
            return (
                <Button onClick={onClick} className={className} style={{ marginLeft:"0vh",marginTop:"21.8vh", fontSize:"2.5vw",color:"#fff",marginRight:"3vh"}}>
                    {next && "→"}
                    {prev && "←"}
                </Button>
            )
        }}>
            {
                items.map( (item, i) => <Item   key={i} item={item} /> )
            }
        </Carousel>
      </div>
    )
}

function Item(props)
{
    return (
        <Paper  >
           
           <img style={{position:"relative",top:"0vh"}} src={props.item.name} alt="" />
      

            
        </Paper>
    )
}
export default Example