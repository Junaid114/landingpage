import React from "react";
// import "./Process.module.css";
import Line from "./verticalline/Line";
import styles from "./Header.module.css";

const Process = () => {
  const process = [
    {
      title: "15 Min Call",
      description:
        "We discuss your requirements, color scheme, media, and text.",
    },
    {
      title: "Design Phase",
      description: "We create the design and present it to you for approval.",
    },
    {
      title: "Development",
      description: "The website is built according to the approved design.",
    },
    {
      title: "Delivery",
      description:
        "You receive your dashboard credentials, and your new website is live!",
    },
  ];
  return (
    <section
      className="my-20"
      style={{ backgroundColor: "rgba(21, 7, 12, 1)" }}
    >
      <div className="flex gap-7 text-white">
        <Line />
        <div>
          <h1 className="p-0 text-start text-2xl md:text-6xl font-bold w-1/2 my-10">
            Our Process
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-start me-7">
            {process.map((process, index) => (
              <div className="rounded-xl  p-10 border border-slate-500 md:py-14 flex flex-col gap-5">
                <div className="border border-[#dc1e5e] w-8 h-8 md:w-10 md:h-10 rounded-lg"></div>
                <h1 className="text-start p-0 text-xl md:text-3xl">
                  {process.title}
                </h1>
                <p className="text-slate-500 w-2/3">{process.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-10">
            <button className="bg-[#dc1e5e] w-fit  rounded-3xl  p-3 flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b06b2b2867b32392a4d910544812447eaea9465d26a4fd26969c46f64dd73e9?placeholderIfAbsent=true&apiKey=9017a87510fe476c98d2c8c4751e147a"
                alt=""
                className="text-white"
              />
              Stuur ons een bericht{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
    // <div
    //   className="container"
    //   style={{ backgroundColor: "rgba(21, 7, 12, 1)" }}
    // >
    //   <div style={{ display: "flex", alignItems: "flex-start" }}>
    //     <div style={{ flexShrink: 1, marginLeft: "80px" }}>
    //       <Line />
    //     </div>
    //     <div style={{ marginLeft: "20px", flex: 1 }}>
    //       <h1 style={{ paddingBottom: "20px", color: "white" }}>Our Process</h1>
    //       <div
    //         style={{
    //           gap: "20px",
    //           display: "flex",
    //           flexWrap: "wrap",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           backgroundColor: "rgba(21, 7, 12, 1)",
    //         }}
    //       >
    //         {/* Process 1 */}
    //         <div
    //           style={{
    //             border: "1px solid rgba(176, 25, 76, 1)",
    //             width: "calc(40% - 10px)",
    //             height: "200px",
    //             borderRadius: "10px",
    //             display: "inline",
    //           }}
    //         >
    //           <div
    //             style={{
    //               border: "1px solid rgba(176, 25, 76, 1)",
    //               marginTop: "20px",
    //               width: "40px",
    //               height: "60px",
    //               paddingLeft: "20px",
    //               marginLeft: "40px",
    //               borderRadius: "10px",
    //             }}
    //           ></div>
    //           <h3 style={{ marginLeft: "40px", color: "white" }}>
    //             15 Min Call
    //           </h3>
    //           <p
    //             style={{
    //               color: "white",
    //               marginLeft: "40px",
    //               width: "350px",
    //               marginBottom: "40px",
    //             }}
    //           >
    //             We discuss your requirements, color scheme, media, and text.
    //           </p>
    //         </div>

    //         {/* Process 2 */}
    //         <div
    //           style={{
    //             border: "1px solid rgba(176, 25, 76, 1)",
    //             width: "calc(40% - 10px)",
    //             height: "200px",
    //             borderRadius: "10px",
    //             display: "inline",
    //           }}
    //         >
    //           <div
    //             style={{
    //               border: "1px solid rgba(176, 25, 76, 1)",
    //               marginTop: "20px",
    //               width: "40px",
    //               height: "60px",
    //               paddingLeft: "20px",
    //               marginLeft: "40px",
    //               borderRadius: "10px",
    //             }}
    //           ></div>
    //           <h3 style={{ marginLeft: "40px", color: "white" }}>
    //             Design Phase
    //           </h3>
    //           <p
    //             style={{
    //               color: "white",
    //               marginLeft: "40px",
    //               width: "350px",
    //               marginBottom: "40px",
    //             }}
    //           >
    //             We create the design and present it to you for approval.
    //           </p>
    //         </div>

    //         {/* Process 3 */}
    //         <div
    //           style={{
    //             border: "1px solid rgba(176, 25, 76, 1)",
    //             width: "calc(40% - 10px)",
    //             height: "200px",
    //             borderRadius: "10px",
    //             display: "inline",
    //           }}
    //         >
    //           <div
    //             style={{
    //               border: "1px solid rgba(176, 25, 76, 1)",
    //               marginTop: "20px",
    //               width: "40px",
    //               height: "60px",
    //               paddingLeft: "20px",
    //               marginLeft: "40px",
    //               borderRadius: "10px",
    //             }}
    //           ></div>
    //           <h3 style={{ marginLeft: "40px", color: "white" }}>
    //             Development
    //           </h3>
    //           <p
    //             style={{
    //               color: "white",
    //               marginLeft: "40px",
    //               width: "350px",
    //               marginBottom: "40px",
    //             }}
    //           >
    //             The website is built according to the approved design.
    //           </p>
    //         </div>

    //         {/* Process 4 */}
    //         <div
    //           style={{
    //             border: "1px solid rgba(176, 25, 76, 1)",
    //             width: "calc(40% - 10px)",
    //             height: "200px",
    //             borderRadius: "10px",
    //             display: "inline",
    //           }}
    //         >
    //           <div
    //             style={{
    //               border: "1px solid rgba(176, 25, 76, 1)",
    //               marginTop: "20px",
    //               width: "40px",
    //               height: "60px",
    //               paddingLeft: "20px",
    //               marginLeft: "40px",
    //               borderRadius: "10px",
    //             }}
    //           ></div>
    //           <h3 style={{ marginLeft: "40px", color: "white" }}>Delivery</h3>
    //           <p
    //             style={{
    //               color: "white",
    //               marginLeft: "40px",
    //               width: "350px",
    //               marginBottom: "40px",
    //             }}
    //           >
    //             You receive your dashboard credentials, and your new website is
    //             live!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Process;
