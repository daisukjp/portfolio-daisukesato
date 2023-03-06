import { Portfolio }  from "../components/service/Portfolio"
// import { Page1DetailA } from "../Page1DetailA";
// import { Page1DetailB } from "../Page1DetailB";

export const portfolioRouter = [
    {
        path: "/",
        exact: true,
        children: <Portfolio />
    },
]