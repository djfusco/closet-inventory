import { LitElement, html, css } from "lit";
import "https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js";

export class ModelDisplay extends LitElement{
    static styles = css`
    main{
        flex-grow : 1; 
    }
    `;
    render(){
        return html`
        <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="shared-assets/models/NeilArmstrong.glb" ar environment-image="shared-assets/environments/moon_1k.hdr" poster="shared-assets/models/NeilArmstrong.webp" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
        `
    }
}
customElements.define('model-display', ModelDisplay);
