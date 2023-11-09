import { Helmet } from "react-helmet";
import contact from "../../Lottie/contact - 1699527019288.json"
import Lottie from "lottie-react";

const About = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div>
                <section className="py-10 lg:py-20  font-poppins dark:bg-gray-800">
                    <div className="container  py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap ">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                                <div className="lg:max-w-md">
                                    <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                                        <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                        <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                            About Us
                                        </h1>
                                    </div>
                                    <p className="px-4 mb-10 text-base leading-7 text-zinc-950 dark:text-gray-400">
                                        Welcome to Our Food Sharing Company, where our passion for food unites communities. With a commitment to reducing food waste, we connect generous donors with those in need. Our mission is to make a positive impact, one meal at a time. Join us in this culinary journey towards a hunger-free world.
                                    </p>
                                    <div className="flex flex-wrap items-center">
                                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                            <div className="p-6  shadow-xl dark:bg-gray-900">
                                                <span className="text-blue-500 dark:text-blue-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10 bi bi-file-earmark-text"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                        <path
                                                            d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                    </svg>
                                                </span>
                                                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">2097
                                                </p>
                                                <h2 className="text-sm text-gray-700 dark:text-gray-400">Projects and Plans</h2>
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                            <div className="p-6  shadow-xl dark:bg-gray-900">
                                                <span className="text-blue-500 dark:text-blue-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10 bi bi-people-fill"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                        <path fillRule="evenodd"
                                                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                    </svg>
                                                </span>
                                                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">3,590
                                                </p>
                                                <h2 className="text-sm text-gray-700 dark:text-gray-400">Helped people</h2>
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                            <div className="p-6  shadow-xl dark:bg-gray-900">
                                                <span className="text-blue-500 dark:text-blue-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10 bi bi-person-fill"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </svg>
                                                </span>
                                                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">74
                                                </p>
                                                <h2 className="text-sm text-gray-700 dark:text-gray-400">Volunteer</h2>
                                            </div>
                                        </div>
                                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                            <div className="p-6  shadow-xl dark:bg-gray-900">
                                                <span className="text-blue-500 dark:text-blue-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10 bi bi-alarm-fill"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                                    </svg>
                                                </span>
                                                <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">100
                                                </p>
                                                <h2 className="text-sm text-gray-700 dark:text-gray-400">Timing</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <img src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg" alt=""
                                    className="relative z-40 object-cover w-full h-full rounded" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto ">
                    <div
                        className="flex items-center max-lg:justify-center h-full py-6 px-16 max-sm:px-4 font-[sans-serif]">
                        <div className=" max-lg:text-center flex-1 max-lg:mb-6">
                            <h2 className="text-4xl font-extrabold text-[#333]">Get In Touch</h2>
                            <p className="text-sm text-zinc-950 mt-4">Have a specific inquiry or looking to explore new opportunities? Our
                                experienced team is ready to engage with you.</p>
                            <form className="mx-auto mt-8 bg-teal-600/60 rounded-lg py-6 px-4 shadow-md">
                                <input type='text' placeholder='Name'
                                    className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none" />
                                <input type='email' placeholder='Email'
                                    className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none" />
                                <input type='text' placeholder='Subject'
                                    className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none" />
                                <textarea placeholder='Message' rows="6"
                                    className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"></textarea>
                                <button type='button'
                                    className="text-[#333] bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full mt-3">Send
                                    Message</button>
                            </form>
                        </div>


                        <div className="flex-1 relative items-center justify-center hidden w-full lg:flex lg:w-1/2">
                        <Lottie
                                    animationData={contact}
                                    options={defaultOptions}
                                    height={400}
                                    width={400}>
                                </Lottie>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;