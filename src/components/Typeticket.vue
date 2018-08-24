<template>
    <div class="Typeticket">
      <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Créer Un Nouveau Type De Tycket</h1>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="CreateTicket">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">Libellé</label>

                  <div class="col-sm-10">
                    <input type="text" name="libelle" v-model="TicketCreate.libelle" class="form-control" placeholder="Libellé Type Tickets">
                  </div>
                </div>

                     <div class="form-group">
                  <label class="col-sm-2 control-label">Pix Du Ticket</label>

                   <div class="col-sm-10">
                    <input type="number"  v-model="TicketCreate.prix" name="prix"  class="form-control" placeholder="Prix du ticket">      
                  </div>
                </div>

              <div class="form-group">
                <label class="col-sm-2 control-label">évenement liées</label>
                  <div class="col-sm-10">
                    <select v-model="TicketCreate.event_id" name="event_id" class="form-control select2" style="width: 100%;">
                      <option  v-for="item in eventLier" :key="item.id" v-bind:value="item.id">{{item.libelle}}</option> 
                    </select>
                  </div>
              </div>
 
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Créer Un Type d'évènement</button>
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
  name: 'Typeticket',
  data: function (){
    return {
        TicketCreate: {},
         eventLier: []
    }
  },
  methods: {
      CreateTicket(e){
          if (!this.TicketCreate.libelle) {
              this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
              
          } else {
              let createNewTicket = {
                  libelle : this.TicketCreate.libelle,
                  event_id : this.TicketCreate.event_id,   
                  prix : this.TicketCreate.prix    
              }

              this.$http.post(config.url+'typeTicket/create',createNewTicket,{headers: Token.getHeader()})
              .then(function(response){
                this.$swal('Success','<b>Le type du ticket à bien été mis a créer .</b>', 'OK');
                  this.$router.push({path: '/'});
              })

            .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>La création du type de ticket à échoué</i>',
                        type: 'warning',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Veuillez réessayer svp .</strong>  ' +
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
      fetchEventLier() {
        this.$http.get(config.url+'event/index',{headers: Token.getHeader()})
            .then(function(response){
              // this.eventLier = response.body.data.libelle
              this.eventLier = response.body.data
               console.log(response.body.data)
          })
      }
  },
  created: function() {
    this.fetchEventLier();
  }
}
</script>