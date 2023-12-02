import Api from "./Api";
import swal from "sweetalert";
import { Product } from "../types/interfaces";

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
  Add: async (data: Product) => {
    try {
      const res = await Api.post("/products", data);
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
  Remove: async (id: string) => {
    try {
      const res = await Api.delete(`/products/${id}`);
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
