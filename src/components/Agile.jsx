import React from "react";
import agile from "../assets/img/png/agile_img.png";

function Agile() {
  return (
    <>
      <section className=" py-5 overflow-hidden">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div
              className="col-md-5"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <img
                className=" w-100 pe-md-5 mt-4 mt-md-0"
                src={agile}
                alt="agile"
              />
            </div>
            <div
              className="col-md-7"
              data-aos="fade-left"
              data-aos-easing="liner"
              data-aos-duration="2000"
            >
              <h2 className=" text-black ff_Konexy fs_4xxl fw_regular mb-0">
                <span className=" text_purpel fw_regular  fs_4xxl">
                  Agile WordPress
                </span>{" "}
                Development Project management
              </h2>
              <p className=" ff_gilroy fw_regular fs_sm text_darkGray mt-3 mb-0">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
              </p>
              <a
                className=" px-4 py-2 bg_purpel text-white rounded-5 ff_gilroy fw_semibold fs_sm btn_hover border_transperent mt-lg-4 d-inline-block mt-3"
                href="#"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Agile;
