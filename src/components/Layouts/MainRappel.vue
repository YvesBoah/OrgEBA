<template>
    <div class="MainRappel">
    

            <div class="login-box">
  <div class="login-logo">
    <router-link :to="{name:'MainLogin'}"><h1 id="buzz"><i class="fa fa-home"></i> <b>BUZZ EVENT </b></h1></router-link>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Entrer Votre Mail</p>

    <form v-on:submit.prevent="Rappel">
      <div class="form-group has-feedback">
        <input type="email" v-model="MainRappel.email" name="email" class="form-control" placeholder="Email" >
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
     
    <div class="social-auth-links text-center">
      <button type="submit" class="btn btn-block text-center  btn-facebook btn-flat"> Envoyer </button>
    </div>
  
    </form>
  

  </div>
  <!-- /.login-box-body -->
</div>

<div class="col-xs-12 col-lg-6 col-lg-push-3" id="descent">
    <div class="well well-sm">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.0.0
          </div>
          <strong>Copyright &copy; 2018-2019 <a href="">Invovation Foundation</a>.</strong> All rights reserved.
    </div>
  
</div>
    </div>
</template>

<script>
import config from '@/services/config';

export default {
  name: 'MainRappel',
  data: function () {
    return {
        MainRappel: {}
    }
  },
  methods: {
      Rappel(e){
          if (!this.MainRappel.email) {
                this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
          } else {
              let Rappel_moi = {
                  email : this.MainRappel.email
              }

              this.$http.post(config.url+'user/password/email',Rappel_moi)

              .then(function(response){
          
                 this.$swal({
                        title: '<i>envoie de mail Réussie !</i>',
                        type: 'success',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Suivez les étapes svp !</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
                  
              })

              .catch(error=> {
              

               this.$swal({
                        title: '<i>L\'envoie de mail à échoué !</i>',
                        type: 'warning',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Veuillez réessayer svp !</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
              })


                // this.$router.push({path: '/'});
                  // console.log(response);
              
        
              e.preventDefault();
          }
          e.preventDefault();
          
      }
  },
  created: function () {
    
  }
}
</script>

<style>
 /* body{   
background-image: url("../../../static/image/buzz.jpg");
}  */
#buzz{
    color: white;
}
</style>
