import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DataTable = ({ data, passpop, setDelete, setPassId }) => {
  const copyPassword = (password) => {
    navigator.clipboard.writeText(password).then(() => {
      toast.success('password copied', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    });
  };

  return (
    <div className="container p-10 mx-auto mt-8">
      <button
        onClick={() => {
          passpop(true); 
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Password</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-2">{item.Name}</td>
              <td className="border p-2 relative">
                {item.Password}
                <button
                  onClick={() => {copyPassword(item.Password)
               
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Copy
                </button>
                <ToastContainer />
              </td>
              <td className="border p-2">
                {/* <button className="text-blue-500">Edit</button> */}
                <button
                  onClick={() => {
                    setPassId(item._id);
                    setDelete(true);
                  }}
                  className="text-red-500 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
