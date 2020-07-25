export default (context, inject) => {
  const getTrackers = function () {
    const trackers = {
      sid: this.$cookies.get('sid'),
      gacid: this.$cookies.get('gacid'),
      mid: this.$cookies.get('mid'),
      eid: this.$cookies.get('eid'),
      uid: this.$cookies.get('uid'),
    }
    return trackers
  }
  const setTrackers = function (trackers) {
    if (trackers.sid.length > 1) {
      this.$cookies.set('sid', trackers.sid, {
        expires: 999,
      })
    }
    if (trackers.gacid.length > 1) {
      this.$cookies.set('gacid', trackers.gacid, {
        expires: 999,
      })
    }
    if (trackers.mid.length > 1) {
      this.$cookies.set('mid', trackers.mid, {
        expires: 999,
      })
    }
    if (trackers.eid.length > 1) {
      this.$cookies.set('eid', trackers.eid, {
        expires: 999,
      })
    }
    if (trackers.uid.length > 1) {
      this.$cookies.set('uid', trackers.uid, {
        expires: 999,
      })
    }
  }
  const setDefaults = function (data) {
    this.$store.commit('updateCartCount', data.default.cart_count)
  }

  // Inject $hello(msg) in Vue, context and store.
  inject('get_trackers', getTrackers)
  inject('set_trackers', setTrackers)
  inject('set_default', setDefaults)
}
