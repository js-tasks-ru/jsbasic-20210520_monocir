import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.createCard();
    this.createImage();
    this.createSpan();
    this.createBody();
    this.createButton();
    // this.onClickItem();
    // console.log(this.product.id);
  };

  createCard() {
    this.elem = document.createElement('div');
    this.elem.className = 'card';
    this.cardTop = document.createElement('div');
    this.cardTop.className = 'card__top';
    this.elem.appendChild(this.cardTop);
  };

  createImage() {
    this.cardImg = document.createElement('img');
    this.cardImg.className = 'card__image';
    this.cardImg.src = (`/assets/images/products/${this.product.image}`);
    this.cardTop.appendChild(this.cardImg);
  };

  createSpan() {
    this.cardSpan = document.createElement('span');
    this.cardSpan.className = 'card__price';
    this.cardSpan.innerHTML = (`&#8364;${this.product.price.toFixed(2)}`);
    this.cardTop.appendChild(this.cardSpan);
  };

  createBody() {
    this.cardBody = document.createElement('div');
    this.cardBody.className = 'card__body';
    this.cardTitle = document.createElement('div');
    this.cardTitle.className = 'card__title';
    this.cardTitle.innerHTML = `${this.product.name}`;
    this.elem.appendChild(this.cardBody);
    this.cardBody.appendChild(this.cardTitle);
  };

  createButton() {
    this.cardButton = document.createElement('button');
    this.cardButton.addEventListener('click', this.onClickItem.bind(this));
    this.cardButton.className = 'card__button';
    this.buttonImg = document.createElement('img');
    this.buttonImg.src = '/assets/images/icons/plus-icon.svg';
    this.cardBody.appendChild(this.cardButton);
    this.cardButton.appendChild(this.buttonImg);
  };


  onClickItem(ev) {
    const event = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true,
    });
    this.elem.dispatchEvent(event);
  };

};
