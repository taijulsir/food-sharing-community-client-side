import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AuthHook from "../../CustomHooks/AuthHook";
import toast, { Toaster } from "react-hot-toast";
import register from '../../Lottie/login - 1699455072449.json'
import Swal from "sweetalert2";
import Lottie from "lottie-react";
const Register = () => {
    const { createUser, profileUpdate, signOutUser, googleLogin, githubLogin } = AuthHook()
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    // animation

    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    // email login
    const handleEmailLogin = (e) => {


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        console.log(email, password, name, photoUrl)
        // password validation

        if (!/^(?=.*[A-Z])/.test(password)) {
            toast.error('Password have at least one uppercase letter')
            return;
        }
        if (!/(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password)) {
            toast.error('Password must be at least one special character')
            return;
        }
        createUser(email, password)
            .then(results => {
                console.log(results.user)
                profileUpdate(name, photoUrl)
                    .then(results => {
                        console.log(results)
                    })
                    .catch(errors => {
                        console.log(errors)
                    })
                toast.success("User created succesfully,Now Login")
                signOutUser()
                navigate('/login')
            })
            .catch(error => {
                const errorMessage = error.message
                toast.error(errorMessage)
            })
    }

    // popup login
    const handlePopupLogin = (media) => {
        media()
            .then(result => {
                const users = result.user
                console.log(users)
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Registration Succesful,Now login.'
                });
                signOutUser()
                navigate('/login')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
    }

    return (
        <div>

            <div className=" text-gray-900 flex justify-center">
                <div className="container mx-auto m-0 sm:m-10  sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-4xl font-extrabold">
                                Create Your Account
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                {/* email and password */}
                                <div className="">

                                    <form onSubmit={handleEmailLogin}>
                                        <input

                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="name" type="text" placeholder="Name" required />
                                        <input

                                            className="w-full mt-3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="email" type="email" placeholder="Email" required />
                                        <div>

                                            <div className="relative">
                                                <input
                                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                                    name="password" type={showPassword ? "text" : "password"} placeholder="Password" required />
                                            </div>
                                            <div className="absolute -mt-10 ml-[280px] lg:ml-[500px]  cursor-pointer">
                                                <button onClick={() => setShowPassword(!showPassword)}>
                                                    {
                                                        showPassword ? <FaEye className="text-2xl text-[#403F3F]"></FaEye> : <FaEyeSlash className="text-2xl text-[#403F3F]"></FaEyeSlash>
                                                    }
                                                </button>
                                            </div>

                                        </div>
                                        <input
                                            className="w-full mt-3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            name="photoUrl" type="url" placeholder="Photo URl" required />
                                        <button
                                            type="submit"
                                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">
                                                Sign Up
                                            </span>
                                        </button>
                                    </form>
                                    <p className="text-sm my-1 text-gray-700 dark:text-gray-400"> Already have an account?
                                        <Link to='/login'
                                            className="text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                                            Login Now</Link>
                                    </p>
                                </div>

                                {/* social links */}
                                <div className="my-8 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign up with social link
                                    </div>
                                </div>





                                {/* social media Register */}
                                <div className="flex flex-col ">
                                    <button
                                        onClick={() => handlePopupLogin(googleLogin)}
                                        className="w-full  font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4" />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853" />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04" />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335" />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Sign Up with Google
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => handlePopupLogin(githubLogin)}
                                        className="w-full font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                        <div className="bg-white p-1 rounded-full">
                                            <svg className="w-6" viewBox="0 0 32 32">
                                                <path fillRule="evenodd"
                                                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Sign Up with GitHub
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* image */}
                    <div className="relative items-center justify-center hidden w-full lg:flex lg:w-1/2">
                        <Lottie
                            animationData={register}
                            options={defaultOptions}
                            height={400}
                            width={400}>
                        </Lottie>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;