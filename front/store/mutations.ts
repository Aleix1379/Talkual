import {StoreState} from "~/types/StoreState";

export default {
  openLoginModal(state: StoreState) {
    state.showLoginModal = true
  },
  closeLoginModal(state: StoreState) {
    state.showLoginModal = false
  }
}
