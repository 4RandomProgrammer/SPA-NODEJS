import AbstractView from "./abstractViews.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml(){ 
        return `
            <h1>Settings</h1>
            <p>You are viewing settings</p>
        
        `;
    }
}