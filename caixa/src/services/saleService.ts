import Api from "./api";
import swal from "sweetalert";

export const saleService = {
  Post: async (obj: any) => {
    try {
      const res = await Api.post("/venda", obj);
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
