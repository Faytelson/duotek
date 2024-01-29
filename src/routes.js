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
    props: (route) => ({ query: route.query.search }),
  },
  {
    path: "/companies/:id",
    component: CompanyDetail,
    name: "companyDetail",
  },
];
