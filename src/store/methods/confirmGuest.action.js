import { confirmGuestReq } from "../../api/axios";
import router from "@/router";

export default async function({ commit, state }, confirmation) {
  try {
    const changes = confirmation.map(guest => {
      return JSON.parse(JSON.stringify(guest));
    });

    changes.forEach(change => {
      delete change._id;
    });

    const confirmedGuestDetails = [];
    for (let i = 0; i < confirmation.length; i++) {
      const { data } = await confirmGuestReq(confirmation[i]._id, changes[i]);
      confirmedGuestDetails.push(data.data);
    }

    commit("update-guests", confirmedGuestDetails);
    router.push({ name: "complete" });
  } catch (err) {
    commit("update-submit-error", err);
  }
}
