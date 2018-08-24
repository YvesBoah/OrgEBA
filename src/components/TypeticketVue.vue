<template>
    <div class="TypeticketVue">

 <div class="content-wrapper">
                    <h1 class="text-center">Liste Des types de ticket</h1>
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
                  <th>Libellé</th>
                  <th>Prix</th>
                  <th>Modification</th>
                  <th>Suppression</th>
                </tr>
                </thead>
                <tbody>
                
                <tr v-for="item in TypeTicket" :key="item.id">
                  <td>{{item.id}}</td>
                  <td >{{item.libelle}}</td>
                  <td >{{item.prix}}</td>
                <th><router-link :to="{name:'UpdateTypeTicket', params: {id: item.id}}"><button class="btn btn-primary">Modifier</button></router-link></th>
                  <td><button v-on:click="DeleteType(item.id)" class="btn btn-danger">Supprimer</button></td>
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
  name: 'TypeticketVue',
  data: function (){
    return {
        TypeTicket: []
    }
  },
  methods: {
      fetchTypeTicket(id) {
        this.$http.get(config.url+'event/'+id+'/typetickets',{headers: Token.getHeader()})
            .then(function(response){
              this.TypeTicket = response.body.data.typeTickets
            //  console.log(response.body.data)
          });
      },
    DeleteType(id){
        this.$http.get(config.url+'typeTicket/delete/'+id,{headers: Token.getHeader()})
            .then(function(response){
              // this.TypeTicket = response.body.data
              //  this.$router.push({path:'/'});
                  this.$swal('Success','<b>Le type du tickets à bien supprimer .</b>', 'OK');
                this.TypeTicket = this.TypeTicket.filter((elt)=>{
                return  elt.id != id
              })
              //  location.reload()
          });
    }

  },
  created: function() {
    this.fetchTypeTicket(this.$route.params.id);
  }
}

</script>