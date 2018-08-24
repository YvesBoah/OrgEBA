<template>
    <div class="Eventhot">
 <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de création d'évènement </h1>
              <div class="col-xs-12 col-lg-10 ">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="addEvent">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Libellé</label>

                  <div class="col-sm-10">
                    <input type="text" name="libelle" v-model="Eventhot.libelle" class="form-control" placeholder="Libellé">
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label">Description</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control"  v-model="Eventhot.description" name="description" placeholder="Description">
                  </div>
                </div>

                
                <!-- <div class="form-group">
                  <label class="col-sm-2 control-label">Image DE Description</label>

                  <div class="col-sm-10">
                    <input type="file" class="form-control"  name="file_id">
                  </div>
                </div> -->


                <div class="form-group">
                  <label class="col-sm-2 control-label">Lieu de l'évènement </label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="Eventhot.lieu"  name="lieu"  placeholder="Lieu de l'évènement">
                  </div>
                </div>

                 <!-- Date de début -->
              <div class="form-group">
     <label for="inputEmail3" class="col-sm-2 control-label">Date de début :</label>
                <div class="col-sm-10">
                <div class="input-group date">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="date" v-model="Eventhot.date_debut" name="date_debut" class="form-control pull-right">
                </div>
                </div>
              </div>
                <!-- /Date de début -->

                  <!-- Date de fin -->
              <div class="form-group">
     <label class="col-sm-2 control-label">Date de fin :</label>
                <div class="col-sm-10">
                <div class="input-group date">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div> 
                  <input type="date" v-model="Eventhot.date_fin" name="date_fin" class="form-control pull-right">
                </div>
                </div>
              </div>
                <!-- /Date de fin -->

            
                <div class="form-group">
                <label class="col-sm-2 control-label">Type</label>
                <div class="col-sm-10">
                <select v-model="Eventhot.type" name="type" class="form-control select2" style="width: 100%;" required>
                  <option name="type" value="Public" selected>Public</option>
                  <option name="type" value="Priver">Privé</option>
                </select>
              </div>
              </div>
        
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Creer l'évènement</button>
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
  name: 'Eventhot',
  data: function () {
    return {
        Eventhot: {},
        token: currentUser.getToken()
    }
  },
  methods: {
      addEvent(e){
          if (this.Eventhot.libelle =='' || !this.Eventhot.description || !this.Eventhot.lieu) {
            this.$swal('Attention','<b>veuillez renseigner les champs vides .</b>', 'OK');
          } else {
              let newEvent = {
                  libelle : this.Eventhot.libelle,
                  description : this.Eventhot.description,
                  lieu : this.Eventhot.lieu,
                  date_debut : this.Eventhot.date_debut,
                  date_fin : this.Eventhot.date_fin,
                  type : this.Eventhot.type
              }
              this.$http.post(config.url+'event/create',newEvent,{headers: Token.getHeader()})
              .then(function(response){
                // console.log(response);
                this.$swal('Success','<b>L\'évènement à bien été créer .</b>', 'OK');
                  this.$router.push({path: '/'});
              })
              .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>Echec de la création d\'évènement</i>',
                        type: 'warning',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Veuillez réessayer .</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
              })
              // this.$http.post(config.url+'event/create',Token.getHeader())
              // .then(function(response){
              //   console.log(response);
              //     // this.$router.push({path: '/'});
              // });
            
              e.preventDefault();
          }
          e.preventDefault();
          
      }
  }
}
</script>