
import { useLoaderData } from "react-router-dom";
import Bannar from "../../Components/Bannar/Bannar";
import Phones from "../../Components/Phones/Phones";




const Home = () => {

  const phones = useLoaderData()

  return (
    <div>
      <Bannar></Bannar>
      <Phones phones={phones}  ></Phones>
    </div>
  );
};

export default Home;