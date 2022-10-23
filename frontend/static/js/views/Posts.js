import AbstractView from "./abstractViews.js";

export default class extends AbstractView {
    constructor(params){
        super(params);
        this.setTitle("Posts");
    }

    async getHtml(){ 
        return `
            <h1>Posts</h1>
            <p>You are viewing posts</p>
        
        `;
    }
}