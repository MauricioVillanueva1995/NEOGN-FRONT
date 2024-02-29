import { Link } from "react-router-dom";
import { useTheme } from './ThemeContext';
const TitleSection = ({title, location}) => {
  const { theme } = useTheme();

    return (
       <div className="font-jakarta-sans w-full h-auto">
        <div className="w-auto h-[50px] flex justify-start absolute z-10 items-center">
          <Link to={location} className="inline max-w-max ml-6">
            <img
              className="icon w-auto h-[14px]"
              src={theme === "dark" ? "https://i.postimg.cc/Ghdx5Wb8/arrowheads-of-thin-outline-to-the-left.png" :"https://www.svgrepo.com/show/43165/arrowheads-of-thin-outline-to-the-left.svg"}
            />
          </Link>
        </div>

        <div className="w-full h-[50px] bg-white dark:bg-black flex justify-start pl-20 md:justify-center md:pl-0">
          <h1 className="inline-block max-content relative text-center text-black dark:text-white text-xl font-bold leading-[49px]">
            {title}
          </h1>
        </div>
      </div> 
    )
}

export default TitleSection;