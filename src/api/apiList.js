import api from "./api";
export const getDome = async (code) => {
  const data = await api.get("", {
    code: code,
  });
  return data;
};
export const postDome = async (Mobile) => {
  const data = await api.post("", {
    Mobile: Mobile,
    CName: companyName,
  });
  return data;
};