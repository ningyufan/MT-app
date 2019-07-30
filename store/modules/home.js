const state = () = ({
    menu: [],
    hotPlace: []
})

const mutations = {
    setMenu(state, val) {
        state.menu = val
    },
    setHotPlace(state, val) {
        state.hotPlace = val
    }
}

const actions = {
    setMenu: ({
        commit
    }, menu) => {
        commit('setMenue',menue)
    },
    setHotPlace: ({
        commit
    }, hotPlace) => {
        commit('setHotPlace',hotPlace)
    }
}

export default {namespaced: true, state, mutations, actions}