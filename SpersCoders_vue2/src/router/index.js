import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import FoodView from '../views/FoodView.vue';
import BarView from '../views/BarView.vue';
import HospitalView from '../views/HospitalView.vue';
import PharmacyView from '../views/PharmacyView.vue';
import MallView from '../views/MallView.vue';
import BankView from '../views/BankView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/search/:search',
      name: 'search',
      component: AboutView
    },
    {
      path: '/food/:food',
      name: 'food',
      component: FoodView
    },
    {
      path: '/bar/:bar',
      name: 'bar',
      component: BarView
    },
    {
      path: '/hospital/:hospital',
      name: 'hospital',
      component: HospitalView
    },
    {
      path: '/pharmacy/:pharmacy',
      name: 'pharmacy',
      component: PharmacyView
    },
    {
      path: '/mall/:mall',
      name: 'mall',
      component: MallView
    },
    {
      path: '/bank/:bank',
      name: 'bank',
      component: BankView
    },
    // {
    //   path: '/map/:map',
    //   name: 'map', // 수정된 부분: name을 'map'으로 지정
    //   component: Map // 수정된 부분: Map 컴포넌트로 변경
    // },
  ]
});

export default router;
