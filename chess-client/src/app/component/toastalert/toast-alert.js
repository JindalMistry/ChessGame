import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast-alert.css";

export const toastAlert = (Message, type, position) => {
  let alertPosition = position;
  let alertType = type;
  if (!type) alertType = "SUCCESS";
  if (!position) alertPosition = "bottom-center";

  if (alertType === "SUCCESS") {
    toast.success(Message, {
      position: alertPosition,
      className: "toast-message",
    });
  } else if (alertType === "WARN") {
    console.log("Reaced to warn");
    toast.warn(Message, {
      position: alertPosition,
      className: "toast-message",
    });
  } else if (alertType === "ERROR") {
    toast.error(Message, {
      position: alertPosition,
      className: "toast-message",
    });
  }
};
