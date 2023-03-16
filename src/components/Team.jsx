import React from "react";
import team from "../assets/img/png/team_img.png";

function Team() {
  return (
    <>
      <section className=" py-5 bg_light_gray">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-easing="liner"
              data-aos-duration="2000"
            >
              <h2 className=" ff_Konexy fw_regular fs_4xxl mb-0">
                Team Full of Stars{" "}
              </h2>
              <p className=" ff_gilroy fw_regular fs_sm mt-3 mb-0 pe-md-5">
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
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-easing="liner"
              data-aos-duration="2000"
            >
              <div className=" transform_translet_y">
                <img className=" w-100" src={team} alt="team" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
