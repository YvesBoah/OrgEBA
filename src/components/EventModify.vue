<template>
    <div class="EventModify">
 <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de Modification d'évènement </h1>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="UpdateEvent">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Libellé</label>

                  <div class="col-sm-10">
                    <input type="text" name="libelle" v-model="EventModify.libelle" class="form-control" placeholder="Libellé">
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label">Description</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control"  v-model="EventModify.description" name="description" placeholder="Description">
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
                    <input type="text" class="form-control" v-model="EventModify.lieu"  name="lieu"  placeholder="Lieu de l'évènement" required>
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
                  <input type="date" v-model="EventModify.date_debut" name="date_debut" class="form-control pull-right" required>
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
                  <input type="date" v-model="EventModify.date_fin" name="date_fin" class="form-control pull-right" required>
                </div>
                </div>
              </div>
                <!-- /Date de fin -->

            
                <div class="form-group">
                <label class="col-sm-2 control-label">Type</label>
                <div class="col-sm-10">
                <select v-model="EventModify.type" name="type" class="form-control select2" style="width: 100%;" required>
                  <option name="type" value="Public" selected>Public</option>
                  <option name="type" value="Priver">Privé</option>
                </select>
              </div>
              </div>

              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Mettre à jour l'évènement</button>
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
import Token from '@/services/Token';
import currentUser from '@/services/currentUser';
import config from '@/services/config';
export default {
  name: 'EventModify',
  data: function (){
    return {
        EventModify: {
          libelle:'',
          id:0,
          description:'',
          lieu:'',
          date_debut:'',
          date_fin:'',
          type:''
          }
    }
  },
  methods: {
      UpdateEvent(e){
          if (!this.EventModify.libelle || !this.EventModify.description || !this.EventModify.lieu) {
              // this.$swal('Attention','<b>veuillez renseigner les champs vides .</b>', 'OK');
          } else {
              let UpdateEvents = {
                  libelle : this.EventModify.libelle,
                  description : this.EventModify.description,
                  lieu : this.EventModify.lieu,
                  date_debut : this.EventModify.date_debut,
                  date_fin : this.EventModify.date_fin,
                  type : this.EventModify.type
              }

              this.$http.post(config.url+'event/update/'+this.EventModify.id,UpdateEvents,{headers: Token.getHeader()})
              .then(function(response){
                // console.log(response)
                 this.$swal('Success','<b>L\'évènement à bien été mis à jour .</b>', 'OK');
                  this.$router.push({path: '/'});
              })

              .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>Echec de la mise à jour</i>',
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
              // console.log('envoie reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      },
      fetchEvent(id) {
        this.$http.get(config.url+'event/edit/'+id,{headers: Token.getHeader()})
            .then(function(response){
              this.EventModify.libelle=response.body.data.libelle
              this.EventModify.description=response.body.data.description
              this.EventModify.lieu=response.body.data.lieu
              this.EventModify.date_debut=response.body.data.date_debut
              this.EventModify.libelle=response.body.data.libelle
              this.EventModify.date_fin=response.body.data.date_fin
              this.EventModify.type=response.body.data.type
               this.EventModify.id=response.body.data.id
              //  console.log(response.body.data)
          })
      }
  },
  created: function() {
         this.fetchEvent(this.$route.params.id);
         this.UpdateEvent(this.$route.params.id);
      }
}
</script>