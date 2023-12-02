import swal from "sweetalert";
import { Auth } from "../types/interfaces";
import Api from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthService = {
  Login: async (values: Auth) => {
    try {
      const res = await Api.post("/auth", values);
      return res;
    } catch (error: any) {
      console.log(error.response.data.statusCode);
      if (error.response.data.statusCode == 401) {
        toast.error(`${error.response.data.message}`);
        // swal({
        //   title: "Error",
        //   text: `${error.response.data.message}`,
        //   icon: "error",
        //   timer: 6000,
        // });
      } else
        swal({
          title: "Error",
          text: `${error.message}`,
          icon: "error",
          timer: 6000,
        });
    }
  },
};
