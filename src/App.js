import "./App.css";

import { useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Selectedbeast from "./Components/Selectedbeast/Selectedbeast";

import data from "./data.json";


function App () {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
   //const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className= "App">
      <Header />
      <Main data={data} handleModal={handleModal} />
      {modal && <Selectedbeast modalContent={modalContent} closeModal={closeModal} />}
      <Footer />
    </div>
  );
}

export default App; 