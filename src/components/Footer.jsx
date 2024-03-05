import { Link } from "react-router-dom";
import EmailLight from "../utils/Icons/ContactUs/EmailLight.webp";
import NEOGNLIGHT from "../utils/images/Logo/NEOGNLIGHT";
import AppleStore from "../utils/Icons/Footer/AppleStore.webp";
import Figma from "../utils/Icons/Footer/Figma.webp";
import Github from "../utils/Icons/Footer/Github.webp";
import LinkedIn from "../utils/Icons/Footer/LinkedIn.webp";
import Playstore from "../utils/Icons/Footer/Playstore.webp";
import Website from "../utils/Icons/Footer/Website.webp";

const Footer = () => {
  return (
    <div className="w-full h-auto hidden lg:block">
      <div className="w-full h-auto bg-[#0E0E0E] px-[60px] py-[44px] flex flex-col items-center justify-center gap-y-10">
        <div className="w-full h-auto flex justify-between items-center">
          <div className="w-[320px] text-white font-poppins font-semibold text-[24px]">
            Join our newsletter to keep up to date with us!
          </div>
          <div className="gap-x-4 w-auto h-auto flex items-center justify-around">
            <div className="py-3 w-[360px] h-auto rounded-full border-[#484848] border-[1px] gap-x-2 flex justify-start items-center px-4">
              <img className="w-6 h-auto" src={EmailLight} />
              <input
                className="text-white bg-transparent border-none outline-none font-poppins text-[14px] font-normal"
                placeholder="Enter your email"
              />
            </div>
            <button className="w-auto h-auto font-poppins font-medium text-white text-sm bg-heroButton py-[14px] px-[28px] rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full h-[0px] border border-white border-opacity-30"></div>
        <div className="w-full h-auto flex justify-between items-center">
          <div className="w-[380px] h-auto flex flex-col justify-center items-start font-poppins gap-y-[16px]">
            <img className="w-[60px] h-auto" src={NEOGNLIGHT} />
            <div className="self-stretch text-white text-2xl font-semibold">
              Experience the future of gaming with NEOGN
            </div>
            <div className="text-white text-base font-normal">NEOGN, 2023.</div>
            <div className="text-white text-base font-normal">
              Designed/Developed by Mauricio Villanueva
            </div>
          </div>
          <div className="w-auto h-auto flex gap-x-[64px]">
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Platform
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="/AboutUs">About Us</Link>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Company
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link
                  to="https://mawi.onrender.com/"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <img
                    className="h-[24px] w-auto"
                    src={Website}
                  />
                  Portfolio
                </Link>
                <Link
                  to="https://www.linkedin.com/in/mauriciogonzalovillanueva/"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <img
                    className="h-[24px] w-auto"
                    src={LinkedIn}
                  />
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Resources
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link
                  to="https://github.com/MauricioVillanueva/NEOGN"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <img
                    className="h-[24px] w-auto"
                    src={Github}
                  />
                  Github
                </Link>
                <Link
                  to="https://www.figma.com/file/XW5R5igJ6SnnQeCgmzqFES/NEOGN?type=design&node-id=686%3A3753&mode=design&t=8hvpPLrwQRtukL2F-1"
                  target="_blank"
                  className="flex gap-x-[9px]"
                >
                  <img
                    className="h-[24px] w-auto"
                    src={Figma}
                  />
                  Figma
                </Link>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col text-white gap-y-[16px]">
              <h3 className="font-poppins text-sm font-medium gap-y-[18px]">
                Get the app
              </h3>
              <div className="flex flex-col font-poppins gap-y-[18px]">
                <Link to="/ContactUs" className="flex gap-x-[9px]">
                  <img
                    className="h-[24px] w-auto"
                    src={Playstore}
                  />
                  PlayStore
                </Link>
                <Link to="/AboutUs" className="flex gap-x-[9px]">
                  <img
                    className="h-[24px] w-auto"
                    src={AppleStore}
                  />{" "}
                  Appstore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-20 py-6 bg-[#930C20] justify-between items-center inline-flex font-poppins">
        <div className="text-white text-sm font-normal">
          © 2023 NEOGN Inc. All rights reserved.
        </div>
        <div className="justify-start items-start gap-8 flex">
          <div className="text-white text-sm font-normal">Terms of Service</div>
          <div className="text-white text-sm font-normal">Privacy Policy</div>
          <div className="text-white text-sm font-normal">Cookies</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
