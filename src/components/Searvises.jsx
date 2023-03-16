import React from "react";
import Checktik from "../assets/img/svg/CheckTik.svg";
import CuteGIrlStandInWindow from "../assets/img/png/CutteGirlStandsInWindow.png";
import bg_img_layer from "../assets/img/png/bg_layer3.png";
import MyData1 from "./MyMap";
import { MyData2 } from "./MyMap";
function Searvises() {
  return (
    <>
      <section className="bg-black py-5 overflow_x_hidden">
        <div className=" container">
          <div className="pb-xxl-5 mb-lg-4 pb-sm-3 pb-2 mb-xxl-5 mb-xl-4 mb-md-3 mb-sm-2">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-md-9 mb-4 mb-md-5 mb-xl-0">
                <div>
                  <h2 className=" ff_Konexy fs_4xl fw-normal text-white">
                    All Vipe Studio WordPress services include:{" "}
                  </h2>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4 mb-lg-4 mb-xxl-0">
                {MyData1.map((data) => {
                  return (
                    <div className="d-flex flex-column gap-2 text-white">
                      <h3 className=" ff_gilroy fs_2xl  fw-normal  mb-md-3 ">
                        {data.h3}
                      </h3>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data1}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data2}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data3}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data4}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data5}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data6}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="col-xl-3 col-md-6">
                {MyData2.map((data) => {
                  return (
                    <div className="d-flex flex-column gap-2 text-white">
                      <h3 className=" ff_gilroy fs_2xl fw-normal mb-md-3">
                        {data.h3}
                      </h3>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data1}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data2}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data3}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data4}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data5}
                      </span>
                      <span className=" ff_gilroy fs_sm fw-normal">
                        <img className="me-2" src={data.Image} alt="dot" />
                        {data.Data6}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt-5 position-relative">
            {" "}
            <img
              src={bg_img_layer}
              alt=""
              className="bg_laye_img position-absolute"
            />
            <img
              src={bg_img_layer}
              alt=""
              className="bg_laye_img2 position-absolute"
            />
            <div className="bg-black py-4 px-4 rounded-4 mt-4 parantbg_layer ">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-3 col-lg-7 mb-4 mb-xl-5 my-xxl-0">
                  <div className="h-100 d-flex flex-column justify-content-around">
                    <h2 className=" ff_Konexy fs_3xl fw-normal text-white">
                      Not Sure which service you need yet?{" "}
                    </h2>
                    <span className="mt-xl-4 mt-3">
                      <a
                        href="#"
                        className="btn_get bg_purpel ff_gilroy fs_sm fw-semibold text-white "
                      >
                        Schedule An Appointment
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-md-0 mt-4">
                  <div className=" d-flex flex-column  gap-2 h-100">
                    <h3 className=" ff_gilroy fs_2xl fw-bold text-white mb-lg-4 mb-xxl-0">
                      20-m free consultation that will help us identifyif you
                      need
                    </h3>
                    <span className=" ff_gilroy fs_sm fw-normal text-white">
                      <img className="me-2" src={Checktik} alt="dot" />
                      Technical Description & Discovery
                    </span>
                    <span className=" ff_gilroy fs_sm fw-normal text-white">
                      <img className="me-2" src={Checktik} alt="dot" />
                      Custom WordPress Development
                    </span>
                    <span className=" ff_gilroy fs_sm fw-normal text-white">
                      <img className="me-2" src={Checktik} alt="dot" />
                      Technical Description & Discovery
                    </span>
                    <span className=" ff_gilroy fs_sm fw-normal text-white">
                      <img className="me-2" src={Checktik} alt="dot" />
                      Support & Maintenance
                    </span>
                    <span className=" ff_gilroy fs_sm fw-normal text-white">
                      <img className="me-2" src={Checktik} alt="dot" />
                      Other WordPress Service
                    </span>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-4 mt-md-0">
                  <div className="h-100 d-flex justify-content-end">
                    <img
                      className="w_xl_75"
                      src={CuteGIrlStandInWindow}
                      alt=""
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

export default Searvises;
