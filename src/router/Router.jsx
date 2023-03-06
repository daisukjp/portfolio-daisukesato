import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Service from "../components/service/Service";
import Portfolio from "../components/service/Portfolio"
// import { Page404 } from "../Page404";
// import { page1Router } from "./Page1Router";
// import { page2Router } from "./Page2Router";



const Router = () =>  {
return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/service" element={<Service />} />

        </Routes>
    // <Switch>
    //     <Route exact path="/">
    //         <Home />
    //     </Route>

    //     <Route path="/portfolio" render={({ match: {url}}) => (
    //         <Switch>
    //             { portfolioRouter.map((route) => (
    //                 <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
    //                     {route.children}
    //                 </Route>
    //             )) }
    //         </Switch>
    //     )} />

    //     {/* <Route path="/page2" render={({ match: {url}}) => (
    //                 <Switch>
    //                     { page2Router.map((route) => (
    //                         <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
    //                             {route.children}
    //                         </Route>
    //                     )) }
    //                 </Switch>
    //             )} />
    //             <Route path="*">
    //                 <Page404 />
    //             </Route> */}
    // </Switch>
    )
}

export default Router
