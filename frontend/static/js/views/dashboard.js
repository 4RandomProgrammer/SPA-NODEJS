import AbstractView from "./abstractViews.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Dashboard")
    }

    async getHtml(){ 
        return `
            <h1>Welcome back!</h1>
            <p>Idk what is this.</p>
        
        `
    }
}