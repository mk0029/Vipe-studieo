import React from "react";
import VideiBtn from "../assets/img/png/Videobtn.png";
import GrupHeader from "../assets/img/webp/ImgHeadderGrup.webp";
import bg_grident_layer_1 from "../assets/img/svg/bg_grident_layer.svg";
import SearchIcon from "../assets/img/svg/SearchIcon.svg";
import Retry from "../assets/img/svg/Retry_logo.svg";
function Header() {
  return (
    <>
      <section className="bg-black py-5">
        <div className=" container z_index">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mt-lg-5 mt-xl-0">
                <h1 className=" ff_Konexy fs_7xl fw-normal text-white  line_after position-relative ">
                  WordPress Development Agency
                </h1>
                <h3 className=" ff_gilroy fw-bold text-white fs_2xl my-3 my-lg-2 my-xxl-4">
                  for Enterprise + Friendly Team
                </h3>
                <p className=" ff_gilroy fw-normal text_lightGray fs_sm">
                  Vipe Studio is a WordPress Agency for development - a
                  long-term partner for any WordPress service. Websites
                  and,online shops development, maintenance and customization is
                  what we do best.
                </p>
                <div className="d-flex gap-2 gap-sm-4 my-4">
                  <span>
                    <a
                      href="#"
                      className=" btn_get bg_purpel ff_gilroy fs_xsm fw-semibold text-white "
                    >
                      Get Started
                    </a>
                  </span>
                  <span>
                    <a
                      href="#"
                      className=" btn_video ff_gilroy fs_xsm fw-normal text_Gray"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <img className="btnvid" src={VideiBtn} alt="btn" /> What
                        is Vipe? (1min)
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-6">
              <div className="ms-xl-5 d-flex justify-content-center d-xxl-block my-4 my-xxl-0 z_index2 position-relative  ">
                <img
                  className=" position-absolute img_grident z_index0"
                  src={bg_grident_layer_1}
                  alt="bg grident"
                />
                <img
                  className=" position-absolute img_grident2 z_index0"
                  src={bg_grident_layer_1}
                  alt="bg grident"
                />
                <img className="image_header" src={GrupHeader} alt="Header" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg_tellUs pt-lg-5 pt-sm-4 pt-3 mt-md-5 pb-xl-5 pb-lg-4 pb-sm-3 pb-2 z_index">
        <div className=" container ">
          <div className=" pb-xl-0 pb-lg-4 pb-sm-3 pb-2 ">
            <div className="row justify-content-between">
              <div className="col-xl-6">
                <h2 className="text-white ff_Konexy fs_3xxl fw-normal">
                  Tell us more....
                </h2>
                <p className="text-white ff_gilroy fs_sm fw-normal mb-0 mb-sm-2 ">
                  {" "}
                  Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                  augue in quis. Magna vel orci sem neque fringilla et lectus
                  laoreet.
                </p>
              </div>
              <div className="col-xl-5 mt-4 mt-xl-0">
                <div className="   ">
                  <label htmlFor="Searc" className="w-100 position-relative">
                    <img
                      className="SearchIcon position-absolute"
                      src={SearchIcon}
                      alt=""
                    />
                    <input
                      className="w-100"
                      type="text"
                      placeholder="What do you need assistance with?"
                      id="Plasehoder"
                    />
                  </label>
                  <div className="d-flex align-items-center justify-content-sm-between flex-column flex-sm-row mt-2">
                    <pre className=" ff_gilroy text-white fs_sm fw-normal overflow-hidden">
                      <a href="#plase">
                        <img className="hover_rotate" src={Retry} alt="retry" />
                      </a>{" "}
                      &nbsp;or &nbsp;
                      <a
                        className="ff_gilroy text-white fs_sm fw-normal hover_header_links position-relative "
                        href="#"
                      >
                        send us an inquire?
                      </a>
                    </pre>
                    <span className="ff_gilroy text-white fs_sm fw-normal ">
                      {" "}
                      <a
                        className="ff_gilroy text-white fs_sm fw-normal hover_header_links position-relative "
                        href="#"
                      >
                        Learn more about...
                      </a>
                    </span>
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

export default Header;
