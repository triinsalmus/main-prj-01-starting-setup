import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from '@/pages/coaches/CoachDetails.vue';
import CoachesList from '@/pages/coaches/CoachesList.vue';
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue';
import RequestsReceived from '@/pages/requests/RequestsReceived.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import NotFound from '@/pages/NotFound.vue';
import { ROUTES } from '@/router/constants';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: ROUTES.INDEX.name,
      path: ROUTES.INDEX.path,
      redirect: ROUTES.COACHES_LIST.path
    },
    {
      name: ROUTES.COACHES_LIST.name,
      path: ROUTES.COACHES_LIST.path,
      component: CoachesList
    },
    {
      name: ROUTES.COACH_DETAILS.name,
      path: ROUTES.COACH_DETAILS.path,
      props: (route) => ({
        id: route.params.id // for /coaches/:id
      }),
      component: CoachDetails,
      children:
        [
          {
            name: ROUTES.CONTACT.name,
            path: ROUTES.CONTACT.path,
            component: ContactCoach
          }
        ]
    },
    {
      name: ROUTES.REGISTER.name,
      path: ROUTES.REGISTER.path,
      component: CoachRegistration
    },
    {
      name: ROUTES.REQUESTS.name,
      path: ROUTES.REQUESTS.path,
      component: RequestsReceived
    },
    {
      name: ROUTES.NOTFOUND.name,
      path: ROUTES.NOTFOUND.path,
      component: NotFound
    }
    // {
    //   name: 'teams',
    //   path: '/teams',
    //   meta: { needsAuth: true },
    //   components: {
    //     default: TeamsList,
    //     footer: TeamsFooter
    //   },
    //   children: [
    //     {
    //       name: 'team-members',
    //       path: ':teamId',
    //       component: TeamMembers,
    //       props: true
    //     }
    //   ]
    // },
    // {
    //   path: '/users',
    //   components: {
    //     default: UsersList,
    //     footer: UsersFooter
    //   },
    //   beforeEnter(to, from, next) {
    //     console.log('users beforeEnter');
    //     console.log(to, from);
    //     next();
    //   }
    // },
    // { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
