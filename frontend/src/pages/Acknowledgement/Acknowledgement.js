import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AcknowledgementForm from "../../components/acknowledgementForm/AcknowledgementForm";

function Acknowledgement() {
  return (
    <div>
      <Header />
      <AcknowledgementForm/>
      <Footer />
    </div>
  );
}

export default Acknowledgement;
