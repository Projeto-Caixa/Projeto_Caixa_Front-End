import Api from "./api";
import swal from "sweetalert";

export const ProductsService = {
  Get: async () => {
    try {
      const res = await Api.get("/products");
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

export const SaleService = {
  Sale: async (idVend, list) => {
    try {
      const res = await Api.post("/venda", idVend, list);
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
