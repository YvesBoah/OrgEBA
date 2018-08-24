import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ticket from '@/components/Ticket'
import Profil from '@/components/Profil'
import Statistique from '@/components/Statistique'
import None from '@/components/None'
import Vendeur from '@/components/Vendeur'
import Event_vue from '@/components/Event_vue'
import DashboardEvent_vue from '@/components/DashboardEvent_vue'
import Ticket_vue from '@/components/Ticket_vue'
import Eventhot from '@/components/Eventhot'
import Typeticket from '@/components/Typeticket'
import TypeticketVue from '@/components/TypeticketVue'
import UpdateTypeTicket from '@/components/UpdateTypeTicket'
import EventModify from '@/components/EventModify'
import Ajoutimage from '@/components/Ajoutimage'
import MesImages from '@/components/MesImages'
import UpdateTicket from '@/components/UpdateTicket'
import MainLogin from '@/components/Layouts/MainLogin'
import MainRappel from '@/components/Layouts/MainRappel'
import MainChange from '@/components/Layouts/MainChange'
import MainLayout from '@/components/Layouts/MainLayout'
import list_vendeur from '@/components/list_vendeur'
import Alert from '@/components/Alert'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/Login',
      name: 'MainLogin',
      component: MainLogin
    },
    {
      path: '/Rappel',
      name: 'MainRappel',
      component: MainRappel
    },
    {
      path: '/Change/:params',
      name: 'MainChange',
      component: MainChange
    },
    {
      path: '*',
      redirect: '/Acceuil'
    },
    {
      path: '/',
      redirect: '/app/Acceuil'
    },
    {
      path: '/Dashboard/Event_vue/:id',
      name: 'DashboardEvent_vue',
      component: DashboardEvent_vue
    },
    {
      path: '/app',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '/Acceuil',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/Vendeur',
          name: 'Vendeur',
          component: Vendeur
        },
        {
          path: '/event/:id/images',
          name: 'MesImages',
          component: MesImages
        },
        {
          path: '/Dashboard/Ajoutimage/:id',
          name: 'Ajoutimage',
          component: Ajoutimage
        },
        {
          path: '/event/:id/vendeurs',
          name: 'list_vendeur',
          component: list_vendeur
        },
        {
          path: '/Event',
          name: 'Eventhot',
          component: Eventhot
        },
        {
          path: '/Dashboard/Ticket/:id',
          name: 'Ticket',
          component: Ticket
        },
        {
          path: '/Profil',
          name: 'Profil',
          component: Profil
        },
        {
          path: '/Statistique',
          name: 'Statistique',
          component: Statistique
        },
        {
          path: '/n',
          name: 'None',
          component: None
        },
        {
          path: '/Event_vue',
          name: 'Event_vue',
          component: Event_vue
        },
        {
          path: '/event/:id/tickets',
          name: 'Ticket_vue',
          component: Ticket_vue
        },
        {
          path: '/Typeticket',
          name: 'Typeticket',
          component: Typeticket
        },
        {
          path: '/event/:id/TypeticketVue',
          name: 'TypeticketVue',
          component: TypeticketVue
        },
        {
          path: '/UpdateTypeTicket/:id',
          name: 'UpdateTypeTicket',
          component: UpdateTypeTicket
        },
        {
          path: '/EventModify/:id',
          name: 'EventModify',
          component: EventModify
        },
        {
          path: '/UpdateTicket/:id',
          name: 'UpdateTicket',
          component: UpdateTicket
        }
      ]
    }
  ]
})
