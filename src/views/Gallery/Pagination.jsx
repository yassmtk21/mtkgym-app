const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const array_pagi = [];
  for (let i = 1; i <= pages; i++) {
    array_pagi.push(i);
  }
  return (
    <div className="flex flex-wrap justify-center items-center text-center gap-2 flex-1 mt-4 w-full">
      <div className="flex gap-2 border-2 px-4 py-1 rounded-s-full rounded-e-full ">
        {array_pagi.map((e, index) => (
          <div
            key={index}
            onClick={() => setCurrentPage(e)}
            className={`w-[30px] h-[30px] font-bold flex justify-center items-center hover:bg-[#BEBEBE] duration-300 cursor-pointer  ${
              currentPage === e
                ? "bg-[#BEBEBE] scale-105 text-black"
                : "bg-white text-black"
            } rounded-full`}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
