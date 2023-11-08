

const Team = () => {
    return (
        <div>
         <div className="font-[sans-serif] text-[#333]">
  <div className=" container  mx-auto my-16">
    <h2 className="text-2xl lg:text-4xl font-extrabold border-[#333] text-center ">Meet Our Team</h2>
    <p className="text-center w-1/2 mx-auto text-lg">We are proud to introduce you to the heart and soul of our platform. Our dedicated team is committed to making a difference in the fight against food waste. </p>
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 max-md:justify-center mt-8">

      <div className="grid grid-cols-3 items-center bg-sky-900 p-4 rounded-md relative">
        <div className="col-span-2">
          <img src="https://readymadeui.com/team-1.webp" className="rounded-md" />
        </div>
        <div className="bg-white rounded-md p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
          <h4 className="text-sm font-bold">John Doe</h4>
          <p className="text-[10px] text-gray-500">United State</p>
          <p className="mt-2 text-[10px] font-semibold">Founder & CEO</p>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center bg-sky-900 p-4 rounded-md relative">
        <div className="col-span-2">
          <img src="https://readymadeui.com/team-2.webp" className="rounded-md" />
        </div>
        <div className="bg-white rounded-md p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
          <h4 className="text-sm font-bold">Mark Adair</h4>
          <p className="text-[10px] text-gray-500">United State</p>
          <p className="mt-2 text-[10px] font-semibold">Community Manager</p>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center bg-sky-900 p-4 rounded-md relative">
        <div className="col-span-2">
          <img src="https://readymadeui.com/team-3.webp" className="rounded-md" />
        </div>
        <div className="bg-white rounded-md p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
          <h4 className="text-sm font-bold">Simon Konecki</h4>
          <p className="text-[10px] text-gray-500">United State</p>
          <p className="mt-2 text-[10px] font-semibold">Customer Support</p>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center bg-sky-900 p-4 rounded-md relative">
        <div className="col-span-2">
          <img src="https://readymadeui.com/team-2.webp" className="rounded-md" />
        </div>
        <div className="bg-white rounded-md p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
          <h4 className="text-sm font-bold">Mark Adair</h4>
          <p className="text-[10px] text-gray-500">United State</p>
          <p className="mt-2 text-[10px] font-semibold">Software Engineer</p>
        </div>
      </div>
     
    </div>
  </div>
</div>   
        </div>
    );
};

export default Team;