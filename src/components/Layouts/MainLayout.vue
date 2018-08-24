<template>
     <div class="MainLayout">
       
         <header class="main-header">
  
      <!-- Logo -->
     <router-link class="logo" :to="{name:'HelloWorld'}">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Buzz </b> Event</span>
      </router-link>
  
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
           
        
            
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
             <!--  <li v-if="Isauth"><router-link :to="{name:'Eventhot'}"><i class="fa fa-circle-o"></i> Créer Un évènement</router-link></li>
              <li v-if="Isauth"><router-link :to="{name:'Ticket'}"><i class="fa fa-circle-o"></i> Générer un ticket</router-link></li>
              <li v-if="Isauth"><router-link :to="{name:'Ajoutimage'}"><i class="fa fa-circle-o"></i> Ajouter des images </router-link></li> -->
              <li v-if="Isauth"><router-link :to="{name:'Profil'}"><i class="fa fa-circle-o"></i> Modifier Son Profil </router-link></li>
             <!--  <li v-if="Isauth"><router-link :to="{name:'Typeticket'}"><i class="fa fa-circle-o"></i> Créer Un Nouveau Type </router-link></li> -->
            </ul>
          </li>

                <li v-if="Isauth" class="active treeview">
            <a href="#">
              <i class="fa fa-dashboard"></i> <span>Affichage Du Menu</span> <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
              <li v-if="Isauth" class="active"><router-link :to="{name:'Event_vue'}"><i class="fa fa-circle-o"></i>Liste des évènements</router-link></li>
              <!-- <li v-if="Isauth"><router-link :to="{name:'TypeticketVue'}"><i class="fa fa-circle-o"></i> Liste Des types de ticket </router-link></li> -->
              <!-- <li v-if="Isauth" class="active"><router-link :to="{name:'list_vendeur'}"><i class="fa fa-circle-o"></i>Liste des Vendeurs</router-link></li> -->
              <!-- <li v-if="Isauth"><router-link :to="{name:'Statistique'}"><i class="fa fa-circle-o"></i> Statistique Comptabilité </router-link></li> -->
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



     










  <transition name="fade">
    <router-view/>
  </transition>
    
     </div>
</template>

<script>
import Alert from '@/components/Alert';
import Token from '@/services/Token';
import currentUser from '@/services/currentUser';
    export default {
  
  name: 'MainLayout',
  data: function (){
    return {
      Alert: '',
      Isauth: '',
      username: JSON.parse(currentUser.getUser()).username,
      
      // MaDate: formatDate(new Date())
    }
  },
  methods:{
    logout: function () {
      currentUser.deleteToken()
      this.$router.push({name: "MainLogin"})
      location.reload();
    }
  },
   components: {
    Alert
  },
   created: function () {
    //  console.log(localStorage.getItem('username'))
      // console.log(JSON.parse(currentUser.getUser()).username)
      // console.log(Token.getHeader())
      // this.Isauth = currentUser.getToken() ? true : false

      
    //   console.log(formatDate(new Date()));
    if (this.$route.query.Alert) {
      this.Alert = this.$route.query.Alert;
    }
        //   Verification ( si le token est présent )
    this.Isauth = currentUser.getToken() ? true : false
  },
  //   Middleware
   beforeRouteEnter (to, from, next) {
     if (currentUser.getToken()) {
      next(true)
    } else {
      // this.$router.push({name: "MainLoginTest"})
      // next(false)
      next({
            name: 'MainLogin'
        })
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
  transition-delay: .5s;
}
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
