import {  useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import ContactUsDesktop from "../components/ContactUsDesktop";

const ContactUs = ({ modalOpenCart, closeCart }) => {
  const entity = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: entity.username ?? entity.name,
    email: entity.email,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const ms = await axios.post("/api/users/message", messageData);
      console.log(ms);
    } catch (error) {
      console.log(error.message);
    }

    setFormData({
      name: entity.username ?? entity.name,
      email: entity.email,
      message: "",
    });
  };

  return (
    <div  className="w-auto h-auto">
    <ContactUsDesktop modalOpenCart={modalOpenCart} closeCart={closeCart}/>
      <div className="flex flex-col items-center w-full h-screen min-h-screen overflow-y-auto text-black bg-white dark:bg-[#121212] lg:hidden">
        <div className="contact-container mx-auto h-auto pb-28 grid grid-cols-1 gap-4 bg-white rounded md:w-80 lg:max-w-2xl md:m-auto md:w-90 md:max-w-full lg:grid-cols-2 lg:gap-6 lg:w-full lg:mt-20">
          <div className="form-container p-5 h-auto">
            <h3 className="text-base font-semibold mb-4">Message Us</h3>
            <form className="contact-form grid gap-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full bg-white  p-4 rounded-lg text-sm border border-gray-300"
                type="text"
                placeholder="YourName"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                className="w-full bg-white p-4 rounded-lg text-sm border border-gray-300"
                type="email"
                placeholder="Enter Your Email..."
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                className="w-full bg-white p-4 rounded-lg text-sm  border border-gray-300"
                placeholder="Write Message Here..."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                cols="30"
                rows="10"
                required
              ></textarea>
              <input
                className="send button w-full bg-heroColor text-white dark:bg-darkHero p-4 rounded-lg text-sm font-medium cursor-pointer transition duration-300 ease-linear hover:bg-red-400"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          <div className="w-auto h-auto">
            <div className="socials flex flex-row justify-center ">
              <a
                href="https://linkedin.com"
                className="text-4xl mx-2 text-gray-500 "
              >
                <AiOutlineLinkedin />
              </a>
              <a
                href="https://facebook.com"
                className="text-4xl mx-2 text-gray-500"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://instagram.com"
                className="text-4xl mx-2 text-gray-500"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-center items-center">
            <p className="text-sm">Our location</p>
          </div>
          <div className="map h-auto">
            <iframe
              className="w-full h-full "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51141489705!2d-74.10780699999997!3d4.6482975500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoSwgQm9nb3Rh!5e0!3m2!1sen!2sco!4v1696722777925!5m2!1sen!2sco"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
