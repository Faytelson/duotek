import Home from "@/views/Home";
import Companies from "@/views/Companies";
import CompanyDetail from "@/views/CompanyDetail";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/companies",
    component: Companies,
  },
  {
    path: "/companies/:id",
    component: CompanyDetail,
    name: 'companyDetail'
  },
];
