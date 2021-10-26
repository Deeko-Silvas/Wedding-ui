import { getGuestReq } from "../../api/axios";
import router from "@/router";

export default async function({ commit, state }, query) {
  try {
    const routeQuery = router.history.current.params?.query;

    if (routeQuery !== query) {
      router.push({ name: "result", params: { query: query } });
    }

    const { data } = await getGuestReq(query);

    commit("update-guests", data.data);
  } catch (err) {
    commit("update-error", err.response);

    router.push({ name: "no-result" });
  }
}
