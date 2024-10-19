const Modal = ({ showModal, currentRewardDescription, handleCloseModal }) => {
  return (
    <>
      {showModal && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div className="relative transform overflow-hidden rounded-lg  bg-zinc-900 text-left shadow-2xl transition-all sm:w-full sm:max-w-md">
              <div className=" bg-zinc-900 px-6 py-4 sm:py-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-4 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-2xl font-bold leading-6 text-zinc-300 "
                      id="modal-title"
                    >
                      Level Unlocked!
                    </h3>
                    <div className="mt-5">
                      <p className="text-lg text-zinc-300 ">
                        {currentRewardDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-zinc-900 px-6 py-3 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="mt-2 w-full inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 "
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
