import dashboard from "./views/dashboard";
import Posts from "./views/Posts";
import Settings from "./views/Settings";

const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}


const router = async () => {
    const routes = [
        {path: "/", view: dashboard},
        {path: "/posts", view: Posts},
        {path: "/settings", view: Settings}
        
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHtml();

    console.log(match.route.view());
};

document.addEventListener("DOMContentLoaded", () => {   
    document.body.addEventListener("click", e =>{

        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();

});