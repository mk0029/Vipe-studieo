import React from "react";
import integer1 from "../assets/img/svg/integer1.svg";
import { integer } from "../Guides";
function Integer() {
  return (
    <>
      <section className=" py-5">
        <div className="container">
          <h2 className=" ff_Konexy fw_regular fs_4xxl text-black mb-0">
            Integer et nisl non
          </h2>
          <div className="row mb-5 justify-content-center">
            {integer.map((data) => {
              return (
                <div className="col-md-4 col-sm-6 mt-4">
                  <div className="pt-lg-4 px-4 text-center integer_box mt-4 h-100">
                    <img className=" mt-4" src={data.img} alt="integer1" />
                    <h6 className=" ff_Inter fw_semibold fs_2xl text_lightBlack mt-lg-5 mt-3 mb-0">
                      {data.heading}
                    </h6>
                    <p className=" mt-3 ff_gilroy fw_regular fs_sm text_darkGray mb-lg-3 mb-2">
                      {data.lorem}
                    </p>
                    <a
                      className=" text_purpel ff_gilroy fw_semibold fs_sm"
                      href="#"
                    >
                      {data.link}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Integer;
