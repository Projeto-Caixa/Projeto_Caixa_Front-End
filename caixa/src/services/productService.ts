import Api from "./api";
import swal from "sweetalert";

export const ProductsService = {
  Get: async () => {
    try {
      const res = await Api.get("/products");
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
