<template>
    <div class="MesImages">

 <div class="content-wrapper">
                    <h1 class="text-center">Liste des images</h1>
           <div class="container">
           <div class="row">
               <div class="col-xs-12 col-lg-10 col-lg-push-0">
                     <div class="box">
            <div class="box-header">
              
            </div>
            
                
                  <!-- Post -->
                <div class="post" >
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="col-sm-4 col-lg-4 col-xs-12" v-for="item in MesImages" :key="item.id">
                            <!-- <img class="img-responsive" src="/static/dist/img/photo1.png" alt="Photo"> -->
                             <img :src="url+item.url "/>
                                    <h4 id="po"> {{ item.nom }} </h4>
                  
                            <button v-on:click="DeleteEvent(item.id)" class="btn btn-danger">Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
                  
                
                 
               
               
                <!-- <th><router-link :to="{name:'MesImages', params: {id: item.id}}"><button class="btn btn-primary">Modifier</button></router-link></th> -->
                
                
                
             
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
import config from '@/services/config';
import Token from '@/services/Token';
import currentUser from '@/services/currentUser';
export default {
  name: 'MesImages',
  data: function (){
    return {
        MesImages: [],
        url: config.base_url
    }
  },
  methods: {
      fetchEvent(id) {
        this.$http.get(config.url+'event/'+id+'/image',{headers: Token.getHeader()})
            .then(function(response){
              this.MesImages = response.body.data.files
             
            console.log(response.body.data.files)
          });
      },
    DeleteEvent(id){
        this.$http.post(config.url+'image/'+id+'/delete',{headers: Token.getHeader()})
            .then(function(response){
             // on filtre les éléments pour lesquelles l'id est differents de ce qui est present
              this.MesImages = this.MesImages.filter((elt)=>{
                return  elt.id != id
              })
                  this.$swal('Success ','<b>L\'image à bien été Supprimée  </b>', 'OK');
              //  location.reload()
          })

          
            .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>La suppression de l\'image à échouée</i>',
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
    }

  },
  
  created: function() {
    this.fetchEvent(this.$route.params.id);
    // this.DeleteEvent(this.$route.params.id);
  }
}

</script>

<style>
#po{
    text-align:center;
}
</style>
