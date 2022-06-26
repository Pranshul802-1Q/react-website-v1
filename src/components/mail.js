import emailjs from '@emailjs/browser';
import Footer from './Footer';


const serviceId = "service_y9y8lgt";
const templateId = "template_ihe7x6c";
const userId = "6SP5uInQB7dnoUkIV";


const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(serviceId, templateId, , userId).then(
    (result) => {
      alert("Message Sent Successfully");
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
};

export default handleSubmit;