export const state = () => ({
  navbar: {
    MenuBar: false,
    SearchBar: false,
    CartBar: false,
    AccountBar: false
  },
  cart: {
    cart_count: 0
  }
})

export const mutations = {
  navbar_toggleMenuBar(state) {
    state.navbar.MenuBar = !state.navbar.MenuBar
  },
  navbar_toggleSearchBar(state) {
    state.navbar.SearchBar = !state.navbar.SearchBar
  },
  navbar_toggleCartBar(state) {
    state.navbar.CartBar = !state.navbar.CartBar
  },
  navbar_toggleAccountBar(state) {
    state.navbar.AccountBar = !state.navbar.AccountBar
  }
}
