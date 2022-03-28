import { createRouter, createWebHistory } from "vue-router";
import MovieList from "@/views/MovieList.vue";
import MovieLayout from "@/views/movie/MovieLayout.vue";
import MovieDetails from "@/views/movie/MovieDetails.vue";
import MovieEdit from "@/views/movie/MovieEdit.vue";
import MovieCreate from "@/views/MovieCreate.vue";
import AboutView from "@/views/AboutView.vue";
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/views/NetworkError.vue";
import NProgress from "nprogress";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: MovieList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/movies/:id",
    name: "MovieLayout",
    props: true,
    component: MovieLayout,
    beforeEnter: (to) => {
      store.dispatch("fetchMovie", to.params.id).catch((error) => {
        if (error.response && error.response.status == 404) {
          return {
            name: "404Resource",
            params: { resource: "movie" },
          };
        } else {
          return { name: "NetworkError" };
        }
      });
    },
    children: [
      {
        path: "",
        name: "MovieDetails",
        component: MovieDetails,
      },
      {
        path: "edit",
        name: "MovieEdit",
        component: MovieEdit,
      },
    ],
  },
  {
    path: "/movie/create",
    name: "MovieCreate",
    component: MovieCreate,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/:catchAll(.*)",
    name: NotFound,
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior() {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { top: 0 };
  //   }
  // },
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
