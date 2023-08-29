import { html } from 'lit';
import '../src/closet-inventory.js';

export default {
  title: 'ClosetInventory',
  component: 'closet-inventory',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <closet-inventory
      style="--closet-inventory-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </closet-inventory>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
