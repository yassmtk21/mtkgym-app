import React, { useState } from "react";
import Images from "./images";
import Pagination from "./Pagination";
import Footer from "../Footer";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const div_pages = 6;
  const start_pages = (currentPage - 1) * div_pages;
  const end_pages = currentPage * div_pages;
  const pages = Math.ceil(Images.length / div_pages);
  const image_current = Images.slice(start_pages, end_pages);
  return (
    <>
      <h1 className="text-[1.2rem] font-bold">Gallery</h1>
      {/* card images */}
      <div className="">
        <div className="w-full grid md:grid-cols-3 gap-7 sm:grid-cols-2 grid-cols-1 place-items-center mt-4">
          {image_current.map((src, index) => (
            <div key={index} className="w-full h-[200px] md:h-[300px]">
              <img
                src={src.src}
                alt=""
                className="w-full h-full bg-cover bg-no-repeat bg-center rounded-lg shadow-2xl"
              />
            </div>
          ))}
        </div>

        {/* pagination component */}
        <div className="flex mt-10">
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="mt-20">
          <Footer />
        </div>
        
      </div>
    </>
  );
};

export default Gallery;
