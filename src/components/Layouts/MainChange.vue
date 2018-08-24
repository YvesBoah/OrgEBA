<template>
    <div class="MainChange">
    

            <div class="login-box">
  <div class="login-logo">
    <router-link :to="{name:'MainLogin'}"><h1 id="buzz"><i class="fa fa-home"></i> <b>BUZZ EVENT </b></h1></router-link>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Réinitialiser votre mot de passe !</p>

    <form v-on:submit.prevent="Change">
     
      <div class="form-group has-feedback">
        <input type="email" v-model="MainChange.email" name="email" class="form-control" placeholder="Email" >
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" v-model="MainChange.password" name="password" class="form-control" placeholder="Password" >
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
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
  name: 'MainChange',
  data: function () {
    return {
        MainChange: {}
    }
  },
  methods: {
      Change(e){
          if (!this.MainChange.password || !this.MainChange.email) {
                this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
                  
          } else {
              let Change_moi = {
                  password : this.MainChange.password,
                  email : this.MainChange.email,
                  token : this.$route.params.params

              }

              this.$http.post(config.url+'user/password/reset',Change_moi)
              .then(function(response){
                  this.$swal({
                 title: '<i>Votre mot de passe à été mis à jour !</i>',
                        type: 'success',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Veuillez réessayer svp !</strong>  ' +
                           ' <strong><a href="/MainLogin"> Connectez vous  </a></strong> ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
               
                  this.$router.push({path: '/'});
                //  console.log(response)
              })
             

              .catch(error=> {
                // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                 title: '<i>Le changement de mot de passe à échouer !</i>',
                        type: 'warning',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Veuillez réessayer svp !</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
               
                //  console.log(response)
              })


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
 /* body{    */
/* background-image: url("_dev/buzz/ihm_org/dist/../../../static/image/buzz.jpg"); */
/* background-image: url("../../../static/image/buzz.jpg"); */
/* }  */
#buzz{
    color: white;
}
</style>
