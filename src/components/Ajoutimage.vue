<template>
    <div class="Ajoutimage">
       
        <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire d'ajout d'image</h1>
              <br/><br/>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="Ajoutim">

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-md-push-2">
                            <label class="col-sm-2 control-label">Uploader L'image </label>
                                 <div class="col-sm-10">
                                <vue-base64-file-upload 
                                    class="form-group"
                                    accept="image/png,image/jpeg"
                                    image-class="col-md-4"
                                    input-class="form-control"
                                    :max-size="customImageMaxSize"
                                    @size-exceeded="onSizeExceeded"
                                    @file="onFile"
                                    @load="onLoad" />
                                </div>
                                </div>
                         
                            
                          </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-md-push-2">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Description</label>

                                  <div class="col-sm-10">
                                    <input type="text" class="form-control"  v-model="Ajoutim.nom" name="nom" placeholder="Nom">
                                  </div>
                                </div>

                            </div>
                            
                        </div>
                       <!--  <div class="row">
                        <div class="col-xs-12 col-md-6 col-md-push-2">
                             <div class="form-group">
                              <label class="col-sm-2 control-label">évenement liées</label>
                                <div class="col-sm-10">
                                  <select v-model="Ajoutim.event_id" name="event_id" class="form-control select2" style="width: 100%;">
                                    <option  v-for="item in eventLier" :key="item.id" v-bind:value="item.id">{{item.libelle}}</option> 
                                  </select>
                                </div>
                            </div>
                             </div>        
                             </div>  -->       
                    </div>
                    

              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Mettre à Jour</button>
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
import VueBase64FileUpload from 'vue-base64-file-upload';
import config from '@/services/config';
export default {
  name: 'Ajoutimage',
  data: function (){
    return {
      Ajoutimage: {},
      eventLier: [],
      customImageMaxSize: 2 // megabytes
    }
  },
  components: {
    VueBase64FileUpload
  },
  methods: {
      
      Ajoutim(e){
          if ('Jeano'=='pirate') {
            //   this.$swal('Attention','<b>veuillez renseigner les champs vides .</b>', 'OK');
          } else {
              let Rajout = {
                    nom : this.Ajoutim.nom,
                    url : this.Ajoutim.url,
                    event_id : this.$route.params.id
                    // url : this.Ajoutimage.url
              }

              this.$http.post(config.url+'image/Upload',Rajout,{headers: Token.getHeader()})
              
              .then(function(response){
                  console.log(response)
                  console.log(Rajout)
                  this.$swal('Success ','<b>L\'image à bien été uploader  </b>', 'OK');
                //   this.$router.push({path: '/'});
              
              })

              
                 .catch(error=> {
                    // alert("Le Jeton de connection à Expirer ")

               this.$swal({
                        title: '<i>L\image n\'a pas été uploader</i>',
                        type: 'warning',
                        // add a custom html tags by defining a html method.
                        html:
                          ' <strong> Ou trop Large .</strong>  ' +
                          '',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                      }) 
              })
              
            
            
              e.preventDefault();
          }
    
          
// app.$mount('#app');
      },
       onFile(file) {
    //   console.log(file); // file object
    //   this.Ajoutimage.file.name = file.name
    //   console.log(file.name); // file object
    },
 
    onLoad(dataUri) {
    //   console.log(dataUri); // data-uri string
     
      this.Ajoutim.url = dataUri
    },
 
    onSizeExceeded(size) {
                  this.$swal('attention ','<b>L\'image uploader est trop grande  </b>', 'OK');
                  // console.log(size)
    //   alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
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
  created : function (){
      this.fetchEventLier();
  }
}
</script>