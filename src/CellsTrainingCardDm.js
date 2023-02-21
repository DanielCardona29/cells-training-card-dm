import { LitElement, } from 'lit-element';


import { BGADPCardsGetV0, BGADPCardsCardGetV0 } from '@cells-components/bgadp-cards-v0/bgadp-cards-v0.js';

export class CellsTrainingCardDm extends LitElement {
  static get is() {
    return 'cells-training-card-dm';
  }

  // Declare properties
  static get properties() {
    return {
      host: { type: String, },
      version: { type: String, },
    };
  }


  // Initialize properties
  constructor() {
    super();
    this.host = 'https://artichoke.platform.bbva.com';
    this.version = '0';
  }

  getCards() {

    const config = {
      host: this.host,
      version: this.version
    };


    const _dataProvider = new BGADPCardsGetV0(config);

    //Genera los elemento
    _dataProvider.generateRequest()
      .then((response) => {
        this._fireEvents('request-cards-success', response)
      },
        (error) => {
          this._fireEvents('request-cards-error', error);
        });
  }


  gerCardDetail(id) {

    const config = {
      host: this.host,
      params: { 'card-id': id },
      version: this.version
    };
    const _dataProvider = new BGADPCardsCardGetV0(config);

    //Genera los elemento
    _dataProvider.generateRequest()
      .then((response) => {
        this._fireEvents('card-detail-succes', response);
      },
        (error) => {
          this._fireEvents('card-detail-error', error);
        }
      );
  }

  _fireEvents(eventName, details) {
    this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail: details }));
  }

}
