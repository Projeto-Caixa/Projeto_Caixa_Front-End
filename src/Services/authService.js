import Api from "./api";
import swal from "sweetalert";

export const loginService = {
  Login: async (values) => {
    try {
      const res = await Api.post("/auth", values);
      return res;
    } catch (error) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};

export const RegisterService = {
  Register: async (values) => {
    try {
      const res = await Api.post("/user", values);
      return res;
    } catch (error) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
