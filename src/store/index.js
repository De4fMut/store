import { createStore } from "vuex";
import analytics from "./modules/analytics";

export default createStore({
  modules: {
    analytics,
  },
});
