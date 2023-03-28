import Form from "./components/Form";
import InfoSection from "./components/InfoSection";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Form />
        <SocialLinks />
      </Layout>
      <Layout
        backgroundColor="#161B24"
        sx={{ paddingTop: "6rem", paddingBottom: "3rem" }}
      >
        <InfoSection />
      </Layout>
    </>
  );
}

export default App;
