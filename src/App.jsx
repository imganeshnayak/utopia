import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MobileShowcase from "./components/MobileShowcase";
import MerchantShowcase from "./components/MerchantShowcase";
import Merchants from "./Merchants";
import Philosophy from "./Philosophy";
import Footer from "./Footer";
import WaitlistModal from "./WaitlistModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("customer");

  const openWaitlistModal = (tab = "customer") => {
    setModalTab(tab);
    setIsModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50">
      <Navbar onOpenWaitlist={openWaitlistModal} />
      <Hero onOpenWaitlist={openWaitlistModal} />
      <MobileShowcase />
      <MerchantShowcase />
      <Merchants onOpenWaitlist={openWaitlistModal} />
      <Philosophy />
      <Footer />
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={closeWaitlistModal}
        initialTab={modalTab}
      />
    </div>
  );
}

export default App;
