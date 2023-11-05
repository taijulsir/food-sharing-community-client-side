import Lottie from "lottie-react";
import notFoundPage from '../Lottie/Animation - 1699156978467.json';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <div className="lg:w-[800px] lg:h-[700px] lg:mx-auto">
                <Lottie
                    animationData={notFoundPage}
                    options={defaultOptions}
                    height={400}
                    width={400}>
                </Lottie>
            </div>
            <div className="text-center mt-20">
                  <Link to='/'><button className="btn bg-teal-500 font-bold">Go Home</button></Link>
            </div>
          
        </div>

    );
};

export default ErrorPage;