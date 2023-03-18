import React, { useEffect, useState } from "react";

import LOgo from "../assets/img/svg/Logo.svg";
function PreLoader() {
  const [loder, setloader] = useState(0);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loder) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loder ? (
        <section className=" position-fixed bg_preloader w-100 min-vh-100  d-flex flex-column justify-content-center align-items-center position-relative ">
          <div className="overlay_preloader position-absolute"></div>
          <div className="d-flex align-items-end z_index2">
            <img className="LOgoLOader" src={LOgo} alt="" />
            <div>
              <span className="Dot d-inline-block ms-3 Dot1"></span>
              <span className="Dot d-inline-block ms-1 Dot2"></span>
              <span className="Dot d-inline-block ms-1 Dot3"></span>
              <span className="Dot d-inline-block ms-1 Dot4"></span>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
export default PreLoader;
