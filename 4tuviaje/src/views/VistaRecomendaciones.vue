<template>
  <section>
    <router-link to="/"><img src="../assets/images/casa.png" id="casa" alt=""></router-link>
    <div id="prin">
    </div>
    <div id="portada">
      <div id="actividades">
        <h2>Actividades recomendadas</h2>
        <div id="imagenes">
          <img id="kayak" src="../assets/images/kayak.png" alt="">
          <img id="pescar" src="../assets/images/pez.png" alt="">
          <img id="camping" src="../assets/images/camping.png" alt="">
        </div>
      </div>
      <div>
        <div id="ciudades">
          <h2>Ciudades recomendadas</h2>
          <div id="imgciu" >
              <img v-for="ciudad in arrayCiudades" :key="ciudad.nombre" :src="ciudad.imagen">
              <p id="parrafo" v-for="parrafo in arrayCiudades" :key="parrafo.nombre">{{parrafo.nombre}}</p>
            <!-- <p>{{$}}</p> -->
            <!-- <img v-for="item in $store.state.arrayCiudades" :key="item" src="{{item}}"> -->
              <p></p>
          </div>
        </div>
      </div>
      <div id="crear">
        <div>
          <h2>Añadir una nueva ciudad</h2>
          <p>Crear un camping con tus amigos</p>
        </div>
        <router-link id="circulo" to="/agregar">
          <h1>+</h1>
        </router-link>
      </div>
    </div>
  </section>

  
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed:{
    ...mapState(['ciudadNueva','arrayCiudades'])
    }
}
</script>

<style lang="sass" scoped>
#casa
  position: absolute
  left: 80%
  top: 40px

#prin
  height: 40vh
  background: url('../assets/images/fondo_inicio.png')
  width: 100%

#portada
  position: absolute
  top: 230px
  height: 70vh
  width: 100%
  background: white
  border-radius: 34px
  #actividades
    position: relative
    top: 20px
    margin-left: 20px
    #imagenes
      margin-top: 15px
      display: flex
      justify-content: space-around
      img
        height: 15vh
        width: 15vh
        background: #000
        padding: 30px
        border-radius: 18px
      #kayak
        background: linear-gradient(138.06deg, #6B83DB 3.32%, #152767 103.08%)
      #pescar
        background: linear-gradient(137.61deg, #3CC0F1 2.65%, #1274B7 101.49%)
      #camping
        background: linear-gradient(135.94deg, #4DE3B9 0%, #0E2C3A 100%)
  #ciudades
    margin-left: 20px
    color: #26282E
    h2
      margin-top: 30px
  #imgciu
    overflow: auto
    white-space: nowrap
    div
      height: 10vh
      width: 10vh
    img
      width: 20vh
      height: 20vh
      border-radius: 18px
      margin: 10px
    #divparrafo
      margin-left: 40px
      display: flex
      width: auto
      justify-content: space-between

      
  #crear
    display: flex
    justify-content: space-around
    align-items: center
    margin-left: 10px
    margin-top: 30px
    background: #F6F7FB
    border-radius: 18px
    box-shadow: 1px 1px 1px
    height: 10vh
    width: 95%
    #circulo
      padding: 10px 17px
      background: #F59333
      border-radius: 100%
      color: white
      text-decoration: none

</style>