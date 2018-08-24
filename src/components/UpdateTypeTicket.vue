<template>
    <div class="UpdateTypeTicket">
      <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Mettre à Jour Le Type Du Tycket</h1>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="UpdateTicket">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Libellé</label>

                  <div class="col-sm-10">
                    <input type="text"  name="libelle" v-model="TicketUpdate.libelle" class="form-control">
                  </div>
                </div>

 
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Modifier Un Type d'évènement</button>
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
  name: 'UpdateTypeTicket',
  data: function (){
    return {
        TicketUpdate: {libelle:'',id:0}
    }
  },
  methods: {
      UpdateTicket(e){
          if (!this.TicketUpdate.libelle) {
            this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
          } else {
              let UpdateThisTicket = {
                  libelle : this.TicketUpdate.libelle    
              }

              this.$http.post(config.url+'typeTicket/update/'+this.TicketUpdate.id,UpdateThisTicket,{headers: Token.getHeader()})
              .then(function(response){
                   this.$swal('Success','<b>Mise à jour éffectuée', 'OK');
                  this.$router.push({path: '/'});
              })

               .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>La mise à jour à échoué !</i>',
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
             
              e.preventDefault();
          }
          e.preventDefault();
          
      },
      fetchType(id) {
        this.$http.get(config.url+'typeTicket/edit/'+id,{headers: Token.getHeader()})
            .then(function(response){
              this.TicketUpdate.libelle=response.body.data.libelle
              this.TicketUpdate.id=id
            //    console.log(response.body.data)
          })
      }
  },
  created: function() {
      this.fetchType(this.$route.params.id);
      this.UpdateTicket(this.$route.params.id);
      }
}
</script>