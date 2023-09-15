import { LitElement, html, css } from "lit";
import "@google/model-viewer/dist/model-viewer.js";

export class ModelDisplay extends LitElement{
    static properties = {
        text : {type : String},
        modelsrc : {type : String},
        image : {type : String},
        poster : {type : String},
    }

    constructor(){
        super();
        this.text = "Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum";
        this.modelsrc = "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb";
        this.image = "https://modelviewer.dev/shared-assets/environments/moon_1k.hdr";
        this.poster = "https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp"; 
    }
    
    static styles = css`
    main{
        flex-grow : 1; 
    }
    `;
    render(){
        return html`
        <model-viewer alt= ${this.text} src= ${this.modelsrc} ar="ar" environment-image= ${this.image} poster= ${this.poster} shadow-intensity="1" camera-controls="camera-controls" touch-action="pan-y" style="height: 500px;" ar-status="not-presenting" data-hax-layout="true" role="textbox"></model-viewer>
        `
    }
}
customElements.define('model-display', ModelDisplay);
