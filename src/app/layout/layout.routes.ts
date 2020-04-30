import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

export const layoutroutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      },
      {
        path: "client-setup",
        loadChildren: () =>
          import("./modules/client-setup/client-setup.module").then(
            m => m.ClientSetupModule
          )
      },
      {
        path: "facility",
        loadChildren: () =>
          import("./modules/faclity/facility.module").then(
            m => m.FacilityModule
          )
      },
      {
        path: "user-setup",
        loadChildren: () =>
          import("./modules/user-setup/user-setup.module").then(
            m => m.UserSetupModule
          )
      },
      {
        path: "role-setup",
        loadChildren: () =>
          import("./modules/role-setup/role-setup.module").then(
            m => m.RoleSetupModule
          )
      },
      {
        path: "allocation",
        loadChildren: () =>
          import("./modules/allocation/allocation.module").then(
            m => m.AllocationModule
          )
      },
      {
        path: "configure-dashboard",
        loadChildren: () =>
          import("./modules/configuredashboard/configuredashboard.module").then(
            m => m.ConfiguredashboardModule
          )
      },
      {
        path: "sensor-status",
        loadChildren: () =>
          import("./modules/sensor-status/sensor-status.module").then(
            m => m.SensorStatusModule
          )
      }
    ]
  }
];
