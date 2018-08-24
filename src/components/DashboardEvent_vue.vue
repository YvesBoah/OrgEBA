<template>
	<div class="DashboardEvent_vue">
		
   <header class="main-header">
  
      <!-- Logo -->
     <router-link class="logo" :to="{name:'HelloWorld'}">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini" id="nav_color" ><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg" id="nav_color"><b>Dashboard Event</b></span>
      </router-link>
  
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top" id="nav_color">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav" >
           
        
            
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="/static/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                <span class="hidden-xs">{{ username }}</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li  class="user-header">
                  <img src="/static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
  
                  <p>
                    {{ username }} - Organisateur
                    <!-- <small>{{ MaDate }}</small> -->
                  </p>
                </li>
               
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <router-link :to="{name:'Profil'}" class="btn btn-primary btn-flat"> Modifier Son Profil </router-link>
                    <!-- <a href="#" class="btn btn-default btn-flat">Edit Profil</a> -->
                  </div>
                  <div class="pull-right">
                    <!-- <button v-on:click="logout" class="btn btn-danger btn-flat" type="submit">Déconnection</button> -->
                     <button v-on:click="logout" class="btn btn-danger btn-flat" type="submit">Déconnection</button>
                  </div>
                </li>
              </ul>
            </li>
           
          </ul>
        </div>
  
      </nav>
    </header>




        <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel" id="bas">
          <div class="pull-left image">
            <img src="/static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>{{ username }}</p>
            <a href="#"><i class="fa fa-circle text-success"></i> En Ligne</a>
           </div>
        </div>
       
        <ul class="sidebar-menu">
          <li class="header">Consulte La Liste</li>
          <li class="active treeview">
            <a href="#">
              <i class="fa fa-dashboard"></i> <span>Menu De Navigation</span> <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
              <li v-if="Isauth" class="active"><router-link :to="{name:'HelloWorld'}"><i class="fa fa-circle-o"></i>Acceuil</router-link></li>
              <li v-if="Isauth"><router-link :to="{name:'MesImages'}"><i class="fa fa-circle-o"></i> Mes Images</router-link></li>
              <li v-if="Isauth"><router-link :to="{name:'Ticket'}"><i class="fa fa-circle-o"></i> Générer un ticket</router-link></li>
              <li v-if="Isauth"><router-link :to="{name:'Ajoutimage'}"><i class="fa fa-circle-o"></i> Ajouter des images </router-link></li>
              <li v-if="Isauth"><router-link :to="{name:'Profil'}"><i class="fa fa-circle-o"></i> Modifier Son Profil </router-link></li>
              <li v-if="Isauth"><router-link :to="{name:'Typeticket'}"><i class="fa fa-circle-o"></i> Créer Un Nouveau Type </router-link></li>
            </ul>
          </li>

                <li v-if="Isauth" class="active treeview">
            <a href="#">
              <i class="fa fa-dashboard"></i> <span>Affichage Du Menu</span> <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
              <li v-if="Isauth" class="active"><router-link :to="{name:'TypeticketVue'}"><i class="fa fa-circle-o"></i>Liste des TypeticketVue</router-link></li>
      		<li v-if="Isauth">
           <router-link :to="{name:'list_vendeur'}">
              <i class="fa fa-th"></i> <span>Voir Mes Vendeurs</span>
            </router-link>
          </li>
            </ul>
          </li>   

          <li v-if="Isauth">
           <router-link :to="{name:'Vendeur'}">
              <i class="fa fa-th"></i> <span>Créer Un Vendeur</span>
            </router-link>
          </li>
 			

          
          

        </ul>   
      </section>
      <!-- /.sidebar -->
    </aside>

       <!-- FIN NAVBAR FIXE -->



      <div >

      		<div class="container">
      				<div class="row">
      					<br>	<br>
      						<h1 class="text-center po">Bienvenue sur le Dashboard {{VueEvents.libelle}} </h1>

      					<p class="text-center po  text-muted">
      						<strong> 
      							Suivez Tout ce qui se passe sur cet évènement .
      						</strong>
      					</p>
      					<h2 class="text-center po"> Infos +</h2>	

      					<h3 class="text-center po"> Lieu : {{VueEvents.lieu}}</h3>
      					<h3 class="text-center po"> Description : {{VueEvents.description}}</h3>
      					<h3 class="text-center po"> Date de début : {{VueEvents.date_debut}}</h3>
      					<h3 class="text-center po"> Date de fin : {{VueEvents.date_fin}}</h3>
      					<h3 class="text-center po"> Type : {{VueEvents.type}}</h3>
      				</div>
      		</div>

      </div>










  <transition name="fade">
    <router-view/>
  </transition>

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
        VueEvents: {},
         Isauth: '',
      username: JSON.parse(currentUser.getUser()).username
    }
  },
  methods: {
     logout: function () {
      currentUser.deleteToken()
      this.$router.push({name: "MainLogin"})
      location.reload();
    },
    fetchEvent(id) {
        this.$http.get(config.url+'event/'+id+'/show',{headers: Token.getHeader()})
            .then(function(response){
              this.VueEvents = response.body.data

                // console.log(response.data)
          });
      }
  
   
  },
  created: function() {
        //   Verification ( si le token est présent )
    this.Isauth = currentUser.getToken() ? true : false
        this.fetchEvent(this.$route.params.id);
  }
}

</script>

<style>

.po{
	color:#fff;
}
#nav_color{
	background-color:orange;
}
</style>