import { defineStore } from 'pinia'

export const useMenu = defineStore('menu', {
  state: () => {
    return {
      name: "Página Principal",
      route: "/home",
      list: [
        {name: "Página Principal", icon: "❂", to: "/home"},
        {name: "Ajuda", icon: "✦", to: "/help"},
        {name: "Sair", icon: "«", to: "/logout"},
      ]
    }
  },
  actions: {
    changeRoute(obj) {
        this.name = obj.name
        this.route = obj.to
    },
  },
  getters: {
    getName(state){
        return state.name
    },
  },
})