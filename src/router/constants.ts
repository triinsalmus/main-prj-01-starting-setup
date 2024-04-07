import { RouteRecordName } from 'vue-router';

interface IRoutes {
  [key: string]: {
    path: string;
    name: RouteRecordName;
    props?: Boolean;
  };
}

export const ROUTES: IRoutes = {
  INDEX: {
    path: '/',
    name: 'index'
  },
  COACHES_LIST: {
    path: '/coaches',
    name: 'coaches'
  },
  /** TO DO: do we need a second path with the same path - use the COACHESLIST path fot this one also **/
  COACH_DETAILS: {
    path: '/coaches/:id',
    name: 'coach'
  },
  CONTACT: { // child for coaches -> /coaches/:id/contact
    path: 'contact',
    name: 'contact'
  },
  REGISTER: {
    path: '/register',
    name: 'register'
  },
  REQUESTS: {
    path: '/requests',
    name: 'requests'
  },
  NOTFOUND: {
    path: '/:notFound(.*)',
    name: 'notFound'
  }
}