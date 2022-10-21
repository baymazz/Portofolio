import { defineStore } from "pinia";

export const useMsgStore = defineStore("message", {
  state: () => {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  actions: {
    show() {
      console.log(
        "Kamu menerima pesan dari " +
          this.name +
          " (" +
          this.email +
          ") \ndengan nomor telpon '" +
          this.phone +
          "' : \n" +
          this.message
      );
    },
  },
});