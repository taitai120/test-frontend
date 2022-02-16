import AdminTemplate from "../layout/AdminTemplate";
import { lazy } from "react";

const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    component: lazy(() => import("../layout/Dashboard/Dashboard")),
  },
  {
    exact: false,
    path: "/admin/users-management",
    component: lazy(() => import("../layout/UsersManagement/UsersManagement")),
  },
  {
    exact: false,
    path: "/admin/create-user",
    component: lazy(() => import("../layout/Users/CreateUser/CreateUser")),
  },
  {
    exact: false,
    path: "/admin/edit-user/:id",
    component: lazy(() => import("../layout/Users/EditUser/EditUser")),
  },
];

function renderRoutesAdmin(history) {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        history={history}
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      ></AdminTemplate>
    );
  });
}

export { renderRoutesAdmin };
