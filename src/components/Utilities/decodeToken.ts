import jwtDecode from "jsonwebtoken";

export const decodeToken = (token: string) => {
  try {
    return jwtDecode.decode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
