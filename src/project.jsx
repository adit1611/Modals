import React from "react";
import Slider from "./slider";

const Project = () => {
  return (
    <div className=" w-screen h-fit ">   
      {/* First SVG Section */}
      <div className="w-full h-[100vh] -my-16">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <defs>
      <radialGradient id="gradient" cx="40%" cy="60%" r="60%" fx="70%" fy="94%">
      <stop offset="1%" stop-color="#d99fb8"></stop>
      <stop offset="95%" stop-color="#74c7e8"></stop>
      </radialGradient></defs>
      <path d="M 0,700 L 0,337 C 115.25,288.0892857142857 230.5,239.17857142857142 344,245 C 457.5,250.82142857142858 569.25,311.375 690,278 C 810.75,244.62499999999997 940.5,117.32142857142856 1067,74 C 1193.5,30.678571428571438 1316.75,71.33928571428572 1440,112 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path></svg>
      </div> 
      <div className="overlay absolute top-20 left-4 text-white h-20 w-[90vw]  flex items-center justify-between ">
      {/* Left Side: Logo and Text */}
      <div className="flex items-center space-x-4">
        <div className="border-2 rounded-full">
          <img
            src="https://png.pngtree.com/png-vector/20240830/ourlarge/pngtree-a-logo-png-image_13680167.png"
            className="w-10 h-14 p-2"
            alt="Logo"
          />
        </div>
        <div className="text-4xl">Pop Rock Crystal</div>
      </div>
    
      {/* Right Side: Navigation Links and Cart */}
      <div className="navlink flex items-center space-x-8 text-2xl">
        <ul className="list-none flex space-x-4">
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Help</li>
        </ul>
        <div className="relative left-20 flex gap-2">
            <div className="my-1 bg-red-700 rounded-full text-lg p-1 h-8">00</div>
        <span className="material-symbols-outlined text-3xl">
        shopping_bag
        </span></div>
      </div>
    </div>
        <div className="relative -top-[60vh] px-28 h-[55vh]  text-white flex">
            <div className="w-1/2">
                <h1 className="text-6xl">Welcome to</h1>
                 <h1 className="text-6xl font-semibold">Pop Rock Crystal Shop!</h1>
                 <p className="text-black text-lg w-[450px] text-wrap text-justify py-8">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
                 </p>
                 <div className="flex p-4 gap-8">
                    <button className="bg-white w-36 h-12 rounded-xl text-[#488197] text-xl font-medium">Shop Now</button>
                     <h2 className="text-lg flex items-center justify-center">About</h2>
                 </div>
            </div>
            <div className="h-[60vh] w-1/2"><Slider/></div>
        </div>
        <div className="h-16 w-60 -mt-[50vh] mx-[30%] flex gap-10 p-5">
            <img src="src\assets\down scroll.jpg" className="h-10 bg-black rounded-xl"/>
            <p className="text-lg text-[#87acba]">Scroll Down</p>
        </div>
        <div className="content h-screen w-screen my-10">
            <div className="h-[15vh] ">
                <h1 className="text-5xl text-center font-extrabold text-[#59768a]">All Product</h1>
                <div className="flex w-full px-10 items-center justify-between py-28">
                    <div className="flex justify-around gap-x-2">
                        <p>Filters:</p>
                        <div className="flex gap-x-2 border-2 border-gray-300">
                        <p>All Product</p>
                            <img className="w-4 h-4" src="https://img.icons8.com/?size=100&id=oUkF765HCB6l&format=png&color=000000"/>
                        </div>
                        <div className="flex gap-x-2 px-14">
                        <p className="">Sort:</p>
                        <div className="flex gap-x-2 border-2 border-gray-300">
                        <p>Best Selling</p>
                            <img className="w-4 h-4" src="https://img.icons8.com/?size=100&id=oUkF765HCB6l&format=png&color=000000"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full top-32">
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 mx-8">
              {/* Product Card */}
              <div className="card bg-white flex flex-col items-center justify-between rounded-3xl shadow-xl shadow-slate-400 p-4 h-[50vh]">
                <div className="flex items-center justify-center py-8">
                  <img
                    src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
                    className="w-28 sm:w-40 h-28 sm:h-40 object-contain"
                    alt="Product"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg sm:text-xl">Crystal Agate Phone Grip</p>
                  <p className="text-lg sm:text-xl text-[#317189]">$18.99</p>
                  <button className="mt-4 w-32 sm:w-36 h-10 sm:h-14 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white">
                    Buy Now
                  </button>
                </div>
              </div>
                    <div className="card h-[50vh] w-80 bg-white items-center justify-center rounded-3xl shadow-xl shadow-slate-400">
                        <div className="py-8 flex items-center justify-center"><img  src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 items-center"/>
                        
                        </div>
                        <div className="self-center">
                            <p className="text-xl text-center">Crystal Agate Phone Grip</p>
                            <p className="text-center text-xl text-[#317189]">18.99$</p>
                            <button className="h-14 w-36 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 relative left-20 top-8">Buy Now</button>
                        </div>
                        </div>
                        <div className="card h-[50vh] w-80 bg-white items-center justify-center rounded-3xl shadow-xl shadow-slate-400">
                        <div className="py-8 flex items-center justify-center"><img  src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 items-center"/>
                        
                        </div>
                        <div className="self-center">
                            <p className="text-xl text-center">Crystal Agate Phone Grip</p>
                            <p className="text-center text-xl text-[#317189]">18.99$</p>
                            <button className="h-14 w-36 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 relative left-20 top-8">Buy Now</button>
                        </div>
                        </div>
                        <div className="card h-[50vh] w-80 bg-white items-center justify-center rounded-3xl shadow-xl shadow-slate-400">
                        <div className="py-8 flex items-center justify-center"><img  src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 items-center"/>
                        
                        </div>
                        <div className="self-center">
                            <p className="text-xl text-center">Crystal Agate Phone Grip</p>
                            <p className="text-center text-xl text-[#317189]">18.99$</p>
                            <button className="h-14 w-36 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 relative left-20 top-8">Buy Now</button>
                        </div>
                        </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 mx-8">
                    <div className="card h-[50vh] w-80 bg-white items-center justify-center rounded-3xl shadow-xl shadow-slate-400">
                        <div className="py-8 flex items-center justify-center">
                        <img  src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 items-center"/>
                        
                        </div>
                        <div className="self-center">
                            <p className="text-xl text-center">Crystal Agate Phone Grip</p>
                            <p className="text-center text-xl text-[#317189]">18.99$</p>
                            <button className="h-14 w-36 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 relative left-20 top-8">Buy Now</button>
                        </div>
                    </div>
                    <div className="card h-[50vh] w-80 bg-white items-center justify-center rounded-3xl shadow-xl shadow-slate-400">
                        <div className="py-8 flex items-center justify-center"><img  src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 items-center"/>
                        
                        </div>
                        <div className="self-center">
                            <p className="text-xl text-center">Crystal Agate Phone Grip</p>
                            <p className="text-center text-xl text-[#317189]">18.99$</p>
                            <button className="h-14 w-36 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 relative left-20 top-8">Buy Now</button>
                        </div>
                        </div>
                        <div className="card h-[50vh] w-80 bg-white items-center justify-center rounded-3xl shadow-xl shadow-slate-400">
                        <div className="py-8 flex items-center justify-center"><img  src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 items-center"/>
                        
                        </div>
                        <div className="self-center">
                            <p className="text-xl text-center">Crystal Agate Phone Grip</p>
                            <p className="text-center text-xl text-[#317189]">18.99$</p>
                            <button className="h-14 w-36 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 relative left-20 top-8">Buy Now</button>
                        </div>
                        </div>
                        <div className="card h-[50vh] w-80 bg-white items-center justify-center rounded-3xl shadow-xl shadow-slate-400">
                        <div className="py-8 flex items-center justify-center"><img  src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 items-center"/>
                        
                        </div>
                        <div className="self-center">
                            <p className="text-xl text-center">Crystal Agate Phone Grip</p>
                            <p className="text-center text-xl text-[#317189]">18.99$</p>
                            <button className="h-14 w-36 bg-white rounded-2xl shadow-md shadow-gray-500 border-4 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400 relative left-20 top-8">Buy Now</button>
                        </div>
                        </div>
                </div>
            </div>


        </div>
            <div className="relative top-[60vh] h-screen border-2  ">
                    <div className="h-20 flex items-start text-xl justify-center py-2">
                        <button className="h-10 w-36 bg-white rounded-2xl  border-2 border-sky-400 text-sky-400 hover:text-white hover:bg-sky-400"> View All</button>
                    </div>
                    <div className="w-screen relative top-48 flex">
                    <div class="w-1/2 flex flex-col items-end text-6xl gap-y-8">
                    <h1 className="text-5xl text-[#31546d]">Best Price</h1>
                    <h1 className="text-[#31546d]  font-extrabold">Agate Phone Grip</h1>
                    <h1 className="gap-x-10 text-[#e35b3e]"><span className="line-through text-4xl text-[#43a1b8]">44.50$</span> 19.50$</h1>
                    <p className="text-justify w-80 text-lg text-[#31546d]">
                    These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                    </p>
                    <button class="mt-10  text-xl text-white bg-sky-400 h-10 w-40 rounded-xl">Buy Now</button>
                  </div>
                  
                        <div className="w-1/2 h-full p-10 ml-60  mt-[10vh] z-10">
                           <div className="bg-white h-[600px] w-[600px] bg-opacity-40 rounded-full flex items-center justify-center">
                            <div className="bg-white h-[400px] w-[400px] flex items-center justify-center rounded-full shadow-xl shadow-gray-400">
                                <div className="bg-white h-[300px] w-[300px] flex items-center justify-center rounded-full shadow-xl shadow-gray-400">
                                 <div className="flex items-center justify-center">
                                    <img src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg" className="w-40 h-40 rounded-full"/>
                                </div>
                            </div>
                        </div>
                        </div>

                </div>
                    </div>
                  
            </div>
              <div className="h-fit w-screen relative mt-[50vh] -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <defs>
    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#7ed3fd" stopOpacity="1" />
      <stop offset="100%" stopColor="#a6c7ff" stopOpacity="1" />
    </linearGradient>
  </defs>
  <path fill="url(#myGradient)" fillOpacity="1" d="M0,288L80,256C160,224,320,160,480,154.7C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>

            </div>
            
    </div>
  );
};

export default Project;
