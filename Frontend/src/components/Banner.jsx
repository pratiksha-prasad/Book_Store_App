import React from "react";
import banner from "../../public/photo.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-xl md:text-4xl font-bold">
              Hello, how are you?{" "}
              <p className="text-2xl md:text-4xl font-bold">
                 <span className="text-pink-500">Welcome to BooKzy !!</span>
              </p>
            </h1>
            
            <p className="text-sm md:text-xl">
              Discover a world of literary treasures at BooKzy, the ultimate destination for book 
              lovers. Whether you’re into bestsellers, classics, or hidden gems, our curated selection
              has something for everyone. Dive into the stories that captivate your imagination and find 
              your next favorite read at BooKzy. Happy reading!
            </p>
          </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[700px] md:h-[500px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
