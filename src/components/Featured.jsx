import React from "react";
import NwesYahoo from "../assets/img/png/Logo_Yahoo.png";
import Trandinglogo from "../assets/img/png/Tranding_topic_logo.png";
import FinensYahoo from "../assets/img/png/Logo_Yahoo_finenc.png";
import lifeYahoo from "../assets/img/png/Logo_life_yahoo.png";
function Featured() {
  return (
    <>
      <section className="bg_Featured py-xl-5 py-4  ">
        <div className=" container">
          <div className="py-xxl-5 py-lg-4 py-sm-3 py-2">
            <h2 className=" ff_Konexy fw-normal fs_4xxl text-black mb-0">
              Featured on
            </h2>
            <div className="pt-xl-5 pt-lg-4 ">
              <div className="row justify-content-center">
                <div
                  className="col-md-2 col-sm-3 col-4 "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="center-center"
                >
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={NwesYahoo} alt="logo" className="Yahoo_news" />
                  </div>
                </div>
                <div
                  className="col-md-2 col-sm-3 col-4 "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-anchor-placement="center-center"
                >
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={FinensYahoo} alt="logo" className="FinensYahoo" />
                  </div>
                </div>
                <div
                  className="col-md-2 col-sm-3 col-4 "
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="center-center"
                >
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={NwesYahoo} alt="logo" className="Yahoo_news" />
                  </div>
                </div>
                <div
                  className="col-md-2 col-sm-3 col-4 "
                  data-aos="fade-down"
                  data-aos-duration="2500"
                  data-aos-anchor-placement="center-center"
                >
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img
                      src={Trandinglogo}
                      alt="logo"
                      className="Trandinglogo"
                    />
                  </div>
                </div>
                <div
                  className="col-md-2 col-sm-3 col-4 "
                  data-aos="fade-down"
                  data-aos-duration="2800"
                  data-aos-anchor-placement="center-center"
                >
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={lifeYahoo} alt="logo" className="Yahoo_news" />
                  </div>
                </div>
                <div
                  className="col-md-2 col-sm-3 col-4 "
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="center-center"
                >
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img
                      src={Trandinglogo}
                      alt="logo"
                      className="Trandinglogo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
