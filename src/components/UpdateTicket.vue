<template>
    <div class="UpdateTicket">
      
         <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de Modification du Ticket</h1>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="UpdateEvent">

              <div class="box-body">

                <div class="form-group">
                  <label  class="col-sm-2 control-label">Quantité</label>

                  <div class="col-sm-10">
                    <input type="number" v-model="Ticket.qte" name="qte" class="form-control" placeholder="Nombre de ticket">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Pix Du Ticket</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.prix" name="prix" class="form-control select2" style="width: 100%;">
                  <option value="5000" selected="selected">5000 FCFA</option>
                  <option value="15000">15000 FCFA</option>
                  <option value="20000">20000 FCFA</option>
                  <option value="25000">25000 FCFA</option>
                </select>
              </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Status</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.statut" name="statut" class="form-control select2" style="width: 100%;">
                  <option value="En attentes" selected="selected"> En attentes</option>
                  <option value="Actif">Actif</option>
                </select>
              </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Type Du Ticket</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.type_ticket_id" name="type_ticket_id" class="form-control select2" style="width: 100%;">
                  <option v-for="items in TypeLier" :key="items.id" selected="selected" v-bind:value="items.id">{{items.libelle}}</option>
                </select>
              </div>
                </div>
<!--                
               <div class="form-group">
                <label class="col-sm-2 ">Telephone</label>
                <div class="col-sm-10">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <input type="text" class="form-control" data-inputmask='"mask": "99999999"' data-mask>
                </div>
                </div>
              </div> -->
              <!-- /.form group -->

  <!-- content -->

                <div class="form-group">
                <label class="col-sm-2 control-label">évenement liées</label>
                <div class="col-sm-10">
                <select v-model="Ticket.event_id" name="event_id" class="form-control select2" style="width: 100%;">
                  <option  v-for="item in eventLier" :key="item.id" v-bind:value="item.id">{{item.libelle}}</option> 
                </select>
              </div>
              </div>

      

              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Générer  Le Ticket</button>
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
  name: 'UpdateTicket',
  data: function (){
    return {
        eventLier: [],
        TypeLier: [],
        Ticket: {
          statut:'',
          qte:1,
          id:0,
          statut:'',
          prix:'',
          type_ticket_id:'',
          event_id:''
          }
    }
  },
  methods: {
      UpdateEvent(e){
          if (!this.Ticket.statut  || !this.Ticket.qte || !this.Ticket.prix) {
              // console.log('veuillez remplir les champs svp');
              this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
          } else {
              let UpdateEvents = {
                  statut : this.Ticket.statut,
                  qte : this.Ticket.qte,
                  id : this.Ticket.id,
                  prix : this.Ticket.prix,
                  type_ticket_id : this.Ticket.type_ticket_id,
                  event_id : this.Ticket.event_id
              }

              this.$http.post(config.url+'ticket/update/'+this.Ticket.id,UpdateEvents,{headers: Token.getHeader()})
              .then(function(response){
                // console.log(response)
                this.$swal('Success','<b>Le ticket à bien été mis a jour .</b>', 'OK');
                  this.$router.push({path: '/'});
              });

              
              // console.log('envoie reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      },
      fetchEvent(id) {
        this.$http.get(config.url+'ticket/edit/'+id,{headers: Token.getHeader()})
            .then(function(response){
              this.Ticket.statut=response.body.data.statut
              this.Ticket.qte=response.body.data.qte
              this.Ticket.id=response.body.data.id
              this.Ticket.prix=response.body.data.prix
              this.Ticket.type_ticket_id=response.body.data.type_ticket_id
              this.Ticket.event_id=response.body.data.event_id
              //  console.log(response.body.data)
          })
      },
      fetchEventLier() {
        this.$http.get(config.url+'event/index',{headers: Token.getHeader()})
            .then(function(response){
            //    this.eventLier = response.body.data.libelle
               this.eventLier = response.body.data
               console.log(response.body.data)
          })
      },
      fetchTypeLier() {
        this.$http.get(config.url+'typeTicket/index',{headers: Token.getHeader()})
            .then(function(response){
              //this.TypeLier = response.body.data.type
              this.TypeLier = response.body.data
               console.log(response.body.data)
          })
      }
  },
  created: function() {
      this.fetchTypeLier(this.$route.params.id);
      this.fetchEventLier(this.$route.params.id);
      this.fetchEvent(this.$route.params.id);
      this.UpdateEvent(this.$route.params.id);
      }
}
</script>