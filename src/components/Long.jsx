import React from "react";
import propy from "../assets/img/png/propy.png";
import ciela from "../assets/img/png/ciela.png";
import revulve from "../assets/img/png/revelue.png";
import spark from "../assets/img/png/spark.png";

function Long() {
  return (
    <>
      <section className=" py-5 bg_light_gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className=" ff_Konexy fw_regular fs_4xxl text-black">
                Long Term WordPress Partner
              </h2>
              <p className=" ff_gilroy fw_regular fs_sm text_dark_black mb-0 mt-4">
                Our motto is the long-term partnership – we will not only
                develop your perfect website, but will be behind you through the
                whole process. They already trusted us:
              </p>
            </div>
          </div>
          <div className="overflo w-auto scrolbarnone">
            <div className="row justify-content-center align-items-center mt-md-5 mi n_width">
              <div className="col-md-2 col-sm-3 col-4">
                <img
                  className=" mt-4 mt-md-0 w-100 pe-md-4"
                  src={propy}
                  alt="propy"
                />
              </div>
              <div className="col-md-2 col-sm-3 col-4">
                <img
                  className=" mt-4 mt-md-0 w-100 px-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>
              <div className="col-md-2 col-sm-3 col-4">
                <img
                  className=" mt-4 mt-md-0 w-100 px-md-4"
                  src={revulve}
                  alt="revulve"
                />
              </div>
              <div className="col-md-2 col-sm-3 col-4">
                <img
                  className=" mt-4 mt-md-0 w-100 px-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>
              <div className="col-md-2 col-sm-3 col-4">
                <img
                  className=" mt-4 mt-md-0 w-100 px-md-4"
                  src={spark}
                  alt="spark"
                />
              </div>
              <div className="col-md-2 col-sm-3 col-4">
                <img
                  className=" mt-4 mt-md-0 w-100 ps-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Long;
