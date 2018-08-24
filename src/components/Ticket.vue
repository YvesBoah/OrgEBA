<template>
    <div class="None">
      
         <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de création de Ticket</h1>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="addTicket">

              <div class="box-body">

                <div class="form-group">
                  <label  class="col-sm-2 control-label">Quantité</label>

                  <div class="col-sm-10">
                    <input type="number" v-model="Ticket.qte" name="qte" class="form-control" placeholder="Nombre de ticket" required>
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-2 control-label">Status</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.statut" name="statut" class="form-control select2" style="width: 100%;" required>
                  <option value="En attentes" selected="selected"> En attentes</option>
                  <option value="Actif">Actif</option>
                </select>
              </div>
                </div>


             <!--   <div class="form-group">
                <label class="col-sm-2 control-label">évenement liées</label>
                <div class="col-sm-10">
                <select v-on:change="SousCategorieTicket" v-model="Ticket.event_id" name="event_id" class="form-control select2 sort-filter" style="width: 100%;" required>
                   <option :value="null" disabled selected>Choisit un évènement </option>
                  <option @click="fetchTypeLier(event_id)"  v-for="item in eventLier" :key="item.id" v-bind:value="item.id">{{item.libelle}}</option> 
                </select>
              </div>
              </div> -->
                    


                <div class="form-group">
                  <label class="col-sm-2 control-label">Type Du Ticket</label>

                   <div class="col-sm-10">
                <select v-model="Ticket.type_ticket_id" name="type_ticket_id" class="form-control select2" style="width: 100%;">
                  <option v-for="items in TypeLier" :key="items.id" selected="selected" v-bind:value="items.id">{{ items.libelle }} - {{ items.prix }} FCFA</option>
                </select>
              </div>
                </div>

              <!-- /.form group -->

  <!-- content -->


      

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
  name: 'None',
  data: function (){
    return {
        Ticket: {},
        eventLier: [],
        TypeLier: {},
        

    }
  },
  computed: {

  },
  methods: {
    SousCategorieTicket: function(e) {
        // console.log(e.target.value);
        // console.log(this.Ticket.event_id);
       this.fetchTypeLier(this.Ticket.event_id)
    },
      addTicket(e){
          if (!this.Ticket.type_ticket_id) {
              this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
          } else {
              let newTicket = {
                  qte : this.Ticket.qte,
                  event_id : this.Ticket.event_id,
                  statut : this.Ticket.statut,
                  type_ticket_id : this.Ticket.type_ticket_id
              }

              this.$http.post(config.url+'ticket/create',newTicket,{headers: Token.getHeader()})
              .then(function(response){
                // console.log(response);
                 this.$swal('Success','<b>Le ticket à bien créer .</b>', 'OK');
                  this.$router.push({path: '/'});
                  // if (response.msg != 'ok'){
                  //   alert('ERREUR');
                  // }
              })
               .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>La création du ticket à échoué</i>',
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
               // console.log(response.body.data)
               
                 
          })
      },
      fetchTypeLier() {
        this.$http.get(config.url+'event/'+this.$route.params.id+'/typeTickets',{headers: Token.getHeader()})
            .then(function(response){
            //   console.log('tets')
            //   console.log(response);
            // console.log(response.data.typeTickets);
              //this.TypeLier = response.body.data.type
              this.TypeLier = response.body.data.typeTickets
               // console.log(response.body.data.typeTickets)
              
          })
      }
  },
  created: function() {
    this.fetchEventLier();
    this.fetchTypeLier();
  }
}

</script>