import Home from "@/views/Home";
import Companies from "@/views/Companies";
import CompanyDetail from "@/views/CompanyDetail";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/companies/",
    component: Companies,
    name: "companies",
  },
  {
    path: "/companies/:id",
    component: CompanyDetail,
    name: "companyDetail",
  },
];
