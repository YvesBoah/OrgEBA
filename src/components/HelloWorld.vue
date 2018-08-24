<template>
  <!-- FIXE -->
       <!-- FIXE -->
       <!-- FIXE -->
       <div class="wrapper">

<div class="hello">
     
 <!-- Content Wrapper. Contains page content -->
 <div class="content-wrapper">
     <!-- Content Header (Page header) -->
     <section class="content-header">
         <h1>
             SERVICE ORGANISATION :
             <strong><b>{{ ORGANISATION }}</b></strong>
            </h1>
            <ol class="breadcrumb">
              <h4>
                <strong>Notre Contact : +225 {{ Contact }}</strong>
              </h4>
            </ol>
        </section>
        
        <!-- FIN NAVBAR FIXE -->
    

          <!-- DEBUT  CONTENU DU SITE  -->

        <!-- Main content -->
    <section class="content">
            <!-- Info boxes -->
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box">
                  <span class="info-box-icon bg-aqua"><i class="ion ion-ios-gear-outline"></i></span>
      
                  <div class="info-box-content">
                    <span class="info-box-text">Nombres de vendeur</span>
                    <span class="info-box-number">{{ Count_Vendeur }}</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box">
                  <span class="info-box-icon bg-red"><i class="fa fa-google-plus"></i></span>
      
                  <div class="info-box-content">
                    <span class="info-box-text">Nombres d'Evènement !</span>
                    <span class="info-box-number">{{ Count_Event }}</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
      
              <!-- fix for small devices only -->
              <div class="clearfix visible-sm-block"></div>
      
              <!-- /.col -->
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box">
                  <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>
      
                  <div class="info-box-content">
                    <span class="info-box-text">L'Evènement le plus récent </span>
                    <span class="info-box-number">{{ Last_Event }}</span>
                    
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
      
                    <!--  -->
                    <!--  -->
                     <!-- Info boxes -->
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box">
                  <span class="info-box-icon bg-aqua"><i class="ion ion-ios-gear-outline"></i></span>
      
                  <div class="info-box-content">
                    <span class="info-box-text">Evènement en cours</span>
                    <span class="info-box-number">00.00</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box">
                  <span class="info-box-icon bg-red"><i class="fa fa-google-plus"></i></span>
      
                  <div class="info-box-content">
                    <span class="info-box-text">Evènement terminé</span>
                    <span class="info-box-number">00.00</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
      
              <!-- fix for small devices only -->
              <div class="clearfix visible-sm-block"></div>
      
              <!-- /.col -->
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box">
                  <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>
      
                  <div class="info-box-content">
                    <span class="info-box-text">Événement en brouillon </span>
                    <span class="info-box-number">00.00</span>
                    
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
                    <!--  -->
                    <!--  -->


            <div class="row">
              <div class="col-md-12">
                <div class="box">
                  <div class="box-header with-border">
                    <h3 class=" text-center">Résumé des Comptes de Mr <b>{{ username }}</b></h3>
      
                    <div class="box-tools pull-right">
                      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                      </button>
                     
                      <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                  </div>
                  <!-- /.box-header -->
                  
                  <!-- ./box-body -->
                  <div class="box-footer">
                    <div class="row">
                      <div class="col-sm-6 col-xs-6">
                        <div class="description-block border-right">
                          <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 100%</span>
                          <span class="description-text">Chiffres d'affaires</span>
                          <h5 class="description-header">{{CalculChiffre_Affaire}} FCFA</h5>
                         
                        </div>
                        <!-- /.description-block -->
                      </div>
                      <!-- /.col -->
                      <div class="col-sm-6 col-xs-6">
                        <div class="description-block border-right">
                          <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 100%</span>
                          <span class="description-text">Nombres de ticket total vendue à ce jour</span>
                          <h5 class="description-header">{{Count_Event_Total}}</h5>
                        </div>
                        <!-- /.description-block -->
                      </div>
                     
                    </div>
                    <!-- /.row -->
                  </div>
                  <!-- /.box-footer -->
                </div>
                <!-- /.box -->
              </div>
              <!-- /.col -->
            </div>
            
        <!-- <div class="counter" data-count="150">0</div>
      <div class="counter" data-count="85">0</div>
      <div class="counter" :data-count="{CalculChiffre_Affaire}">0</div> -->
            <!-- /.row -->

            <!-- FIN CONTENU DU SITE  -->
          
            <!-- DEBUT DE PIEDS DE PAGE  -->

          </section>

</div>
</div>
</div>
       <!-- FIXE -->
       <!-- FIXE -->
       <!-- FIXE -->

      
</template>

<script>
import Token from '@/services/Token';
import currentUser from '@/services/currentUser';
import config from '@/services/config';
export default {
  name: 'HelloWorld',
  props:['data-count'],
  data: function (){
    return {
       username: JSON.parse(currentUser.getUser()).username,
       ORGANISATION: JSON.parse(currentUser.getUser()).organisation.nom,
       Contact: JSON.parse(currentUser.getUser()).organisation.tel,
       Count_Event: '',
       Count_Vendeur: '',
       Last_Event: '',
       Count_Event_Total: '',
       CalculChiffre_Affaire: ''
    }
  },
  methods: {
    fetchEvent() {
        this.$http.get(config.url+'organisation/event/count',{headers: Token.getHeader()})
            .then(function(response){
              this.Count_Event = response.body.data
             
              //  console.log(response.body.data)
          });
      },
      fetchVendeur() {
        this.$http.get(config.url+'organisation/vendeur/count',{headers: Token.getHeader()})
            .then(function(response){
              this.Count_Vendeur = response.body.data
                  //  console.log(response.body.data)
          });
      },
      fetchCountEvent_Total() {
        this.$http.get(config.url+'organisation/ticket/count',{headers: Token.getHeader()})
            .then(function(response){
              this.Count_Event_Total = response.body.data
                    // console.log(response.body.data)
          });
      },
      fetchChiffre_DAffaire() {
        this.$http.get(config.url+'organisation/chiffreAffaire',{headers: Token.getHeader()})
            .then(function(response){
              // this.CalculChiffre_Affaire = response.body.data.tickets.type
                    // var  data_full =  response.body.data
                    // var Chiffre_DAffaire=0;
                    // data_full.map((data)=>{
                    //   data.map((d)=>{
                    //     //tz+=parseInt(d.prix)
                    //      Chiffre_DAffaire += parseInt(d.prix)
                    //     // console.log(tz)
                    //    })
                    // })
            
              //  this.CalculChiffre_Affaire = parseInt(Chiffre_DAffaire)
               this.CalculChiffre_Affaire = response.body.prix
              //  console.log(this.CalculChiffre_Affaire)
          });
      },
      fetchLast_Event() {
        this.$http.get(config.url+'organisation/event/last',{headers: Token.getHeader()})
            .then(function(response){
              this.Last_Event = response.body.data[0].libelle
                  //  console.log(response.body.data[0].libelle)
          });
      }
  },
  created: function() {
    this.fetchEvent();
    this.fetchVendeur();
    this.fetchLast_Event();
    this.fetchCountEvent_Total();
    this.fetchChiffre_DAffaire();
  },
  mounted: function () {
    $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
    
  
  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  display: table-cell;
  margin:1.5%;
  font-size:50px;
  background-color: #FF6F6F;
  width:200px;
  border-radius: 50%;
  height:200px;
  vertical-align: middle;
}
</style>
