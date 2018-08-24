<template>
    <div class="Alert">
          
        <div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
   <p class="text-center"><strong> Vous êtes Connecter !</strong></p>
    
</div>

    </div>
</template>

<script>

export default {
  name: 'Alert',

  props: ['message'],
  data: function (){
    return {
      
    }
  }
  }
</script>