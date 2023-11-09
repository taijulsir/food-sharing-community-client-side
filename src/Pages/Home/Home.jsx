import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Feature from "./Feature";
import Featured from "./Featured";
import Team from "./Team";
import HappyDonator from "./HappyDonator";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Community Foods Sharing Association</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <Team></Team>
            <HappyDonator></HappyDonator>
            <Feature></Feature>

        </div>
    );
};

export default Home;