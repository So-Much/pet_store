import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import {axios, axiosPermissionsRoles} from "./../../utils/axios_config";
import Selectec_ from "../../components/Selectec_";
import { toast } from "react-toastify";
const formatVND = require("../../utils/VND_formatter");

export default function User() {
  const [showModal, setShowModal] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [currentSelectedUser, setCurrentSelectedUser] = useState({});
  const [modalData, setModalData] = useState({});
  const [reRender, setReRender] = useState(false);
  const [avatarReview, setAvatarReview] = useState();
  const avatarInputRef = useRef();
  const navigate = useNavigate();


  const handleAvatarReview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarReview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModalInputChange = (e) => {
    console.log(
      "e.target.name: ",
      e.target.name,
      "e.target.value: ",
      e.target.value
    );
    setModalData((prev) => {
      if (e.target.name)
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
    });
  };

  const handleChange = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    // console.log("modalData: ", modalData);
    // check xem người dùng có thay đổi gì không?
    if (Object.keys(modalData).length === 0) {
      return;
    }
    // gửi request lên server
    axiosPermissionsRoles(token)
      .put("/api/user/" + currentSelectedUser._id, {
        ...modalData,
      })
      .then(() => {
        console.log("Update user successfully");
      })
      .catch((err) => {
        // toast.error("Error updating user");
        console.log("Error updating user", err.response.data.message);
      });
  };

  // const handleUploadAvatar = () => {
  //   if (avatarReview) {
  //     const formData = new FormData();
  //     formData.append("avatar", avatarInputRef.current.files[0]);
  //     console.log("avatar", avatarInputRef.current.files[0]);
  //     console.log("formData: ", formData);

  //     axios
  //       .postForm("/api/user/upload" + currentSelectedUser._id, avatarInputRef.current.files[0])
  //       .then((res) => console.log(res))
  //       .then((err) => console.log(err));
  //     // .post("/api/user/update/" + currentSelectedUser._id, formData, {
  //     //   headers: {
  //     //     "Content-Type": "multipart/form-data",
  //     //   }
  //     // })
  //     // .then(() => {
  //     //   console.log("Update avatar successfully");
  //     // })
  //     // .catch((err) => {
  //     //   console.log("Error updating avatar", err.response.data.message);
  //     // });
  //   }
  // };

  const handleDelete = (e) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    axiosPermissionsRoles(token)
      .delete("/api/user/" + currentSelectedUser._id)
      .then((res) => {
        console.log(res.data);
        toast.success("Delete user successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error deleting user");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }
    axiosPermissionsRoles(token)
      .get("/api/user")
      .then((res) => {
        setListUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reRender]);
  return (
    <div className="madmin_sidebar">
      <Sidebar />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 p-4">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              User members
            </h3>
            <p className="text-gray-600 mt-2">
              Table contain all the user members and their details.
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-500 active:bg-indigo-700">
              <svg
                fill="currentColor"
                className="size-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />

                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="12"
                        x2="12"
                        y1="19"
                        y2="5"
                      />
                      <line
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Add User
            </button>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Role</th>
                <th className="py-3 px-6">Total Spending</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {listUsers.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img src={item.avatar} className="w-10 h-10 rounded-full" />
                    <div>
                      <span className="block text-gray-700 text-sm font-medium">
                        {item.username}
                      </span>
                      <span className="block text-gray-700 text-xs">
                        {item.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.phoneNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatVND(item.spending)}
                  </td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <>
                      <button
                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                        onClick={() => {
                          setShowModal(true);
                          setCurrentSelectedUser(item);
                        }}
                      >
                        Edit
                      </button>
                      {showModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-w-[410px]">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    Edit User Profile
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                  ></button>
                                </div>
                                {/*body*/}
                                <div className="p-6 flex gap-4 flex-col">
                                  <div className="m-2 p-2 flex items-center justify-center flex-col relative">
                                    <img
                                      src={
                                        avatarReview
                                          ? avatarReview
                                          : currentSelectedUser.avatar
                                      }
                                      alt=""
                                      className="size-28 rounded-full"
                                    />
                                    <label
                                      className="size-20 absolute hover:cursor-pointer"
                                      htmlFor="avatar"
                                    >
                                      <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-15 rounded-full">
                                        <svg
                                          className="size-5"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.5"
                                            d="M10 14H12M12 14H14M12 14V16M12 14V12"
                                            stroke="#1C274C"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                                            stroke="#1C274C"
                                            stroke-width="1.5"
                                          />
                                        </svg>
                                      </div>
                                      <input
                                        accept="image/*"
                                        id="avatar"
                                        type="file"
                                        ref={avatarInputRef}
                                        name="avatar"
                                        className="hidden"
                                        onChange={(e) => {
                                          handleAvatarReview(e);
                                        }}
                                      />
                                    </label>
                                  </div>
                                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                    <input
                                      type="email"
                                      name="email"
                                      defaultValue={currentSelectedUser.email}
                                      value={modalData.email}
                                      onChange={handleModalInputChange}
                                      className="peer w-full h-full py-2.5 px-1.5 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base"
                                      placeholder="Email address"
                                    />
                                    <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0">
                                      Email address
                                    </span>
                                  </label>
                                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                    <input
                                      type="text"
                                      name="username"
                                      defaultValue={
                                        currentSelectedUser.username
                                      }
                                      value={modalData.username}
                                      onChange={handleModalInputChange}
                                      className="peer w-full h-full py-2.5 px-1.5 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base"
                                      placeholder="Username"
                                    />
                                    <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0">
                                      Username
                                    </span>
                                  </label>
                                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                    <input
                                      type="text"
                                      name="phoneNumber"
                                      defaultValue={
                                        currentSelectedUser.phoneNumber
                                      }
                                      value={modalData.phoneNumber}
                                      onChange={handleModalInputChange}
                                      className="peer w-full h-full py-2.5 px-1.5 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base"
                                      placeholder="Phone number"
                                    />
                                    <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0">
                                      Phone number
                                    </span>
                                  </label>
                                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                                    <input
                                      type="number"
                                      defaultValue={
                                        currentSelectedUser.spending
                                      }
                                      value={modalData.spending}
                                      onChange={handleModalInputChange}
                                      name="spending"
                                      className="peer w-full h-full py-2.5 px-1.5 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base"
                                      placeholder="Spending"
                                    />
                                    <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-0">
                                      Spending
                                    </span>
                                    <span className="absolute end-0 top-1/2 -translate-y-1/2 pr-8 opacity-50">
                                      vnd
                                    </span>
                                  </label>
                                  <div>
                                    <Selectec_
                                      name={"role"}
                                      values={[
                                        "Customer",
                                        "Staff",
                                        "Manager",
                                        "Admin",
                                      ]}
                                      currentValue={currentSelectedUser.role}
                                      handleValueChange={handleModalInputChange}
                                      customStyles={["w-full"]}
                                    />
                                  </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      setModalData({});
                                      setReRender(!reRender);
                                      setShowModal(false);
                                      setAvatarReview(null);
                                    }}
                                  >
                                    Close
                                  </button>
                                  <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      handleChange();
                                      // handleUploadAvatar();
                                      setModalData({});
                                      setReRender(!reRender);
                                      setShowModal(false);
                                      setAvatarReview(null);
                                    }}
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                    </>
                    <button
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      onClick={() => {
                        setCurrentSelectedUser(item);
                        document.getElementById("my_modal_2").showModal();
                      }}
                    >
                      Delete
                    </button>
                    {/* main content modal */}
                    <dialog id="my_modal_2" className="modal rounded-lg p-2">
                      <div className="w-full h-full p-5">
                        <h3 className="font-bold text-lg text-start">
                          Delete User
                        </h3>
                        <p className="py-4 text-lg">
                          Do you want to delete this user?
                        </p>
                      </div>
                      <form
                        method="dialog"
                        className="modal-backdrop p-2 flex gap-1.5 items-end justify-end"
                      >
                        <button
                          onClick={() => {
                            setCurrentSelectedUser({});
                          }}
                          className="text-base bg-slate-200 hover:bg-slate-300 p-2 rounded-md px-3"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            handleDelete();
                            setReRender(!reRender);
                            setCurrentSelectedUser({});
                          }}
                          className="text-base bg-red-500 hover:bg-red-600 p-2 rounded-md px-3"
                        >
                          Delete
                        </button>
                      </form>
                    </dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
