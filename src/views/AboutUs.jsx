import TwitterLogo from "../assets/twitterlogo.svg";
import InstagramLogo from "../assets/instagramlogo.svg";
import AboutUsDesktop from "../components/AboutUsDesktop";

export default function AboutUs({ modalOpenCart, closeCart }) {
  return (
    <div className="w-auto h-auto">
      <AboutUsDesktop modalOpenCart={modalOpenCart} closeCart={closeCart} />
      <div className="dark:bg-[#121212] h-screen lg:hidden">
        <div className="w-auto flex-column justify-between items-center mx-10 mb-6 ">
          <h1 className="font-jakarta-sans text-stone-900 text-[24px] font-bold tracking-wide mb-4">
            About Us
          </h1>
          <p className="mb-6 font-general-sans font-normal">
            At NEOGN, we are passionate about technology and innovation. Founded
            with a vision to bring you the latest and most exciting electronic
            gadgets, we have been serving tech enthusiasts and gadget lovers
            since our inception.
          </p>
          <h2 className="text-stone-900 text-[18px] font-bold tracking-wide mb-4">
            Our Commitment to Excellence
          </h2>
          <p className="mb-6">
            NEOGN is not just an online store; its a curated marketplace where
            you can explore and acquire a wide range of electronic wonders that
            enhance your lifestyle. We take pride in offering a carefully
            selected collection of products that cater to your diverse needs,
            from wireless earbuds and gaming joysticks to premium headsets and
            sleek keyboards.
          </p>
          <ul className="flex items-center space-x-3">
            <li>
              <a href="https://twitter.com/NEOGN">
                <img className=" w-6 h-6  " src={TwitterLogo} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/neogn">
                <img className=" w-6 h-6  " src={InstagramLogo} />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full flex-column justify-between items-center my-8 bg-gray-600">
          <div className="content w-auto flex-column justify-between items-center mx-10 my-6 pt-8 pb-16">
            <h2 className="text-gray-200 text-[18px] font-bold tracking-wide mb-4 font-jakarta-sans">
              Why Choose NEOGN?
            </h2>
            <ul className="text-gray-200 tracking-wide mb-4">
              <li className="mb-4 font-general-sans font-normal">
                <b>Innovation:</b> We keep a finger on the pulse of the tech
                world, constantly seeking out the most innovative and stylish
                gadgets to feature in our store.
              </li>

              <li className="mb-4 font-general-sans font-normal">
                <b>Quality:</b> We believe in delivering nothing but the best.
                Every product in our inventory is rigorously tested to meet our
                high standards of quality and performance..
              </li>

              <li className="mb-4 font-general-sans font-normal">
                <b>Variety:</b> Our product range is extensive, ensuring that
                youll find the perfect gadget to match your preferences and
                needs.
              </li>

              <li className="mb-4 font-general-sans font-normal">
                <b>Customer-Centric:</b> Your satisfaction is our top priority.
                Our customer support team is always ready to assist you with any
                inquiries or concerns you may have.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
