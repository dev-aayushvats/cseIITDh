import ContactPoints from "../components/ContactUs/ContactPoints";
import ContactUsFaq from "../components/ContactUs/ContactUsFaq";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import ContactUsSocialMediaSection from "../components/ContactUs/ContactUsSocialMediaSection";
import DepartmentAddress from "../components/ContactUs/DepartmentAddress";
import LocationAndDirections from "../components/ContactUs/LocationAndDirections";

const Contact = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Get in touch with the Department of Computer Science and Engineering
          at IIT DHARWAD
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Address and General Contact */}
        <DepartmentAddress />

        {/* Middle Column - Specific Contact Points */}
        <ContactPoints />

        {/* Right Column - Map and Directions */}
        <LocationAndDirections />
      </div>

      {/* FAQ Section */}
      <ContactUsFaq />

      {/* Contact Form Section */}
      <ContactUsForm />

      {/* Social Media Section */}
      <ContactUsSocialMediaSection />
    </div>
  );
};

export default Contact;
