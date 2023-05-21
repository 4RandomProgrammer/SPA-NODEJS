import AbstractView from "./abstractViews.js";

export default class extends AbstractView {
    constructor(params){
        super(params);
        this.setTitle("Settings");
    }

    async getHtml(){ 
        return `
            <h1 class="text-4xl font-bold">Settings</h1>
            <p>You are viewing settings</p>
        `;
    }
}