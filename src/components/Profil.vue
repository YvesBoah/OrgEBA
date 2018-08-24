<template>
    <div class="Profil">
       
        <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Mettre à Jour Mon Profil</h1>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="UpdateProfil">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Nom</label>

                  <div class="col-sm-10">
                    <input type="text" name="username" v-model="ProfilSubmit.username" class="form-control" placeholder="username" required>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">email</label>

                  <div class="col-sm-10">
                    <input type="email" v-model="ProfilSubmit.email" class="form-control" name="email"  placeholder="email" required>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Mot de passe</label>

                  <div class="col-sm-10">
                    <input type="password" name="password" v-model="ProfilSubmit.password" class="form-control"  placeholder="Mot de passe" required>
                  </div>
                </div>


                <div class="form-group">
                <label class="col-sm-2 ">Telephone</label>
                <div class="col-sm-10">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <input type="tel" name="tel" class="form-control" v-model="ProfilSubmit.tel" data-inputmask='"mask": "99999999"' data-mask required>
                </div>
                </div>
                <!-- /.input group -->
              </div>

            
               

              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Mettre à Jour</button>
              </div>
              <!-- /.box-footer -->
            </form>
              </div>
          </div>
      </div>
   
    </div>
    <router-view/>

    </div>
</template>


<script>
import currentUser from '@/services/currentUser';
import Token from '@/services/Token';
import config from '@/services/config';
export default {
  name: 'Profil',
  data: function (){
    return {
        ProfilSubmit: {},
        InfosUser: {
          username:'',
          id:0,
          email:'',
          tel:'',
          password: ''
          },
          username: JSON.parse(currentUser.getUser()).username,
          prenoms: JSON.parse(currentUser.getUser()).prenoms,
          tel: JSON.parse(currentUser.getUser()).tel
    }
  },
  methods: {
      UpdateProfil(e){
          if (1==2) {
             this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
          } else {
              let mise_a_jour_Profil = {
                  username : this.ProfilSubmit.username,
                  email : this.ProfilSubmit.email,
                  tel : this.ProfilSubmit.tel,
                  password : this.ProfilSubmit.password      
              }

              this.$http.post(config.url+'user/update',mise_a_jour_Profil,{headers: Token.getHeader()})
              .then(function(response){
                // this.$swal('Success','<b>La mise à jour du profi à bien fait .</b>', 'OK');
                 this.$swal({
                        title: '<i>Félicitation</i>',
                        type: 'success',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>La mise à jour du profi à bien fait !</strong>  ' +
                          ' <strong>Reconnecter vous pour que les modifications prennent effets .</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
                  // this.$router.push({path: '/'});
            
                  // console.log(response)
              })
              .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>La mise à jour du profil à échouée</i>',
                        type: 'warning',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Veuilez réessayer svp .</strong>  ' +
                          ' <strong>Reconnecter vous pour que les modifications prennent effets .</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
              })
              
              // console.log('envoie reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      },
     
  },
   created: function() {
              this.ProfilSubmit.username= JSON.parse(currentUser.getUser()).username,
              this.ProfilSubmit.email= JSON.parse(currentUser.getUser()).email,
              this.ProfilSubmit.tel= JSON.parse(currentUser.getUser()).tel,
              this.ProfilSubmit.password= JSON.parse(currentUser.getUser()).password
        
      },
}
</script>