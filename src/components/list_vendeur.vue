<template>
    <div class="list_vendeur">

 <div class="content-wrapper">
                    <h1 class="text-center">Liste des Vendeurs</h1>
           <div class="container">
           <div class="row">
               <div class="col-xs-12 col-lg-10">
                     <div class="box">
            <div class="box-header">
              
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Nom</th>
                  <th>email</th>
                  <th>Telephone</th> 
                  <th>Evenement Lié</th> 
                  <th>Suppression</th> 
                </tr>
                </thead>
                <tbody>
                
                <tr v-for="item in list_vendeur.vendeurs" :key="item.id">
                  <td>{{item.id}}</td>
                  <td >{{item.nom}}</td>
                  <td >{{item.email}}</td>
                  <td >{{item.tel}}</td>
                  <td >{{ list_vendeur.libelle }}</td>
                   <td><button v-on:click="DeleteVendeur(item.id)" class="btn btn-danger">Supprimer</button></td>
                </tr>
                
                </tbody>
               
              </table>
            </div>
            <!-- /.box-body -->
          </div>
               </div>
           </div>
       </div>

</div>
    </div>
</template>

<script>
import Token from '@/services/Token';
import currentUser from '@/services/currentUser';
import config from '@/services/config';
export default {
  name: 'list_vendeur',
  data: function (){
    return {
        list_vendeur: []
    }
  },
  methods: {
      fetchEvent(id) {
        this.$http.get(config.url+'event/'+id+'/vendeurs',{headers: Token.getHeader()})
            .then(function(response){
              this.list_vendeur = response.body.data
              //  console.log(response.data)
              //  console.log(this.list_vendeur)
          });
      },
    DeleteVendeur(id){
        this.$http.get(config.url+'vendeur/delete/'+id,{headers: Token.getHeader()})
           .then(function(response){
              // console.log(response)
              // Filtre les éléments apres la suppression 
              // this.Ticket_vue = response.body.data
              //  this.list_vendeur = this.list_vendeur.filter((elt)=>{
              //   return  elt.id != id
              // })
               this.$swal('Success','<b>Le type du tickets à bien supprimer .</b>', 'OK');
               this.$router.push({path:'/Event_vue'});
              //  location.reload()
          })
          .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>Echec de la Suppression .</i>',
                        type: 'warning',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong>Veuillez Recharger la page .</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
              })
    }

  },
  created: function() {
    this.fetchEvent(this.$route.params.id);
    // this.DeleteVendeur(this.$route.params.id);
  }
}

</script>