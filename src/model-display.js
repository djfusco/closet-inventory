import { LitElement, html, css } from "lit";
import "@google/model-viewer/dist/model-viewer.js";
import "./search-widget.js";

export class ModelDisplay extends LitElement{
    static get properties(){
        return {
            items: {type: Array}
        }
    }

    constructor(){
        super();
        this.items = []; 
        this.getUpdateResults(''); 
    }

    getUpdateResults(value = '') {
        const address = `/api/Badge?search=${value}`;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.items = [...data];  
        });
    
      }

      async _handleSearchEvent(e) {
        this.getSearchResults(e.detail.value);
      }
      
    
    static styles = css`
    main{
        flex-grow : 1; 
    }
    `;


    render(){
        return html`
         <div class="searchbox">
           <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
         </div> 
        
        <div class="display">
            ${this.items.map(item => html`
              <model-viewer 
              alt="${item.text}" 
              src="${item.modelsrc}" 
              environment-image="${item.image}" 
              poster="${item.poster}" 
              ar 
              shadow-intensity="1" 
              camera-controls="camera-controls" 
              touch-action="pan-y" 
              style="height: 500px;" 
              ar-status="not-presenting"
              >
          </model-viewer>
            `)}
    
        </div>
        `
    }
}
customElements.define('model-display', ModelDisplay);
