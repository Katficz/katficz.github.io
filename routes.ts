import type { RouteRecordRaw } from "vue-router";
import IndexPage from "src/pages/IndexPage.vue";
import PlacesAndDrive from "pages/PlacesAndDrive.vue";
import ErrorNotFound from "src/pages/ErrorNotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: IndexPage },
      {
        path: "dojazd",
        name: "dojazd",
        component: PlacesAndDrive,
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: ErrorNotFound,
  },
];

export default routes;
