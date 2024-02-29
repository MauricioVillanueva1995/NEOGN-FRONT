import { useState, useEffect } from "react";
import SearchBannerPaths from "./SearchBannerPaths";

const SearchBanner = ({ selectedCategory }) => {
  const [statusInfo, setStatusInfo] = useState({
    statusTitle: "",
    statusParagraph: "",
    statusImage: "",
  });

  useEffect(() => {
    let newStatusInfo = {};
    switch (selectedCategory) {
      case "Monitors":
        newStatusInfo = {
          statusTitle: "GAMING MONITORS",
          statusParagraph: `A display monitor with a high or variable refresh rate. Gaming monitors offer increasingly greater refresh rates to make the action more lifelike.`,
          statusImage: SearchBannerPaths.Monitors,
        };
        break;
      case "Headsets":
        newStatusInfo = {
          statusTitle: "GAMING HEADSETS",
          statusParagraph: `Immersive sound, crystal-clear mics, customizable EQ and optional 7.1 surround. Everything you need to get into the game and perform with the added benefit of precise audio.`,
          statusImage: SearchBannerPaths.Headsets,
        };
        break;
      case "Keyboards":
        newStatusInfo = {
          statusTitle: "GAMING KEYBOARDS",
          statusParagraph:
            "Speed. Accuracy. Durability. Our gaming keyboards we’re designed with the technology and materials required for high performance gaming.",
          statusImage: SearchBannerPaths.Keyboards,
        };
        break;
      case "Mice":
        newStatusInfo = {
          statusTitle: "GAMING MICE",
          statusParagraph:
            "We develop award-winning wireless and wired gaming mice. Constantly innovating from sensors to shape, find the right one for you.",
          statusImage: SearchBannerPaths.Mice,
        };
        break;
      case "Mousepads":
        newStatusInfo = {
          statusTitle: "GAMING MOUSEPADS",
          statusParagraph:
            "From whole-desktop to minimal size, our mosepad has engineered each surface for maximum consistency and stability.",
          statusImage: SearchBannerPaths.Mousepads,
        };
        break;
      case "Controllers":
        newStatusInfo = {
          statusTitle: "GAMING CONTROLLERS",
          statusParagraph:
            "Upgrade your gaming with our precision controllers. Elevate gameplay in comfort and style with our advanced designs.",
          statusImage: SearchBannerPaths.Controllers,
        };
        break;
      case "Earbuds":
        newStatusInfo = {
          statusTitle: "GAMING EARBUDS",
          statusParagraph:
            "Upgrade your gaming with our advanced Gaming Earbuds. Experience top-notch sound quality, comfort, and seamless communication in a compact, stylish design.",
          statusImage: SearchBannerPaths.Earbuds,
        };
        break;
      case "Microphones":
        newStatusInfo = {
          statusTitle: "GAMING MICROPHONES",
          statusParagraph:
            "Elevate your gaming with our high-performance microphones. Designed for immersive sound and seamless communication, ensuring you stay at the top of your game",
          statusImage: SearchBannerPaths.Microphones,
        };
        break;
      default:
        newStatusInfo = {
          statusTitle: "GAMING MONITORS",
          statusParagraph: `A display monitor with a high or variable refresh rate. Gaming monitors offer increasingly greater refresh rates to make the action more lifelike.`,
          statusImage: SearchBannerPaths.Monitors,
        };
        break;
    }
    setStatusInfo(newStatusInfo);
  }, [selectedCategory]);

  return (
    <div
      className="w-full h-[550px] flex items-center justify-center"
      style={{
        background:
          "radial-gradient(263.94% 114.61% at 68.54% 63.45%, #224683 0%, #171F2E 100%)",
      }}
    >
      <div className="font-general-sans w-auto h-auto flex flex-col gap-y-[43px] absolute top-[140px] left-[200px]">
        <h1 className="font-semibold text-[50px] text-white">
          {statusInfo.statusTitle}
        </h1>
        <div className="w-[120px] h-[10px] border bg-[#C3C6C8] border-[#C3C6C8] border-opacity-30"></div>
        <p className="h-auto max-w-[520px] font-medium text-[21px] text-white">
          {statusInfo.statusParagraph}
        </p>
      </div>
      <img
        className="h-[450px] w-auto absolute top-[10%] right-[5%]"
        src={statusInfo.statusImage}
      />
    </div>
  );
};
export default SearchBanner;
