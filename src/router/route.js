import auth from "@/middleware/auth";
import guest from "@/middleware/guest";
import { useAuth } from "../store/auth";

const requireAuth = (to , from , next ) => {
  const { token, user } = useAuth();
  if (token && user) {
    next();
  } else {
    next("/login");
  }
};

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/auth/login/index.vue"),
  },
  {
    path: "/login3",
    name: "login3",
    component: () => import("@/views/auth/login/login3.vue"),
    meta: { requireAuth: true },
    beforeEnter: requireAuth,
  },
  {
    path: "/app",
    name: "Layout",
    redirect: "/app/home",
    component: () => import("@/Layout/index.vue"),
    meta: { requireAuth: true },
    beforeEnter: requireAuth,

    children: [
      {
        path: "blank-page",
        name: "blank-page",
        component: () => import("@/views/blank-page.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("@/views/notifications.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "ecommerce",
        name: "ecommerce",
        component: () => import("@/views/home/ecommerce.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "banking",
        name: "banking",
        component: () => import("@/views/home/banking.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/crm.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "project",
        name: "project",
        component: () => import("@/views/home/project.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "cronograma",
        name: "cronograma",
        component: () => import("@/views/home/cronograma.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "grupo",
        name: "grupo",
        component: () => import("@/views/home/grupo.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "changelog",
        name: "changelog",
        component: () => import("@/views/changelog.vue"),
      },

      // components
      {
        path: "button",
        name: "button",
        component: () => import("@/views/components/button/index.vue"),
        meta: {
          hide: true
        },
      },
      {
        path: "alert",
        name: "alert",
        component: () => import("@/views/components/alert/index.vue"),
        meta: {
          hide: true
        },
      },
      {
        path: "card",
        name: "card",
        component: () => import("@/views/components/card/index.vue"),
        meta: {
          hide: true
        },
      },
      {
        path: "carousel",
        name: "carousel",
        component: () => import("@/views/components/carousel.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "dropdown",
        name: "dropdown",
        component: () => import("@/views/components/dropdown/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "modal",
        name: "dodal",
        component: () => import("@/views/components/modal/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
  
      {
        path: "badges",
        name: "badges",
        component: () => import("@/views/components/badges.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "tooltip-popover",
        name: "tooltip-popover",
        component: () => import("@/views/components/tooltip-popover.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "typography",
        name: "typography",
        component: () => import("@/views/components/typography.vue"),
        meta: {
          hide: true
        },
      },
      {
        path: "colors",
        name: "colors",
        component: () => import("@/views/components/colors.vue"),
        meta: {
          hide: true
        },
      },
      {
        path: "image",
        name: "image",
        component: () => import("@/views/components/image/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "video",
        name: "video",
        component: () => import("@/views/components/video.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "pagination",
        name: "pagination",
        component: () => import("@/views/components/pagination"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "progress-bar",
        name: "progress-bar",
        component: () => import("@/views/components/progress-bar/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "placeholder",
        name: "placeholder",
        component: () => import("@/views/components/placeholder.vue"),
        meta: {
          groupParent: "placeholder",
        },
      },
      // widgets
      {
        path: "basic",
        name: "basic",
        component: () => import("@/views/widgets/basic.vue"),
        meta: {
          groupParent: "widgets",
        },
      },
      {
        path: "statistic",
        name: "statistic",
        component: () => import("@/views/widgets/statistic.vue"),
        meta: {
          groupParent: "widgets",
        },
      },

      // forms
      {
        path: "input",
        name: "Control de caja",
        component: () => import("@/views/forms/input"),
        meta: {
          hide: true
        },
      },
      {
        path: "box-ericka",
        name: "caja-ericka",
        component: () => import("@/views/forms/ericka-box/index"),
        meta: {
          hide: true
        },
      },
      {
        path: "/monexboxes/:label",
        name: "monexboxes",
        component: () => import("@/views/forms/input-mask"),
        meta: {
          hide: true
        }
      },
      
      {
        path: "input-group",
        name: "input-group",
        component: () => import("@/views/forms/input-group"),
        meta: {
          hide: true
        },
      },
      {
        path: "input-layout",
        name: "input-layout",
        component: () => import("@/views/forms/input-layout"),
        meta: {
          hide: true
        },
      },
      {
        path: "form-validation",
        name: "form-validation",
        component: () => import("@/views/forms/form-validation"),
        meta: {
          hide: true
        },
      },
      {
        path: "form-wizard",
        name: "form-wizard",
        component: () => import("@/views/forms/form-wizard"),
        meta: {
          hide: true
        },
      },
      {
        path: "form-repeater",
        name: "form-repeater",
        component: () => import("@/views/forms/form-repeater"),
        meta: {
          groupParent: "forms",
        },
      },

      {
        path: "file-input",
        name: "file-input",
        component: () => import("@/views/forms/file-input"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "checkbox",
        name: "checkbox",
        component: () => import("@/views/forms/checkbox.vue"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "radio-button",
        name: "radio-button",
        component: () => import("@/views/forms/radio-button.vue"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "textarea",
        name: "textarea",
        component: () => import("@/views/forms/textarea"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "switch",
        name: "switch",
        component: () => import("@/views/forms/switch"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "select",
        name: "select",
        component: () => import("@/views/forms/select"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "date-time-picker",
        name: "date-time-picker",
        component: () => import("@/views/forms/date-time-picker"),
        meta: {
          groupParent: "forms",
        },
      },
      // table view
      {
        path: "table-basic",
        name: "table-basic",
        component: () => import("@/views/table/basic"),
        meta: {
          hide: true,
        },
      },
      {
        path: "table-advanced",
        name: "table-advanced",
        component: () => import("@/views/table/advanced"),
        meta: {
          groupParent: "Table",
        },
      },
      // chart
      {
        path: "appex-chart",
        name: "appex-chart",
        component: () => import("@/views/chart/appex-chart"),
        meta: {
          hide: true,
        },
      },
      {
        path: "chartjs",
        name: "chartjs",
        component: () => import("@/views/chart/chartjs"),
        meta: {
          hide: true,
        },
      },
      // app
      {
        path: "calender",
        name: "calender",
        component: () => import("@/views/app/calendar"),
      },
      {
        path: "todo",
        name: "todo",
        component: () => import("@/views/app/todo"),
        meta: {
          hide: true,
          appheight: true,
        },
      },
      {
        path: "kanban",
        name: "kanban",
        component: () => import("@/views/app/kanban"),
        meta: {
          hide: true,
        },
      },
      {
        path: "email",
        name: "email",
        component: () => import("@/views/app/email"),
        meta: {
          groupParent: "Project",
          hide: true,
          appheight: true,
        },
      },
      {
        path: "projects",
        name: "projects",
        component: () => import("@/views/app/projects"),
        meta: {
          hide: true,
        },
      },
      {
        path: "project-details",
        name: "project-details",
        component: () => import("@/views/app/projects/project-details.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "products",
        name: "products",
        component: () => import("@/views/components/tooltip-popover.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "reservas-hotel",
        name: "reservas-hotel",
        component: () => import("@/views/components/index-reservas-hotel.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "products/:id",
        name: "product-details",
        component: () => import("@/views/app/ecommerce/product-details.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("@/views/components/tooltip-popover2.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "wishlist",
        name: "wishlist",
        component: () => import("@/views/components/tooltip-popover3.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "add-product",
        name: "add-product",
        component: () => import("@/views/app/ecommerce/add-product.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "edit-product",
        name: "edit-product",
        component: () => import("@/views/app/ecommerce/edit-product.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "chat",
        name: "chat",
        component: () => import("@/views/app/chat"),
        meta: {
          hide: true,
          appheight: true,
        },
      },
      // normal pages
      {
        path: "invoice",
        name: "invoice",
        component: () => import("@/views/utility/invoice"),
        meta: {
          hide: true
        },
      },
      {
        path: "reserve-preview/:id",
        name: "reserve-preview",
        component: () => import("@/views/utility/invoice/reserve-preview"),
        meta: {
          hide: true,
        },
      },

      {
        path: "recibido-preview",
        name: "recibido-preview",
        component: () => import("@/views/utility/invoice/recibido-preview"),
        meta: {
          hide: true,
        },
      },


      {
        path: "traspaso-preview",
        name: "traspaso-preview",
        component: () => import("@/views/utility/invoice/traspaso-preview"),
        meta: {
          hide: true,
        },
      },
      {
        path: "invoice-edit/:id/",
        name: "invoice-edit",
        component: () => import("@/views/utility/invoice/invoice-edit"),
        meta: {
          hide: true,
        },
        props: true  // Permite que los parámetros de ruta se pasen como props al componente
      },

      {
        path: "invoice-edit2/:id/",
        name: "invoice-edit2",
        component: () => import("@/views/utility/invoice/invoice-edit2"),
        meta: {
          hide: true,
        },
        props: true  // Permite que los parámetros de ruta se pasen como props al componente
      },
      {
        path: "invoice-add",
        name: "invoice-add",
        component: () => import("@/views/utility/invoice/invoice-add"),
        meta: {
          hide: true
        },
      },

      {
        path: "grupo-add",
        name: "grupo-add",
        component: () => import("@/views/utility/invoice/grupo-add"),
        meta: {
          hide: true
        },
      },


      {
        path: '/grupo-edit/:group_id',
        name: 'grupo-edit',
        component: () => import("@/views/utility/invoice/grupo-edit"),
        meta: {
          hide: true,
        },
        props: true  // Permite que los parámetros de ruta se pasen como props al componente

      },

      
      {
        path: '/grupo-preview/:group_id',
        name: "grupo-preview",
        component: () => import("@/views/utility/invoice/grupo-preview"),
        meta: {
          hide: true,
        },
      },



      {
        path: "cuadreshotel-edit",
        name: "cuadreshotel-edit",
        component: () => import("@/views/table/basic/cuadreshotel-edit"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "cuadreshotel-add",
        name: "cuadreshotel-add",
        component: () => import("@/views/table/basic/cuadreshotel-add"),
        meta: {
          groupParent: "Utility",
        },
      },

      {
        path: "cuadreshotel-preview",
        name: "cuadreshotel-preview",
        component: () => import("@/views/table/basic/cuadreshotel-preview"),
        meta: {
          hide: true,
        },
      },

      {
        path: "traspaso-add/:id/:fullname",
        name: "traspaso-add",
        component: () => import("@/views/utility/invoice/traspaso-add"),
        meta: {
          hide: true,
        },
      },

      {
        path: "traspaso-edit/:id/",
        name: "traspaso-edit",
        component: () => import("@/views/utility/invoice/traspaso-edit"),
        meta: {
          hide: true,
        },
        props: true  // Permite que los parámetros de ruta se pasen como props al componente

      },

      {
        path: "recibido-add/:id/:fullname", // Definir la ruta con parámetros dinámicos
        name: "recibido-add",
        component: () => import("@/views/utility/invoice/recibido-add"),
        meta: {
          hide: true,
        },
      },

      {
        path: "recibido-edit/:recibido_id'",
        name: "recibido-edit",
        component: () => import("@/views/utility/invoice/recibido-edit"),
        meta: {
          hide: true,
        },
        props: true  // Permite que los parámetros de ruta se pasen como props al componente

      },
      {
        path: "Pricing",
        name: "pricing",
        component: () => import("@/views/utility/pricing"),
        meta: {
          hide: true
        },
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/views/utility/faq"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "blog",
        name: "blog",
        component: () => import("@/views/utility/blog"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "blog-details",
        name: "blog-details",
        component: () => import("@/views/utility/blog/blog-details"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "testimonial",
        name: "testimonial",
        component: () => import("@/views/utility/testimonial"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "map",
        name: "map",
        component: () => import("@/views/map"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/profile.vue"),
      },
      {
        path: "profile-setting",
        name: "profile-setting",
        component: () => import("@/views/profile.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/settings.vue"),
      },
      {
        path: "icons",
        name: "icons",
        component: () => import("@/views/icons.vue"),
      },
    ],
  },
  {
    path: "/app-guaros",
    name: "LayoutGuaros",
    redirect: "/app-guaros/home-guaros",
    component: () => import("@/Layout/index-guaros.vue"),
    meta: { requireAuth: true },
    beforeEnter: requireAuth,
    children: [
      {
        path: "home-guaros",
        name: "home-guaros",
        component: () => import("@/views/home/project.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "guaros-info",
        name: "guaros-info",
        component: () => import("@/views/app/guaros-info"),
        meta: {
          hide: true,
        },
      },
      {
        path: "tours",
        name: "tours",
        component: () => import("@/views/components/tours/index.vue"),
        meta: {
          hide: true,
        },
      },


    {
      path: "hotels",
      name: "hotels",
      component: () => import("@/views/components/tours copy/index.vue"),
      meta: {
        hide: true,
      },
    },
      {
        path: "tours-caracteristicas",
        name: "tours-caracteristicas",
        component: () => import("@/views/components/tours-caracteristicas/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "packs",
        name: "packs",
        component: () => import("@/views/components/packs/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "sobre-nosotros",
        name: "sobre-nosotros",
        component: () => import("@/views/components/sobre-nosotros/index.vue"),
        meta: {
          hide: true,
        },
      },

      // otras rutas específicas de guaros
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    component: () => import("@/views/utility/comming-soon"),
  },
  {
    path: "/under-construction",
    name: "under-construction",
    component: () => import("@/views/utility/under-construction"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/error.vue"),
  },
];

export default routes;
