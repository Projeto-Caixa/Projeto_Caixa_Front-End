import Api from "./api";
import swal from "sweetalert";

export const ReportService = {
  Get: async () => {
    try {
      const res = await Api.get("/venda");
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
