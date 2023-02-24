import { createStore } from 'vuex'

export default createStore({
  state: {
    arrayCiudades:[
      {
        nombre: 'Alemania',
        imagen: require('../assets/images/paris.jpg')
      },
      {
        nombre: 'Nueva York',
        imagen: require('../assets/images/alemania.jpg')
      },
      {
        nombre: 'Paris',
        imagen: require('../assets/images/nueva_york.jpg')
      }
    ],
    nombreCiu: '',
    rutaImg: '',
  },
  getters: {
  },
  mutations: {
    addCiudadVuex(state){
      state.arrayCiudades.push({nombre: state.nombreCiu, imagen: state.rutaImg})
      console.log(state.nombreCiu)
      console.log(state.rutaImg)
    }
  },
  actions: {
    accionAddCiudad(context){
      context.commit('addCiudadVuex')
    }
  },
  modules: {
  }
})
