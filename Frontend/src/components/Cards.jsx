import React from "react";
function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
            </h2>
            <div className="flex items-center justify-between">
              <div className="badge badge-secondary">{item.category}</div>
               <div className="card-actions">
                <a
                  href={item.pdf}
                  target="_blank"  // Open link in a new tab
                  rel="noopener noreferrer"  // Security best practice for external links
                  className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-slate-500 hover:text-white duration-200"
                >
                Read Book
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
