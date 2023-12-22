import { useContext } from "react";
import background from "../../assets/background.jpg";
import { ActionContext } from "../context/ActionContext";
import { setIsModal } from "../actions/Actions";
const Modal = () => {
  const { state, dispatch } = useContext(ActionContext);
  const openModal = state.isModal;
  if (!openModal) return null;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000] opacity-50 z-50 " />
      <div className="flex flex-col lg:flex-row w-10/12 text-black lg:w-8/12 mx-auto shadow-lg overflow-hidden fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-lg transition-all duration-300">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="w-full lg:w-1/2 py-16 px-12">
          <h2 className="text-3xl mb-4 text-black font-bold">Register</h2>
          <form action="#">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="first name"
                className="border border-gray-400 py-1 px-2"
              />
              <input
                type="text"
                placeholder="last name"
                className="border border-gray-400 py-1 px-2"
              />
            </div>
            <div className="grid grid-cols-2 mt-5">
              <div className="w-1/2 ">
                <h4 className="inline-block text-lg ">gender : </h4>
              </div>
              <div className="flex">
                <label className="mx-2">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  className="cursor-pointer"
                />
                <label className="mx-2">female</label>
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="email"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="phone"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-1 mt-5">
              <div className="flex">
                <label className="mr-2 text-lg">Age:</label>
                <input
                  type="date"
                  className="border border-gray-400 py-1 px-2 "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="cin"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5">
              <button
                type="submit"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Register
              </button>
              <button
                onClick={() => dispatch(setIsModal(false))}
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
