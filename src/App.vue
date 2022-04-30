<template>
 
    
    <nav>
    
      <router-link to="/">Home</router-link> | 
       <router-link to="/servicios">Servicios</router-link> | 
         <router-link to="/clasificados">Clasificados</router-link>| 
      <router-link to="/contacto">Contacto</router-link>
    </nav>

 <div>   
    <main>
      <router-view />
    </main>
  
    
  
</template>

<script>

export default {

}
</script>

<style>

#nav {
  width: 70vw;
  color: white;
  display: flex;
  align-items: center;
}


</style>


