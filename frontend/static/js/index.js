const router = async () => {
    const routes = [
        {path: "/", view: () => console.log('viewing dashboard')},
        {path: "/posts", view: () => console.log('viewing Posts')},
        {path: "/settings", view: () => console.log('viewing Dashboard')},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)

    if(!match){
        match = {
            route: routes[0]
        };
    }

    console.log(potentialMatches)
};

document.addEventListener("DOMContentLoaded", () => {

    router();

});