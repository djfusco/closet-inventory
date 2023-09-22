import { LitElement, html, css } from "lit";
import "@google/model-viewer/dist/model-viewer.js";
import "./search-widget.js";

export class ModelDisplay extends LitElement{
    static get properties(){
        return {
            money: {type: Array}
        }
    }

    constructor(){
        super();
        this.money = []; 
        this.getSearchResults().then((results) => {
            this.money = results;
        });
    }

    async getSearchResults(value = '') {
        const address = `/api/Badge?search=${value}`;
        const results = await fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            return data;
        });
      
        return results;
      }

      async _handleSearchEvent(e) {
        const term = e.detail.value;
        this.money = await this.getSearchResults(term);
      }
      
    
    static styles = css`
    main{
        flex-grow : 1; 
    }
    `;


    render(){
        return html`
         <div class= "searchbox">
         <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
         </div> 
        <model-viewer alt= ${this.text} src= ${this.modelsrc} ar="ar" environment-image= ${this.image} poster= ${this.poster} shadow-intensity="1" camera-controls="camera-controls" touch-action="pan-y" style="height: 500px;" ar-status="not-presenting" data-hax-layout="true" role="textbox"></model-viewer>
        `
    }
}
customElements.define('model-display', ModelDisplay);
