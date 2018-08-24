<template>
    <div class="Vendeur">
 <div class="content-wrapper">

      <div class="container">
          <div class="row">
              <h1 class="text-center">Formulaire de création d'un Vendeur</h1>
              <div class="col-xs-12 col-lg-10">
                    <!-- form start -->
            <form class="form-horizontal" v-on:submit.prevent="addVendor">

              <div class="box-body">
                <div class="form-group">
                  <label  class="col-sm-2 control-label">nom</label>

                  <div class="col-sm-10">
                    <input type="text" v-model="Vendeur.nom" name="nom" class="form-control" placeholder="nom" required>
                  </div>
                </div>

                   <div class="form-group">
                <label class="col-sm-2 control-label">Telephone</label>
                <div class="col-sm-10">
                <div class="input-group">                 
                  </div>
                  <input type="text" v-model="Vendeur.tel" name="tel" class="form-control" required>
                </div>             
              </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Email</label>

                  <div class="col-sm-10">
                    <input type="email" v-model="Vendeur.email" class="form-control"  placeholder="Email" required>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label">Mot de passe</label>

                  <div class="col-sm-10">
                    <input type="password" v-model="Vendeur.password" class="form-control"  placeholder="Mot de passe" required>
                  </div>
                </div>

                
        <!--
            <div class="form-group">
                <label class="col-sm-2 control-label">évenement liées</label>
                <div class="col-sm-10">
                <select v-model="Vendeur.event_id" name="event_id" class="form-control select2" style="width: 100%;"  required>
                  <option  v-for="item in eventLier" :key="item.id" v-bind:value="item.id">{{ item.libelle }}</option> 
                </select>
              </div>
              </div> 
                        -->

        <div class="form-group">
          <label class="typo__label col-sm-2 control-label">évenement liées</label>
              <div class="col-sm-10">
              <multiselect v-model="Vendeur.event_id" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :hide-selected="true" :preserve-search="true" placeholder="Choisit l'évènement liés" label="libelle" track-by="libelle" :preselect-first="true">
                <template slot="tag" slot-scope="props"><span class="custom__tag"><span>{{ props.option.libelle }}</span><span class="custom__remove" @click="props.remove(props.option)">❌</span></span></template>
              </multiselect>
              <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
              </div>
        </div>

       


              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="submit" class="btn btn-primary pull-right">Creer Le Vendeur</button>
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
import Multiselect from 'vue-multiselect'
import Token from '@/services/Token';
import currentUser from '@/services/currentUser';
import config from '@/services/config';
export default {
  name: 'Vendeur',
  components: {
    Multiselect
  },
  data: function (){
    return {
        Vendeur: {},
        eventLier: [],
         value: [],
         options: []
    }
  },
  methods: {
      addVendor(e){
          if (this.Vendeur.nom =='' || !this.Vendeur.email || !this.Vendeur.tel) {
               this.$swal('Attention','<b>veuillez remplir les champs svp</b>', 'OK');
          } else {
              let newVendor = {
                  nom : this.Vendeur.nom,
                  email : this.Vendeur.email,
                  tel : this.Vendeur.tel,
                  password : this.Vendeur.password,
                  event_id : this.Vendeur.event_id
              }

              this.$http.post(config.url+'vendeur/register',newVendor,{headers: Token.getHeader()})
              .then(function(response){
                 this.$swal('Success','<b>Le vendeur à bien créer .</b>', 'OK');
                  this.$router.push({path: '/'});
              });

              
              console.log('Création reussie');
              e.preventDefault();
          }
          e.preventDefault();
          
      },
      fetchEventLier() {
        this.$http.get(config.url+'event/index',{headers: Token.getHeader()})
            .then(function(response){
              // this.eventLier = response.body.data.libelle
              this.eventLier = response.body.data
              this.options = response.body.data
               console.log(response.body.data)
          })
      }
  
  },
      
      created: function () {
        this.fetchEventLier();
        this.addTag();
      }
}
</script>

<style src="..\..\static\Multiselect\vue-multiselect.min.css"></style>