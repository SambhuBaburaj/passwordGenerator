import React from "react";

function ConfirmModal({ setDelete,DeletePass }) {
    
  
 

  return (
    <div className="modal fixed z-10 inset-0 overflow-y-auto  bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="modal-header px-4 py-3 flex items-center justify-between border-b border-gray-300">
            <h2 className="text-lg font-medium">Confirm Action</h2>
            <button
              onClick={()=>
            {
                setDelete(false)
            }}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.06 4.94a.75.75 0 0 0-1.06 0L12 10.94l-6.06-6.06a.75.75 0 0 0-1.06 1.06L10.94 12l-6.06 6.06a.75.75 0 0 0 1.06 1.06L12 13.06l6.06 6.06a.75.75 0 0 0 1.06-1.06L13.06 12l6.06-6.06a.75.75 0 0 0 0-1.12z" />
              </svg>
            </button>
          </div>
          <div className="modal-body px-4 py-3 border-b border-gray-300">
            <p className="text-gray-700">
              Are you sure you want to perform this action?
            </p>
          </div>
          <div className="modal-footer flex justify-end px-4 py-3">
            <button
              onClick={()=>
            {
                setDelete(false)
            }}
              className="btn bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={()=>DeletePass()}
              className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
