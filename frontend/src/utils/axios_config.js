import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: "http://localhost:8000",
});

const axiosPermissionsRoles = (token) => {
  return axiosBase.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { 
    axios, 
    axiosPermissionsRoles 
};
