import React from "react";
import footer_logo from "../assets/img/png/Logo.png";
import search from "../assets/img/svg/search.svg";
import arrow from "../assets/img/svg/arrow.svg";
import phn from "../assets/img/svg/phn.svg";
import mail from "../assets/img/svg/mail.svg";
import home from "../assets/img/svg/home.svg";
import github from "../assets/img/svg/github.svg";
import in_img from "../assets/img/svg/in.svg";
import twitter from "../assets/img/svg/twitter.svg";
import fb from "../assets/img/svg/fb.svg";
import insta from "../assets/img/svg/insta.svg";
import w_logo from "../assets/img/svg/w_img.svg";

function Footer() {
  return (
    <>
      <footer className=" pt-5 bg-black">
        <div className="container">
          <div className="row justify-content-between align-items-center mt-5 pt-4">
            <div className="col-md-4">
              <a href="#">
                <img src={footer_logo} alt="footer_logo" />
              </a>
            </div>
            <div className="col-md-4">
              <div className=" d-flex justify-content-between align-items-center bg-white rounded-5 px-4 w-100 mt-4 mt-md-0">
                <input
                  className=" bg-transparent border_none outline_none w-100 pe-4 py-2 ff_gilroy fw_regular fs_sm"
                  type="text"
                  placeholder="Search here...."
                />
                <a href="#">
                  <img src={search} alt="search" />
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-sm-6">
              <div>
                <p className=" ff_gilroy fw_regular fs_sm text-white mb-0">
                  Services
                </p>
                <div className="d-flex align-items-center mt-3 links_hover">
                  <a className="" href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2 "
                    href="#"
                  >
                    WordPress Development
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WooCommerce Development
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WordPress Maintenance
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Speed Optimization
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Dedicated WordPress Developer
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Headless WordPress Development
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    White Label Development
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ps-lg-3 mt-5 mt-sm-0">
                <p className=" ff_gilroy fw_regular fs_sm text-white mb-0">
                  Services
                </p>
                <div className="d-flex align-items-center mt-3 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WordPress Hosting
                  </a>
                </div>
                <div className="d-flex mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    PSD, XD, Figma to WordPress Conversion
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Custom WordPress Theme
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    Custom WordPress Plugins
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    CMS to WordPress
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2 links_hover">
                  <a href="#">
                    <img src={arrow} alt="arrow" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    WordPress Malware Removal
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ps-lg-3 mt-5 mt-lg-0">
                <p className=" ff_gilroy fw_regular fs_sm text-white mb-0">
                  Latest Articles
                </p>
                <div className="d-flex align-items-center mt-3 footer_after_hover position-relative">
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-lg-2"
                    href="#"
                  >
                    7 WordPress Plugins to Create an Effective Newsletter
                    03.01.2022
                  </a>
                </div>
                <div className="d-flex align-items-center mt-3 footer_after_hover position-relative">
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-lg-2"
                    href="#"
                  >
                    What’s the Perfect Blog Post Length for Your WordPress
                    Site’s SEO? 02.01.2022
                  </a>
                </div>
                <div className="d-flex align-items-center mt-3 footer_after_hover position-relative">
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-lg-2"
                    href="#"
                  >
                    5 Reasons the Future of WordPress Is Headless 01.01.2022
                  </a>
                </div>
                <div className="d-flex align-items-center mt-3 footer_after_hover position-relative">
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-lg-2"
                    href="#"
                  >
                    Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                    Amazingly Successful 2021 30.12.2021
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className=" ps-lg-4 mt-5 mt-lg-0">
                <p className=" ff_gilroy fw_regular fs_sm text-white mb-0">
                  Contact
                </p>
                <div className="d-flex align-items-center mt-3 links_hover">
                  <a href="#">
                    <img src={phn} alt="phn" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    EU: +359 988 993 128
                  </a>
                </div>
                <div className="d-flex align-items-center mt-3 links_hover">
                  <a href="#">
                    <img src={phn} alt="phn" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    US: +1 (1 888) 266-6917
                  </a>
                </div>
                <div className="d-flex align-items-center mt-3 links_hover">
                  <a href="#">
                    <img src={mail} alt="mail" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    office@vipestudio.com
                  </a>
                </div>
                <div className="d-flex align-items-center mt-3 links_hover">
                  <a href="#">
                    <img src={home} alt="home" />
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white ps-2"
                    href="#"
                  >
                    14 Srebarna, Sofia 1407, Bulgaria
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_top mt-5">
          <div className="container">
            <div className="row justify-content-between align-items-center py-4 ">
              <div className="col-md-6">
                <p className=" ff_gilroy fw_regular fs_xsm text-white mb-0">
                  © Vipe Studio 2016-2022
                </p>
                <div className="d-flex mt-3">
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white line_after position-relative pe-3 text_stroke_link"
                    href="#"
                  >
                    Privacy
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white line_after position-relative pe-3 ms-2 text_stroke_link"
                    href="#"
                  >
                    Careers
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white line_after position-relative pe-3 ms-2 text_stroke_link"
                    href="#"
                  >
                    Media
                  </a>
                  <a
                    className=" ff_gilroy fw_regular fs_xsm text-white pe-3 ms-2 text_stroke_link"
                    href="#"
                  >
                    Client Area
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="d-flex gap-2 gap-md-3 justify-content-md-end mt-3 mt-md-0">
                  <a className="icon_hover" href="#">
                    <img src={github} alt="github" />
                  </a>
                  <a className="icon_hover" href="#">
                    <img src={in_img} alt="in_img" />
                  </a>
                  <a className="icon_hover" href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a className="icon_hover" href="#">
                    <img src={fb} alt="fb" />
                  </a>
                  <a className="icon_hover" href="#">
                    <img src={insta} alt="insta" />
                  </a>
                  <a className="icon_hover" href="#">
                    <img src={w_logo} alt="w_logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
