import { LitElement, html, css } from 'lit';
import "./item-card.js";

class ClosetInventory extends LitElement {
  static get tag(){
    return 'closet-inventory';
  }
  static get properties(){
    return{
      items: {type: Array}
    }
  }

  static styles = css`
  :host{
    display: block;
  }
  .wrapper{
    border: 2px solid black; 
    display flex; 
  }
  .item{
    display: inline-flex; 
  }
  `;

  constructor() {
    super();
    this.items = []; 
    this.updateIventory();
  }


  render() {
    return html`
    <div class="wrapper">
        ${this.items.map(item => html`
        <div class="item"> 
          <item-card header="${item.header}" subheader="${item.subheader}" content="${item.content}" image="${item.image}"></item-card>
        </div>
        `)}
    </div>
  `
  }
}

customElements.define('closet-inventory', ClosetInventory);