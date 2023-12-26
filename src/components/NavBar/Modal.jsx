import React, { useContext, useEffect, useReducer } from "react";
import background from "../../assets/background.jpg";
import { ActionContext } from "../context/ActionContext";
import { setIsModal } from "../actions/Actions";
import { initstate, ActionReducerForm } from "./ActionReducerForm";

const Modal = () => {
  const [stateForm, dispatchForm] = useReducer(ActionReducerForm, initstate);
  const { state, dispatch } = useContext(ActionContext);

  const openModal = state.isModal;

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatchForm({ type: "input", field: name, payload: value });
  };

  useEffect(() => {
    if (stateForm.hasErrors) {
      dispatchForm({ type: "SET_LOADING", payload: true });
      setTimeout(() => {
        dispatchForm({ type: "SET_LOADING", payload: false });
        console.log(stateForm);
      }, 2000);
    }
  }, [stateForm.hasErrors]);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchForm({ type: "validate" });
  };

  const handleExit = () => {
    dispatchForm({ type: "reset" });
    dispatch(setIsModal(false));
  };

  return openModal ? (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000] opacity-50 z-50 "></div>
      {stateForm.loading && (
        <p className="fixed top-4 left-[50%] translate-x-[-50%] bg-green-600 text-white font-bold z-[99999999] px-4 py-2">
          register succesfuly
        </p>
      )}
      <div className="flex flex-col lg:flex-row w-[90%] sm:w-[70%] text-black mx-auto shadow-lg overflow-hidden fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-lg">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="w-full lg:w-1/2 py-16 px-12">
          <h2 className="text-3xl mb-4 text-black font-bold">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  onChange={handleChange}
                  type="text"
                  name="first_name"
                  value={stateForm.first_name}
                  placeholder="first name"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
                {stateForm.errors && stateForm.errors.first_name && (
                  <p className="text-red-500">{stateForm.errors.first_name}</p>
                )}
              </div>

              <div>
                <input
                  onChange={handleChange}
                  type="text"
                  name="last_name"
                  value={stateForm.last_name}
                  placeholder="last name"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
                {stateForm.errors && stateForm.errors.last_name && (
                  <p className="text-red-500">{stateForm.errors.last_name}</p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 mt-5">
              <div className="w-1/2 ">
                <h4 className="inline-block text-medium ">Gender : </h4>
              </div>
              <div className="">
                <label className="mx-2">Male</label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  value={"male"}
                  className="cursor-pointer"
                />
                <label className="mx-2">female</label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  value={"female"}
                  className="cursor-pointer"
                />
                {stateForm.errors && stateForm.errors.gender && (
                  <p className="text-red-500">{stateForm.errors.gender}</p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={stateForm.email}
                placeholder="email"
                className="border border-gray-400 py-1 px-2 w-full"
              />
              {stateForm.errors && stateForm.errors.email && (
                <p className="text-red-500">{stateForm.errors.email}</p>
              )}
            </div>
            <div className="mt-5">
              <input
                onChange={handleChange}
                type="text"
                name="phone"
                value={stateForm.phone}
                placeholder="phone"
                className="border border-gray-400 py-1 px-2 w-full"
              />
              {stateForm.errors && stateForm.errors.phone && (
                <p className="text-red-500">{stateForm.errors.phone}</p>
              )}
            </div>
            <div className=" mt-5 w-full">
              <div className="w-full flex">
                <label className="mr-2 text-lg">Age:</label>
                <input
                  onChange={handleChange}
                  type="date"
                  name="age"
                  value={stateForm.age}
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              {stateForm.errors && stateForm.errors.age && (
                <p className="text-red-500">{stateForm.errors.age}</p>
              )}
              <div className="sm:full mt-5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="cin"
                  value={stateForm.cin}
                  placeholder="cin"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
                {stateForm.errors && stateForm.errors.cin && (
                  <p className="text-red-500">{stateForm.errors.cin}</p>
                )}
                <br />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5">
              <input
                type="submit"
                value={"register"}
                className="w-fulltext-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-2 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              />

              <button
                onClick={handleExit}
                type="button"
                className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:px-5 px-2 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
