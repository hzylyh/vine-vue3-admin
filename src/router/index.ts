import { type RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const Layouts = () => import("@/layout/index.vue")

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/redirect",
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/RedirectIndex.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      },
      {
        path: "user",
        component: () => import("@/views/system/user/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          svgIcon: "user",
          affix: true
        }
      },
      {
        path: "role",
        component: () => import("@/views/system/role/index.vue"),
        name: "Role",
        meta: {
          title: "角色管理",
          svgIcon: "role",
          affix: true
        }
      },
      {
        path: "permission",
        component: () => import("@/views/system/permission/index.vue"),
        name: "Permission",
        meta: {
          title: "权限管理",
          svgIcon: "permission",
          affix: true
        }
      }
    ]
  },
  {
    path: "/link",
    component: Layouts,
    children: [
      {
        path: "https://juejin.cn/post/7089377403717287972",
        component: () => {},
        name: "Link",
        meta: {
          title: "外链",
          svgIcon: "link"
        }
      }
    ]
  }
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
// export const asyncRoutes: RouteRecordRaw[] = [
//   {
//     path: "/permission",
//     component: Layouts,
//     redirect: "/permission/page",
//     name: "Permission",
//     meta: {
//       title: "权限管理",
//       svgIcon: "lock",
//       roles: ["admin", "editor"], // 可以在根路由中设置角色
//       alwaysShow: true // 将始终显示根菜单
//     },
//     children: [
//       {
//         path: "page",
//         component: () => import("@/views/permission/page.vue"),
//         name: "PagePermission",
//         meta: {
//           title: "页面权限",
//           roles: ["admin"] // 或者在子导航中设置角色
//         }
//       },
//       {
//         path: "directive",
//         component: () => import("@/views/permission/directive.vue"),
//         name: "DirectivePermission",
//         meta: {
//           title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
//         }
//       }
//     ]
//   },
//   {
//     path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
//     redirect: "/404",
//     name: "ErrorPage",
//     meta: {
//       hidden: true
//     }
//   }
// ]

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === "hash"
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
