import AbstractView from "./abstractViews.js";

export default class extends AbstractView {
    constructor(params){
        super(params);
        this.setTitle("Posts");
    }

    async getHtml(){ 
        return `
            <h1 class="text-4xl font-bold">Posts</h1>
            <p>You are viewing posts</p>
        
        `;
    }
}