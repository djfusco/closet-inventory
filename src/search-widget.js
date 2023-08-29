import { LitElement, html, css } from 'lit';

export class SearchWidget extends LitElement {
    static get properties() {
      return {
        value: { type: String },
      }
    }
  
    static get styles() {
      return css`
      host:{
        display: block;
        align-items: center;
      }
      input{
        border:none;
        font-family: 'Montserrat', sans-serif;
        width: 300px;
        height: 45px;
        background-color: #F7FAFC;
      }
      `;
    }
  
    constructor() {
      super();
      this.value = 'Placeholder';
    }
  
    render() {
      return html`
        <input type="text" value="${this.value}" @input="${this._handleInput}"/>
      `;
    }
    _handleInput(e) {
      this.value = e.target.value;
      this.dispatchEvent(new CustomEvent('value-changed', {
        detail: {
          value: this.value,
        }
      }));
    }
  }
  
  customElements.define('search-widget', SearchWidget);