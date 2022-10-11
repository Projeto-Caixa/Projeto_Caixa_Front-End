import Api from "./api";
import swal from "sweetalert";

export const UserService = {
  Get: async (id) => {
    try {
      const res = await Api.get(`/products/${id}`);
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
