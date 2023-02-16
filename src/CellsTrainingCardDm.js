import { LitElement, } from 'lit-element';

export class CellsTrainingCardDm extends LitElement {
  static get is() {
    return 'cells-training-card-dm';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }
}
