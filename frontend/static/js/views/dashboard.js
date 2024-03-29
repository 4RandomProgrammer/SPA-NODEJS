import AbstractView from "./abstractViews.js";

export default class extends AbstractView {
    constructor(params){
        super(params);
        this.setTitle("Dashboard")
    }

    async getHtml(){ 
        return `
            <h1 class="text-4xl font-bold">Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts" class="" data-link>View recent posts</a>.
            </p>
        `;
    
    }
}