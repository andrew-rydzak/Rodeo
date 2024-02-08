import React from "react";
import { Header } from "./Header";
import MissionScreen from "./Mission/MissionScreen";
import Footer from "../../components/Footer";
import HowItWorks from "./HowItWorks/HowItWorks";
import { ContestantBenefits } from "./ContestantBenefits/ContestantBenefits";
import { WelcomeScreen } from "./Welcome/WelcomeScreen";
import { useSelector } from "react-redux";
import PopUpModal from "../../components/Modal";

const WelcomeHomeScreen = () => {
  //TODO fix /users route error and enable loggin state
  const showModal = useSelector((state) => state.modal.showModal);
  return (
    <section>
      {showModal && <PopUpModal />}
      <Header />
      <WelcomeScreen />
      <MissionScreen />
      <HowItWorks />
      <ContestantBenefits />
      <Footer />
    </section>
  );
};

export default WelcomeHomeScreen;
