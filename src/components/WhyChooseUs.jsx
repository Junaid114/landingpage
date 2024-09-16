// import React from "react";
// import styles from "./WhyChooseUs.module.css";
// import Line from "./verticalline/Line";
// import chatgpt from '../assets/chatgpt.png'

// const WhyChooseUs = () => {
//   const brands = [
//     {
//       name: "Tiktok",
//       logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0216aade21288f93597e2d3db93b3b30501786deb78d647baf157b4c95e5329c?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
//     },
//     {
//       name: "Github",
//       logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/29c678d316e351201e876324466b815dfb9ae9166098348ca6d4848bb5fda915?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
//     },
//     {
//       name: "Hulu",
//       logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe649f696ccbdede0103fbf80db3a8dde8eb5b9b0f055f4e5febe47031ce4b91?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
//     },
//     {
//       name: "Nike",
//       logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c2ea2db56f0982a369bf436d2f9daea78cb937ef5a80220db61248277961c82?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
//     },
//     {
//       name: "Deliveroo",
//       logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/809efac4d184eab6b5c66205708b1228692f05a1bfdbdf7f4beca6d2f8278405?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
//     },
//     {
//       name: "Twitch",
//       logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f8da04717022de32c99069408e9d34cb8e36359957e3f2d6b14e30557859c1?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
//     },
//     {
//       name: "Ticketmaster",
//       logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3936f800aa7e41ccd50ace3d1446188f2c534da6724b6b4c7af276caf3de048?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
//     },
//     { name: "Binance", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png", },
//     { name: "Spotify",  logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
//     { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", },
//   ];

//   return (
//     <section className={styles.whyChooseUs}  style={{ backgroundColor: 'rgba(21, 7, 12, 1)'}}>

//       <div className={styles.sectionHeader}>

//         <h2 className={styles.sectionTitle}>Why Choose Us?</h2>

//         <h3 className={styles.sectionSubtitle}>
//           Why We Use Next.js and How It Benefits You
//         </h3>
//         <p className={styles.sectionDescription}>
//           For us, it's all about quality and customization. We build websites
//           with Next.js, a leading framework trusted by major brands such as:
//         </p>
//       </div>
//       <div className={styles.brandGrid}>
//         {brands.map((brand, index) => (
//           <div key={index} className={styles.brandItem}>
//             {brand.logo && (
//               <img
//                 loading="lazy"
//                 src={brand.logo}
//                 alt={`${brand.name} logo`}
//                 className={styles.brandLogo}
//               />
//             )}
//             <div className={styles.brandName}>{brand.name}</div>
//           </div>
//         ))}
//       </div>
//       <p className={styles.callToAction}>
//         Elevate your online presence with the same technology powering the
//         world's biggest brands.
//       </p>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import { Box, Typography, Grid, ImageList, ImageListItem } from "@mui/material";
import Line from "./verticalline/Line";

const WhyChooseUs = () => {
  const brands = [
    {
      name: "Tiktok",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0216aade21288f93597e2d3db93b3b30501786deb78d647baf157b4c95e5329c?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
    },
    {
      name: "Github",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/29c678d316e351201e876324466b815dfb9ae9166098348ca6d4848bb5fda915?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
    },
    {
      name: "Hulu",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe649f696ccbdede0103fbf80db3a8dde8eb5b9b0f055f4e5febe47031ce4b91?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
    },
    {
      name: "Nike",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c2ea2db56f0982a369bf436d2f9daea78cb937ef5a80220db61248277961c82?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
    },
    {
      name: "Deliveroo",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/809efac4d184eab6b5c66205708b1228692f05a1bfdbdf7f4beca6d2f8278405?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
    },
    {
      name: "Twitch",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6f8da04717022de32c99069408e9d34cb8e36359957e3f2d6b14e30557859c1?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
    },
    // {
    //   name: "Ticketmaster",
    //   logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3936f800aa7e41ccd50ace3d1446188f2c534da6724b6b4c7af276caf3de048?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a",
    // },
    {
      name: "Binance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
    {
      name: "ChatGPT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgba(21, 7, 12, 1)",
        padding: "40px 20px",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <div className="flex gap-7">
        <div className="h-[500px]">
          {" "}
          <Line />
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <h1 className=" border border-[#dc1e5e] text-base text-center w-40 p-2 rounded-3xl">
              Why Choose Us?
            </h1>

            <h1 className="p-0 text-start text-3xl md:text-5xl font-bold w-1/2 my-10">
              Why We Use Next.js and How It Benefits You
            </h1>

            <p className="text-slate-500 w-1/2 text-start">
              {" "}
              For us, it's all about quality and customization. We build
              websites with Next.js, a leading framework trusted by major brands
              such as:
            </p>
          </div>

          {/* <ImageList className="flex flex-wrap"> */}
          <ul className="flex flex-wrap gap-10">
            {brands.map((brand, index) => (
              <ImageListItem
                key={index}
                sx={{ width: "90px", height: "auto" }}
                className="flex"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ marginTop: "8px", color: "#fff", textAlign: "center" }}
                >
                  {brand.name}
                </Typography>
              </ImageListItem>
            ))}
          </ul>
          {/* </ImageList> */}

          <Typography variant="h6">
            <h6 className="text-sm md:text-base mt-16 bg-[#dc1e5e] px-7 text-white rounded-3xl text-start w-fit">
              Elevate your online presence with the same technology powering the
              world's biggest brands.
            </h6>
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default WhyChooseUs;
