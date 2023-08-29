import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/accent-card/accent-card.js";

class ItemCard extends LitElement{
    static properties = {
        header: {type: String},
        subheading: {type: String},
        content: {type: String},
        image: {type: String}
    }

    constructor(){
        super(); 
        this.header = "Test"; 
        this.subheading = "Test, Test, Test";
        this.content = "Test Test Test Test Test Test"; 
        this.image = "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200";
    }

    static styles = css`

    main{
        flex-grow: 1;
    }
    `; 

    render(){
        return html`
        <main>
          <accent-card image-src=${this.image} accent-color="red" horizontal accent-heading>
           <div slot="heading">${this.header}</div>
           <div slot="subheading">${this.subheading}</div>
           <div slot="content"><p>${this.content}</p></div>
          </accent-card> 
        </main>
        `
    }

}
customElements.define('item-card', ItemCard); 