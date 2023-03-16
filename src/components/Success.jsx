import React from "react";
import spaceMan from "../assets/img/png/spaceMan.png";
import guids from "../assets/img/png/guids_img.png";
import Guides from "../Guides";

function Success() {
  return (
    <>
      <section className=" py-5">
        <div className="container">
          <div className="row align-items-center pt-lg-5 mt-4">
            <div className="col-md-4">
              <img className=" w-100" src={spaceMan} alt="spaceMan" />
            </div>
            <div className="col-md-8">
              <div className=" ps-md-4 mt-4 mt-md-0">
                <p className=" ff_gilroy fw_regular fs_sm text_Gray mb-0">
                  HAVE YOU SEEN OUR MASCOT?
                </p>
                <h2 className=" ff_Konexy fw_regular fs_4xxl text-black">
                  Success Guides{" "}
                </h2>
                <div className="d-flex gap-2 mt-4 mb-2 flex-wrap">
                  <a
                    className=" px-sm-3 px-2 py-2 success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#"
                  >
                    Category-1
                  </a>
                  <a
                    className="px-sm-3 px-2 py-2 success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#"
                  >
                    Category-2
                  </a>
                  <a
                    className=" px-sm-3 px-2 py-2 success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#"
                  >
                    Category-3
                  </a>
                  <a
                    className=" px-sm-3 px-2 py-2 success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#"
                  >
                    Category-4
                  </a>
                </div>
                <div className="row justify-content-center">
                  {Guides.map((value) => {
                    return (
                      <div className="col-md-4 col-sm-6">
                        <div className="p-lg-3 p-sm-2 p-3 success_box mt-4">
                          <img className=" w-100" src={value.img} alt="guids" />
                          <h5 className=" ff_gilroy fw_semibold fs_2xl text_lightBlack mt-3 mb-0">
                            {value.heading}
                          </h5>
                          <p className=" ff_gilroy fw_regular fs_sm mt-2 text_darkGray mb-0">
                            {value.lorem}
                          </p>
                          <a
                            className=" ff_gilroy fw_semibold fs_sm text_purpel mt-2 d-inline-block"
                            href="#"
                          >
                            {value.btn}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="have_box px-5 py-4">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <h2 className=" ff_Konexy fw_regular fs_4xxl text-white">
                  Have you
                </h2>
                <p className=" ff_gilroy fw_semibold fs_2xl text-white mb-0">
                  read our study about Speed and Performance in WordPress?
                </p>
              </div>
              <div className="col-md-3">
                <a
                  className=" px-lg-5 py-lg-3 px-3 py-2 bg-white rounded-5 text_purpel ff_Inter fw_semibold fs_sm ms-xxl-4 check_btn_hover border_transperent mt-4 mt-md-0 d-inline-block"
                  href="#"
                >
                  Check It Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Success;
