import React from "react";
import { MdTag } from "react-icons/md";

const serviceList = [
  {
    name: "Just Them Hairs",
    services: [
      { name: "Beard Shape Up", price: "10" },
      { name: "CLARIFY & REPAIR", price: "25" },
      { name: "KIDS CUT", price: "20" },
      { name: "MEN'S HAIRCUT", price: "25" },
      { name: "WOMEN'S HAIRCUT", price: "25" },
      { name: "WASH & STYLE", price: "25" },
      { name: "HAIRCUT & STYLE", price: "35" },
      { name: "FLAT IRON OR CURLS", price: "15" },
    ],
  },
  {
    name: "Color ",
    services: [
      { name: "Glaze", price: "20" },
      { name: "Root", price: "40" },
      { name: "All over Color", price: "60" },
      { name: "Partial Highlight", price: "75" },
      { name: "Full Highlight", price: "120" },
      { name: "Color Correction" },
      { name: "Keratin Smoothing Treatment", price: "75" },
      { name: "Extensions" },
      { name: "Additional Color Charge for Length", price: "20" },
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-slate-700 ">
      <div className="container mx-auto">
        <h2 className="text-white flex items-center justify-center space-x-2 mb-5 text-6xl">
          <MdTag /> <span>Services</span>
        </h2>
        <div className="flex justify-around  ">
          {serviceList.map((column, i) => (
            <div key={i} id="services-hair" className="w-1/3 text-xl text-white services">
              <h5 className="card-title text-center mb-4">- {column.name} -</h5>
              <ul className="leaders uppercase">
                {column.services.map((service, j) => (
                  <li className="p-2 px-4" key={j}>
                    <div className="list-child">
                      <div className="list-item-title">{service.name}</div>
                      <div className="dots"></div>
                      <div className="list-item-price">
                        {service?.price ? <div className="dollar plus">{service.price}</div> : "Consult"}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="more float-right mt-4">See more...</div>
              <div className="less float-right mt-4">See less</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
