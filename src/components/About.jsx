import React from "react";

function About() {
  return (
    <div className="w-[88%] mx-auto">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="py-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
           
            <div className="lg:w-1/2 w-full">
              <img
                alt="same-day delivery"
                className="w-full max-w-[650px] lg:h-[570px] rounded"
                src="about-img.jpg"
              />
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 mt-10 lg:mt-0">
              <h2 className="text-2xl sm:text-4xl font-bold text-black pt-6">
                About PakCarry Services
              </h2>

              <p className="text-base sm:text-lg mt-3 pr-4 lg:pr-16">
                PakCarry is a peer-to-peer, traveler-based package delivery
                platform designed to revolutionize urban and inter-city
                logistics in Pakistan. The platform connects individuals and
                businesses with verified travelers who are already traveling to
                their desired destinations.
              </p>

              <p className="mt-4 text-base sm:text-lg pr-4 lg:pr-16">
                PakCarry provides a convenient online service for finding
                fellow-travelers who can deliver your parcel on their way.
                <br />
                Over the past few years, we have noticed an expansion in
                same-day delivery services. Our platform ensures fast and
                reliable delivery, allowing customers to receive their packages
                within hours. This service enhances convenience, reduces wait
                times, and supports urgent delivery needs.
              </p>

              <button className="mt-2 py-3 px-10 text-[#0ac6ae] border-2 border-[#0ac6ae] font-bold rounded-full hover:bg-[#089f8d] hover:text-white transition" style={{borderRadius:'35px'}}>
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
