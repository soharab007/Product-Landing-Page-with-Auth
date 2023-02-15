import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

const Home = () => {
  // const authValue = useContext(AuthContext);
  // console.log(authValue);
  return (
    <div>
      <Header />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
