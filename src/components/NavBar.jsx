import React, { useState } from "react";
import Logo from "../assets/img/svg/Logo.svg";
import glob from "../assets/img/svg/glob.svg";
import Dropdown from "react-bootstrap/Dropdown";
import "react-dropdown/style.css";
function NavBar() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      {" "}
      <section
        className=" bg-black navBar "
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <div className="  m-0 m-sm-auto">
          {" "}
          <nav className="pt-3 nav_bg">
            <div className=" container px-2 px-sm-0 z_index_123">
              <div
                data-aos="fade-down"
                data-aos-delay="500"
                className=" d-flex justify-content-between align-items-center w-100 "
              >
                <li className="d-xl-none  ">
                  <a className="text-white ff_gilroy fs_sm w-75" href="#">
                    <img className="w-75" src={Logo} alt="/" />
                  </a>
                </li>
                <ul className="d-flex gap-xxl-3 gap-2  py-3  d-none d-lg-flex align-items-center mb-0 justify-content-end ps-0">
                  <li>
                    <a
                      className="text-white ff_gilroy fs_sm d-none d-xl-flex"
                      href="#"
                    >
                      <img src={Logo} alt="/" />
                    </a>
                  </li>
                  <li className="z_index_123">
                    <Dropdown className="text-white ff_gilroy fs_sm ">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="dropdoentoggle"
                      >
                        WordPress Solution
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          WordPress Solution 1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          WordPress Solution 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="z_index_123">
                    <Dropdown className="text-white ff_gilroy fs_sm ">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Services
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Services1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Services 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="z_index_123">
                    <a className="text-white ff_gilroy fs_sm" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li className="z_index_123">
                    <Dropdown className="text-white ff_gilroy fs_sm ">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        About
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Services1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Services 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="z_index_123">
                    <a className="text-white ff_gilroy fs_sm" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
                <ul className="d-flex gap-xxl-3 gap-2 z_index_123  py-3  d-none d-xl-flex align-items-center mb-0 justify-content-end">
                  <li className="z_index_123">
                    <a className="text-white ff_gilroy fs_sm" href="#">
                      1 888 266-6917 (eu?)
                    </a>
                  </li>

                  <span className="text-white ff_gilroy fs_md bg_purpel cursor_pointer  btn_nav d-inline-block ms-2 ">
                    Contact Us
                  </span>

                  <li className="z_index_123">
                    <Dropdown className="text-white ff_gilroy me-2 ">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="fs_md"
                      >
                        <img className="me-1 w_glob" src={glob} alt="glob" />{" "}
                        <span className=" ff_gilroy fs_sm fw-normal"> Eng</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Services1
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Services 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
                <label
                  className="menu_formatting d-flex  justify-content-end d-xl-none"
                  for="check"
                >
                  <input
                    onClick={() => setNavShow(!navShow)}
                    className="menu bg-black "
                    type="checkbox"
                    id="check"
                  />
                  <span className="d-flex justify-content-between "></span>
                  <span className="d-flex justify-content-between "></span>
                  <span className="d-flex justify-content-between "></span>
                  {/* <span className="span_nav3"></span> */}
                </label>
              </div>
              <div className="d-xl-none d-flex justify-content-between ">
                <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
                  <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center list-unstyled gap-3 gap-md-4 pt-3 transition">
                    <div className="d-flex flex-column gap-3 gap-md-4 d-lg-none align-items-center">
                      {" "}
                      <li className="z_index_123">
                        <Dropdown className="text-white ff_gilroy fs_sm ">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            WordPress Solution
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              WordPress Solution 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              WordPress Solution 2
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="z_index_123">
                        <Dropdown className="text-white ff_gilroy fs_sm ">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Services
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Services1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Services 2
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="z_index_123">
                        <a className="text-white ff_gilroy fs_sm" href="#">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <Dropdown className="text-white ff_gilroy fs_sm ">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Services
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Services1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Services 2
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </div>
                    <li className="z_index_123">
                      <a className="text-white ff_gilroy fs_sm" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="z_index_123">
                      <a className="text-white ff_gilroy fs_sm" href="#">
                        1 888 266-6917 (eu?)
                      </a>
                    </li>
                    <span className="text-white ff_gilroy fs_sm bg_purpel  btn_nav d-inline-block ">
                      <a href="#"> Contact Us</a>
                    </span>
                    <li className="z_index_123">
                      <Dropdown className="text-white ff_gilroy fs_sm ">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <img src={glob} alt="glob" /> Eng
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Services1
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Services 2
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default NavBar;
