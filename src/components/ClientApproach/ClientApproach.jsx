import React from "react";
import "./ClientApproach.css";
// import Line from "../verticalline/Line";
import backendimg from "../../assets/backendimg.jpg";

const ClientApproach = () => {
  const clients = [
    {
      chat: "Hey, ik ben een beginnende ondernemer en heb een website nodig voor mijn salon. Kunnen we een gesprek inplannen?",
      reply: "Jazeker! Wanneer...",
    },
    {
      chat: "Hey, ik ben een beginnende ondernemer en heb een website nodig voor mijn salon. Kunnen we een gesprek inplannen?",
      reply: "Jazeker! Wanneer...",
    },
    {
      chat: "Hey, ik ben een beginnende ondernemer en heb een website nodig voor mijn salon. Kunnen we een gesprek inplannen?",
      reply: "Jazeker! Wanneer...",
    },
  ];
  return (
    <div
      className="my-20 mx-16"
      style={{ backgroundColor: "rgba(21, 7, 12, 1)" }}
    >
      <div className="text-white">
        <h1 className="p-0 text-start text-3xl md:text-6xl font-bold w-3/5 my-10">
          How The Average Client Approaches Us
        </h1>
        <p className="text-slate-400 w-2/3 text-base md:text-xl mb-20">
          Lorem ipsum dolor sit amet consectetur. Scelerisque bibendum lacus sed
          elementum elementum lacus a sed commodo roin eget purus tellus.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 me-7">
          {clients.map((service, index) => (
            <div
              className="relative h-[500px] pt-32"
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342 343" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M324.751 233.489C341.59 199.252 349.002 151.034 333.56 104.767C318.118 58.4996 278.685 30.687 223.601 12.2929C120.246 -22.2209 22.1685 22.3876 6.87495 66.5723C-7.40981 107.843 -0.194598 136.596 35.693 173.879C71.5806 211.161 96.5101 237.643 105.898 275.305C115.146 312.407 127.32 334.564 155.407 340.356C185.785 346.621 217.733 342.153 247.713 322.64C278.298 302.733 309.086 265.34 324.751 233.489Z" fill="%23FF1A66"/></svg>')`,
                backgroundSize: "contain", // Adjusts the size of the SVG background
                backgroundPosition: "center", // Positions the SVG centrally
                backgroundRepeat: "no-repeat", // Ensures the SVG doesn't repeat
              }}
            >
              <div className="rounded-xl bg-[url(https://wallpapers.com/images/hd/whatsapp-chat-background-fb34cc4b2hg9lmix.jpg)] bg-contain flex flex-col gap-10 p-4 py-10">
                <p className="lg:me-16 bg-slate-800 p-4 md:text-xs lg:text-base rounded-lg">
                  {service.chat}
                </p>
                <div className="flex justify-end">
                  <p className="bg-[#dc1e5e] p-2 rounded-lg w-fit">
                    {service.reply}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="cards-container">
          <div className="card">
            <div className="card-background">
              {/* <img src={backendimg} alt="Background" /> 
            </div>
            <div className="card-text">
              <p>
                Hey, ik ben een beginnende ondernemer en heb een website nodig
                voor mijn salon. Kunnen we een gesprek inplannen?
              </p>
              <button className="btn">Jazeker! Wanneer...</button>
            </div>
          </div>

          <div className="card">
            <div className="card-background">
              {/* <img src={backendimg} alt="Background" /> 
            </div>
            <div className="card-text">
              <p>
                Hey, ik ben een beginnende ondernemer en heb een website nodig
                voor mijn salon. Kunnen we een gesprek inplannen?
              </p>
              <button className="btn">Jazeker! Wanneer...</button>
            </div>
          </div>

          <div className="card">
            <div className="card-background">
              {/* <img src={backendimg} alt="Background" /> 
            </div>
            <div className="card-text">
              <p>
                Geachte… Wij zijn op zoek naar een nieuwe website voor ons
                bedrijf! (dat al jarenlang actief is in de logistiek)
              </p>
              <button className="btn">Hallo, zullen wij...</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ClientApproach;
