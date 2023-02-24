<template>
  <div id="prin">
    <div id="div">
      <div id="contenido">
        <h1>La aplicacion para viajar</h1>
        <p>¡Conéctese con la gente y planifique su próxima escapada para explorar este hermoso mundo!</p>
        <router-link to="/recomendaciones" id="link"><h3>Empieza tu viaje</h3></router-link>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'VistaInicio',
}
</script>

<style lang="sass" scoped>

#prin
  height: 100vh
  background: url('../assets/images/fondo_portada.png')
  background-size: cover
  #div
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-end
    #contenido
      height: 40vh
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: center
      p
        text-align: center
        width: 70%
      #link
        display: flex
        justify-content: center
        text-align: center
        align-items: center
        margin-bottom: 50px
        width: 360px
        height: 49.8px
        background: linear-gradient(272.79deg, #EC8438 7.57%, #FB9D30 86.37%)
        border-radius: 13.0712px
        text-decoration: none
        color: white

      
</style>