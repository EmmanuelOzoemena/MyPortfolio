import axios from "axios";

export const createProject = async (
  title,
  category,
  description,
  tech,
  image,
  link,
  github,
  isBig,
) => {
  try {
    const res = await axios.post(
      "https://api-ozo-portfolio.onrender.com/api/projects",
      {
        title,
        category,
        description,
        tech,
        image,
        link,
        github,
        isBig,
      },
    );

    return res;
  } catch (error) {
    console.error("ERROR", error);
    return error?.response;
  }
};

export const getProjects = async () => {
  try {
    const res = await axios.get(
      "https://api-ozo-portfolio.onrender.com/api/projects",
    );

    return res;
  } catch (error) {
    console.error("ERROR", error);
    return error?.response;
  }
};
