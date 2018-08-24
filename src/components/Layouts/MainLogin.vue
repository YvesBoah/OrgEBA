<template>
    <div class="MainLogin">      

            <div class="login-box">
  <div class="login-logo">
<router-link :to="{name:'MainLogin'}"><h1 id="buzz"><i class="fa fa-home"></i> <b>BUZZ EVENT </b></h1></router-link>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Se Connecter</p>

    <form v-on:submit.prevent="Login">
      <div class="form-group has-feedback">
        <input type="email" v-model="MainLogin.email" name="email" class="form-control" placeholder="Email" >
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" v-model="MainLogin.password" name="password" class="form-control" placeholder="Password" >
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
     
    <div class="social-auth-links text-center">
      <button type="submit" class="btn btn-block text-center  btn-facebook btn-flat"> Me Connecter</button>
    </div>
  
    </form>

<router-link :to="{name:'MainRappel'}"><i class="fa fa-circle-o"></i> Mot de passe oublié </router-link>


  

  </div>
  <!-- /.login-box-body -->
</div>

<!-- <div class="col-xs-12 col-lg-6 col-lg-push-3" id="descent">
    <div class="well well-sm">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.0.0
          </div>
          <strong>Copyright &copy; 2018-2019 <a href="">Invovation Foundation</a>.</strong> All rights reserved.
    </div>
  
</div> -->
    </div>
</template>

<script>
import Alert from '@/components/Alert';
import currentUser from '@/services/currentUser';
import config from '@/services/config';

export default {
  name: 'MainLogin',
  data: function () {
    return {
        MainLogin: {},
        Alert: '',
        DisplayAlert:false
    }
  },
  //   Réprésente le middleware
   beforeRouteEnter (to, from, next) { 
    //  console.log(currentUser.getToken());
     if (currentUser.getToken()== null) {
      next(true)
    } else {
      // this.$router.push({name: "MainLoginTest"})
      // next(false)
      next({
            name: 'HelloWorld'
        })
    }
  },
  methods: {
      Login(e){
          if (!this.MainLogin.password  || !this.MainLogin.email) {
              this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
              // console.log('veuillez remplir les champs svp');
               this.DisplayAlert=true;
                  // this.message='Mot de Passe Ou Nom D\'utilisateur Erroné';
          } else {
              let Connecte_moi = {
                  email : this.MainLogin.email,
                  password : this.MainLogin.password
              }

              this.$http.post(config.url+'user/login',Connecte_moi)
              .then(function(response){
                // console.log(response.data.user.username)
                const token = response.body.token
                const user = JSON.stringify(response.body.user) //
               localStorage.setItem('token', token)
               localStorage.setItem('user', user)
                this.$router.push({name: "HelloWorld"})
                console.log(response)
                console.log(response.body.user.username);
                
               
              })
              .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>La connection à échoué !</i>',
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
  
  components: {
    Alert
  },
  created: function () {
    
    if (this.$route.query.Alert) {
      this.Alert = this.$route.query.Alert;
    }
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
