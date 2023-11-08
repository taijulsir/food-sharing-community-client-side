

const Feature = () => {
    return (
        <div>
           <section className="flex items-center justify-center dark:bg-gray-800">
        <div className="px-4 py-10 mx-auto lg:py-20 container">
            <div className="max-w-xl mx-auto">
                <h1 className="mb-4 text-4xl font-bold text-center dark:text-white"> Our Features </h1>
                <p className="mb-16 text-lg text-center text-gray-500">
                Our mission is simple yet powerful: to reduce food waste, nourish communities, and promote a culture of sharing.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            className="text-white" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Food Sharing Hub </h3>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    We provide a platform where individuals and organizations can share their surplus food with those who need it most. Our hub connects generous food donors with grateful recipients, ensuring that no meal goes to waste.
                    </p>
                </div>
                <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            className="text-white" viewBox="0 0 16 16">
                           <path
                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Building Connections </h3>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    We are committed to sustainability. We encourage our members to embrace eco-friendly food sharing practices, reducing their environmental footprint while making a difference in their communities.
                    </p>
                </div>
                <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            className="text-white" viewBox="0 0 16 16">
                            <path
                                d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                            <path
                                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Sustainable Practices </h3>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    Our community isn't just about food; it's about connections. We facilitate meaningful relationships among our members, fostering a sense of togetherness and shared purpose.
                    </p>
                </div>
                <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            className="text-white" viewBox="0 0 16 16">
                            <path
                                d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Fostering Compassion </h3>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    Through our initiatives, we aim to foster compassion and empathy. By sharing food, we share kindness, and we believe in the power of small acts of goodness to create a better world.
                    </p>
                </div>
                <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            className="text-white" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                            <path
                                d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold dark:text-white">Reducing Food Waste </h3>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    Food waste is a global issue. We are dedicated to tackling it head-on, one plate at a time. By sharing food items that might otherwise go to waste, we make a substantial contribution to reducing this problem.
                    </p>
                </div>
                <div className="w-full p-8 transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 bg-blue-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            className="text-white" viewBox="0 0 16 16">
                            <path
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold dark:text-white"> Nourishing Communities </h3>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                       We believe that access to good, wholesome food is a basic human right. Our efforts aim to nourish communities and ensure that no one goes to bed hungry.
                    </p>
                </div>
            </div>
        </div>
    </section> 
        </div>
    );
};

export default Feature;