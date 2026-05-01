import axios from "axios";

const API_URL = "https://api-ozo-portfolio.onrender.com/api";

export const createProject = async (projectData) => {
  const data = new FormData();

  // Automatically loop through your object and append to FormData
  Object.keys(projectData).forEach((key) => {
    data.append(key, projectData[key]);
  });

  return await axios.post(`${API_URL}/projects`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getProjects = async () => {
  try {
    const res = await axios.get(`${API_URL}/projects`);

    return res;
  } catch (error) {
    console.error("ERROR", error);
    return error?.response;
  }
};
