<template>
  <section>
    <router-link to="/recomendaciones"><img src="../assets/images/flecha.png" id="flecha" alt=""></router-link>
    <router-link to="/"><img src="../assets/images/casa.png" id="casa" alt=""></router-link>
    <div id="prin">
    </div>
    <div id="portada">
      <div id="ciudades">
        <h2>Nueva ciudad</h2>
        <input type="text" placeholder="Ruta de la imagen" v-model="$store.state.rutaImg">
        <input type="text" placeholder="Nombre de la ciudad" v-model="$store.state.nombreCiu">
        <button @click="addCiudad">Insertar</button>
      </div>
    </div>
  </section>

  
</template>

<script>
export default {
  name: 'VistaAgregar',
  methods:{
    addCiudad(){
      this.$store.dispatch('accionAddCiudad')
    }
  }
}
</script>

<style lang="sass" scoped>
#flecha,#casa
  position: absolute
  left: 8.33%
  right: 12.5%
  top: 50px
#casa
  left: 80%
  top: 40px
#prin
  height: 40vh
  background: url('../assets/images/fondo_portada.png')
  width: 100%

#portada
  position: absolute
  top: 230px
  height: 50vh
  width: 100%
  background: white
  border-radius: 34px
  #ciudades
    display: flex
    flex-direction: column
    width: 90%
    align-items: center
    justify-content: space-around
    margin-left: 20px
    color: #26282E
    height: 60vh
    input
      width: 250px
      padding: 20px
      text-align: center
      border-radius: 10px
      border: 1px solid
    button
        background: linear-gradient(272.79deg, #EC8438 7.57%, #FB9D30 86.37%)
        border-radius: 13.0712px
        padding: 10px 60px
        color: white
        border: none
</style>