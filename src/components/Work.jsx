// import React from 'react'
// import './work.css'
// import image from '../assets/image.png'
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

// const Work = () => {
//   return (
//     <>
//         <h2 >Our Work</h2>
//     <div className='work'>
//     <AwesomeSlider style={{
//       display: 'flex',
//     width: '90%',
//     marginLeft: '65px',
//     border: '8px solid #dc1e5e',
//     height: '60%',
//     color: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '20px',
//     objectFit: 'cover'
//     }}>
//     <img src={image} alt='image' />
//     </AwesomeSlider>
//     </div>
//     </>
//   )
// }

// export default Work

import React from "react";
import { Box, Typography } from "@mui/material";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import image from "../assets/image.png"; // Import your image

const Work = () => {
  return (
    <>
      <h1 className="p-0 text-start text-3xl md:text-6xl font-bold w-full ps-20">
        Our Work
      </h1>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <AwesomeSlider
          style={{
            width: "90%",
            border: "8px solid #dc1e5e",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        >
          <Box
            component="img"
            src={image}
            alt="Our Work Image"
            sx={{ width: "100%", borderRadius: "12px" }}
          />
        </AwesomeSlider>
      </Box>
    </>
  );
};

export default Work;
