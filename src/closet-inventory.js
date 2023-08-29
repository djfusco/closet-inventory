import { LitElement, html, css } from "lit";
import "./item-card.js";
import "./search-widget.js";

export class ClosetInventory extends LitElement{
  static get tag(){
    return 'closet-inventory';
  }
  static get properties(){
    return{
        schoolBadges: {type: Array}
    }   
 }
 constructor(){
  super(); 
  this.schoolBadges = [];
  this.getSearchResults().then((results) => {
      this.schoolBadges = results;
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
  this.schoolBadges = await this.getSearchResults(term);
}

static get styles(){
  return css`
    :host{
      display: block;
    }
    .wrapper{
      display: flex;
      flex-direction: column; 
    }
    .item{
      margin: 5px;
      padding: 10px;
    }
    .searchbox{ 
      padding-left: 300px; 
      padding-top: 100px;
    }

  `;
}

render(){
  return html`
  <div class= "searchbox">
  <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
  </div> 
   <div class= "wrapper">
  ${this.schoolBadges.map(item => html`
  <div class="item">
  <item-card header="${item.header}" subheading="${item.subheading}" content="${item.content}" image="${item.image}"></item-card>
  </div>
  `)}
  </div>
  `
}
}
customElements.define(ClosetInventory.tag, ClosetInventory); 