<template>
    <div class="Event_vue">

 <div class="content-wrapper">
                    <h1 class="text-center">Liste des évènements en cours</h1>
           <div class="container">
           <div class="row">
               <div class="col-xs-12 col-lg-12">
                     <div class="box">
            <div class="box-header">
              
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>+ GERER L'Evènement</th>
                  <th>Libellé</th>
                 <!--  <th>description</th>
                  <th>Lieu</th>
                  <th>date_debut</th>
                  <th>date_fin</th>
                  <th>Type</th> -->
                 <!--  <th>Mes Images </th>
                  <th>Voir les types de ticket</th>
                  <th>+ Voir les Vendeurs</th>
                  <th>+ Voir les Tickets</th> -->
                  <th>Modification</th>
                  <th>Suppression</th>
                </tr>
                </thead>
                <tbody>
                
                <tr v-for="item in VueEvents" :key="item.id">

               <td><router-link :to="{name:'DashboardEvent_vue', params: {id: item.id}}"><button class="btn btn-primary">Se rendre</button></router-link></td> 
                  <td >{{ item.libelle }}</td>
                <!--   <td >{{ item.description }}</td>
                  <td >{{ item.lieu }}</td>
                  <td >{{ item.date_debut }}</td>
                  <td >{{item.date_fin}}</td>
                  <td >{{item.type}}</td> -->
              <!--  <th><router-link :to="{name:'MesImages', params: {id: item.id}}"><button class="btn btn-primary"> Images</button></router-link></th>
                <th><router-link :to="{name:'TypeticketVue', params: {id: item.id}}"><button class="btn btn-default">+ Voir</button></router-link></th>
                <th><router-link :to="{name:'list_vendeur', params: {id: item.id}}"><button class="btn btn-warning">+ Voir</button></router-link></th>
                <th><router-link :to="{name:'Ticket_vue', params: {id: item.id}}"><button class="btn btn-success">+ Voir</button></router-link></th> -->
                <th><router-link :to="{name:'EventModify', params: {id: item.id}}"><button class="btn btn-primary">Modifier</button></router-link></th>
                  <td><button v-on:click="DeleteEvent(item.id)" class="btn btn-danger">Supprimer</button></td>
                </tr>
                
                </tbody>
               
              </table>
            </div>
            <!-- /.box-body -->
          </div>
                         <!-- <div class="col-md-8 offset-3"> -->
                         <div class="col-md-8 ">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" @click.prevent="precedent()" href="#">Précédent</a></li>
                      <li class="page-item" v-for=" numberPage in this.paginator.lastPage"><a class="page-link" @click="MovePage(numberPage)" >{{numberPage}}</a></li>
                      <li class="page-item"><a class="page-link" @click.prevent="Suivant()">Suivant</a></li>
                    </ul>
                  </nav>
      </div>

               </div>
           </div>
       </div>

</div>
    </div>
</template>

<script>
import config from '@/services/config';
import Token from '@/services/Token';
import currentUser from '@/services/currentUser';
export default {
  name: 'Event_vue',
  data: function (){
    return {
        VueEvents: [],
        Pagination: [],
        current_Page: "",
        Last_Page: "",
        paginator : {}
    }
  },
  methods: {
      fetchEvent(id) {
        // recupère le page courante
        let PageCourante=id || this.paginator.page || 1;
        let $this = this
        this.$http.get(config.url+'event/paginate?page='+PageCourante,{headers: Token.getHeader()})
            .then(function(response){
              this.VueEvents = response.body.data.data
             
           this.paginator = response.body.data;
                // console.log(response.data.data)
          });
      },
    precedent(){
      
       if (this.paginator.page == 1) {
 this.$swal("Attention", "<b>Vous êtes sur la Première page</b>", "OK");
       }else{
        this.paginator.page--
       this.fetchEvent();
       }
    },
    Suivant(){
         if (this.paginator.page == this.paginator.lastPage) {
           this.$swal("Attention", "<b>Vous êtes sur la Dèrnière page</b>", "OK");
         }else{
        this.paginator.page++
         this.fetchEvent();
         }
    },
    MovePage(recupere_lid_de_la_page_sur_laquelle_on_souhaite_aller){
      this.fetchEvent(recupere_lid_de_la_page_sur_laquelle_on_souhaite_aller);
    },
    DeleteEvent(id){
        this.$http.get(config.url+'event/delete/'+id,{headers: Token.getHeader()})
            .then(function(response){
             // on filtre les éléments pour lesquelles l'id est differents de ce qui est present
              this.VueEvents = this.VueEvents.filter((elt)=>{
                return  elt.id != id
              })
              //  location.reload()
          });
    }
   
  },
  created: function() {
    this.fetchEvent();
  }
}

</script>