<template>
 <div class="test">
    <div class="ui container">
         <router-link :to="{name:'HelloWorld'}" class="active item">
          Acceuil
        </router-link>
        <router-link :to="{name:'pageA'}"  class="item">
          PageA
        </router-link>
        <router-link :to="{name:'pageB'}"  class="item">
          PageB
        </router-link>
        <router-link :to="{name:'pageC',params: {id:1} }"  class="item">
          PageC
        </router-link>
        <router-link :to="{name:'pageD'}"  class="item">
          PageD
        </router-link>
         <router-link :to="{name:'pageE'}"  class="item">
          PageE
        </router-link>
      </div>


      
    <div class="sidebar">
      <br>
    <h1>sidebar</h1>
      <router-view name="sidebar"/>
    </div>

    <div class="main">
    <h1>Main</h1>
      <transition name="page" mode='out-in'>
      <router-view name="main"/>
      </transition>
    </div>
 </div>






 
</template>
