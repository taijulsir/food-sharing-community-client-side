import Banner from "./Banner";
import Feature from "./Feature";
import Featured from "./Featured";
import Team from "./Team";
import Testimonial from "./Testimonial";

  
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <Team></Team>
           <Feature></Feature>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;