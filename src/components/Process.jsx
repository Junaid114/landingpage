// import React from "react";
// import styles from "./Process.module.css";
// import Line from "./verticalline/Line";

// const ProcessStep = ({ icon, title, description }) => (
//   <div className={styles.processStep}>
   
//     <div className={styles.stepContent}>
//     <div className={styles.iconContainer} />
//       <h3 className={styles.stepTitle}>{title}</h3>
//       <p className={styles.stepDescription}>{description}</p>
//     </div>
//   </div>
// );

// const Process = () => {
//   const steps = [
//     {
//       title: "15 Min Call",
//       description:
//         "We discuss your requirements, color scheme, media, and text.",
//     },
//     {
//       title: "Design Phase",
//       description: "We create the design and present it to you for approval.",
//     },
//     {
//       title: "Development",
//       description: "The website is built according to the approved design.",
//     },
//     {
//       title: "Delivery",
//       description:
//         "You receive your dashboard credentials, and your new website is live!",
//     },
//   ];

//   return (
//     <section className={styles.process}>
//     <Line/>

//       <div className={styles.stepsContainer}>
//       <h2 className={styles.processTitle}>Our Process</h2>
//         {steps.map((step, index) => (
//           <div className={styles.newprocess}>
//           <ProcessStep key={index} {...step} />
//           </div>
//         ))}
//       </div>
//       {/* <button className={styles.contactButton}>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/66ddf697bff09dbf7f85141070e23044a118c5a97dbe7d6685ff2432fdd5c476?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a"
//           alt=""
//           className={styles.buttonIcon}
//         />
//         <span>Stuur ons een bericht</span>
//       </button> */}
//     </section>
//   );
// };

// export default Process;



// import React from "react";
// import styles from "./Process.module.css";
// import Line from "./verticalline/Line";

// const ProcessStep = ({ title, description }) => (
//   <div className={styles.processStep}>
//     <h3 className={styles.stepTitle}>{title}</h3>
//     <p className={styles.stepDescription}>{description}</p>
//   </div>
// );

// const Process = () => {
//   const steps = [
//     {
//       title: "15 Min Call",
//       description: "We discuss your requirements, color scheme, media, and text.",
//     },
//     {
//       title: "Design Phase",
//       description: "We create the design and present it to you for approval.",
//     },
//     {
//       title: "Development",
//       description: "The website is built according to the approved design.",
//     },
//     {
//       title: "Delivery",
//       description: "You receive your dashboard credentials, and your new website is live!",
//     },
//   ];

//   return (
//     <section className={styles.process}>
//       {/* <div className={styles.leftColumn}> */}
//         <Line />
//       {/* </div> */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.processTitle}>Our Process</h2>
//         <div className={styles.stepsRow}>
//           {steps.map((step, index) => (
//             <ProcessStep key={index} {...step} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;


import React from "react";
import "./Process.module.css"; 
import Line from "./verticalline/Line";

const Process = () => {
  return (
//     <div className="container" style={{ backgroundColor: 'rgba(21, 7, 12, 1)'}}>
//       <Line/>
//       <h1 style={{paddingbottom:'20px'}}>Our Process</h1>
//       <div
//         style={{
//           gap: "20px",
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: 'rgba(21, 7, 12, 1)'
//         }}
//       >
//         {/* Process 1 */}
//         <div
//           style={{
//             border: '1px solid rgba(176, 25, 76, 1)',
//             width: "calc(40% - 10px)",
//             height: "200px",
//             borderRadius: "10px",
//             display: "inline",
//           }}
//         >
//           <div
//             style={{
//               border: '1px solid rgba(176, 25, 76, 1)',
//               marginTop: "20px",
//               width: "40px",
//               height: "60px",
//               paddingLeft: "20px",
//               marginLeft: "40px",
//               borderRadius: "10px",
//             }}
//           ></div>
//           <h3 style={{ marginLeft: "40px",color:'white' }}>15 Min Call</h3>
//           <p style={{color:'white', marginLeft:'40px', width:'350px',marginBotom:'40px'}}>We discuss your requirements, color scheme, media, and text.
//           </p>
//         </div>
  
//         {/* Process 2 */}
//         <div
//           style={{
//             border: '1px solid rgba(176, 25, 76, 1)',
//             width: "calc(40% - 10px)",
//             height: "200px",
//             borderRadius: "10px",
//             display: "inline",
//           }}
//         >
//           <div
//             style={{
//               border: '1px solid rgba(176, 25, 76, 1)',
//               marginTop: "20px",
//               width: "40px",
//               height: "60px",
//               paddingLeft: "20px",
//               marginLeft: "40px",
//               borderRadius: "10px",
//             }}
//           ></div>
//           <h3 style={{ marginLeft: "40px",color:'white' }}>Design Phase</h3>
//           <p style={{color:'white', marginLeft:'40px', width:'350px',marginBotom:'40px'}}>We create the design and present it to you for approval.

//           </p>
//         </div>
  
//         {/* Process 3 */}
//         <div
//           style={{
//             // border: "1px solid red",
//             border: '1px solid rgba(176, 25, 76, 1)',
//             width: "calc(40% - 10px)",
//             height: "200px",
//             borderRadius: "10px",
//             display: "inline",
//           }}
//         >
//           <div
//             style={{
//               border: '1px solid rgba(176, 25, 76, 1)',
//               marginTop: "20px",
//               width: "40px",
//               height: "60px",
//               paddingLeft: "20px",
//               marginLeft: "40px",
//               borderRadius: "10px",
//             }}
//           ></div>
//           <h3 style={{ marginLeft: "40px",color:'white' }}>Development</h3>
//           <p style={{color:'white', marginLeft:'40px', width:'350px',marginBotom:'40px'}}>The website is built according to the approved design.

//           </p>
//         </div>
  
//         {/* Process 4 */}
//         <div
//           style={{
//             border: '1px solid rgba(176, 25, 76, 1)',
//             width: "calc(40% - 10px)",
//             height: "200px",
//             borderRadius: "10px",
//             display: "inline",
//           }}
//         >
//           <div
//             style={{
//               border: '1px solid rgba(176, 25, 76, 1)',
//               marginTop: "20px",
//               width: "40px",
//               height: "60px",
//               paddingLeft: "20px",
//               marginLeft: "40px",
//               borderRadius: "10px",
//             }}
//           ></div>
//           <h3 style={{ marginLeft: "40px" ,color:'white'}}>Delivery</h3><p style={{color:'white', marginLeft:'40px', width:'350px',marginBotom:'40px'}}>You receive your dashboard credentials, and your new website is live!

// </p>
//         </div>
//       </div>
//     </div>
<div className="container" style={{ backgroundColor: 'rgba(21, 7, 12, 1)' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start'}}>
    <div style={{ flexShrink: 1,marginLeft:'80px'  }}>
      <Line />
    </div>
    <div style={{ marginLeft: '20px', flex: 1 }}>
      <h1 style={{ paddingBottom: '20px', color: 'white' }}>Our Process</h1>
      <div
        style={{
          gap: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(21, 7, 12, 1)'
        }}
      >
        {/* Process 1 */}
        <div
          style={{
            border: '1px solid rgba(176, 25, 76, 1)',
            width: 'calc(40% - 10px)',
            height: '200px',
            borderRadius: '10px',
            display: 'inline',
          }}
        >
          <div
            style={{
              border: '1px solid rgba(176, 25, 76, 1)',
              marginTop: '20px',
              width: '40px',
              height: '60px',
              paddingLeft: '20px',
              marginLeft: '40px',
              borderRadius: '10px',
            }}
          ></div>
          <h3 style={{ marginLeft: '40px', color: 'white' }}>15 Min Call</h3>
          <p style={{ color: 'white', marginLeft: '40px', width: '350px', marginBottom: '40px' }}>
            We discuss your requirements, color scheme, media, and text.
          </p>
        </div>

        {/* Process 2 */}
        <div
          style={{
            border: '1px solid rgba(176, 25, 76, 1)',
            width: 'calc(40% - 10px)',
            height: '200px',
            borderRadius: '10px',
            display: 'inline',
          }}
        >
          <div
            style={{
              border: '1px solid rgba(176, 25, 76, 1)',
              marginTop: '20px',
              width: '40px',
              height: '60px',
              paddingLeft: '20px',
              marginLeft: '40px',
              borderRadius: '10px',
            }}
          ></div>
          <h3 style={{ marginLeft: '40px', color: 'white' }}>Design Phase</h3>
          <p style={{ color: 'white', marginLeft: '40px', width: '350px', marginBottom: '40px' }}>
            We create the design and present it to you for approval.
          </p>
        </div>

        {/* Process 3 */}
        <div
          style={{
            border: '1px solid rgba(176, 25, 76, 1)',
            width: 'calc(40% - 10px)',
            height: '200px',
            borderRadius: '10px',
            display: 'inline',
          }}
        >
          <div
            style={{
              border: '1px solid rgba(176, 25, 76, 1)',
              marginTop: '20px',
              width: '40px',
              height: '60px',
              paddingLeft: '20px',
              marginLeft: '40px',
              borderRadius: '10px',
            }}
          ></div>
          <h3 style={{ marginLeft: '40px', color: 'white' }}>Development</h3>
          <p style={{ color: 'white', marginLeft: '40px', width: '350px', marginBottom: '40px' }}>
            The website is built according to the approved design.
          </p>
        </div>

        {/* Process 4 */}
        <div
          style={{
            border: '1px solid rgba(176, 25, 76, 1)',
            width: 'calc(40% - 10px)',
            height: '200px',
            borderRadius: '10px',
            display: 'inline',
          }}
        >
          <div
            style={{
              border: '1px solid rgba(176, 25, 76, 1)',
              marginTop: '20px',
              width: '40px',
              height: '60px',
              paddingLeft: '20px',
              marginLeft: '40px',
              borderRadius: '10px',
            }}
          ></div>
          <h3 style={{ marginLeft: '40px', color: 'white' }}>Delivery</h3>
          <p style={{ color: 'white', marginLeft: '40px', width: '350px', marginBottom: '40px' }}>
            You receive your dashboard credentials, and your new website is live!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
  
};

export default Process;
