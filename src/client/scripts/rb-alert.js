/***********
 * RB-ALERT
 ***********/
import { Element as PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
import template from '../views/rb-alert.html';

export class RbAlert extends PolymerElement {
	/* Lifecycle
	 ************/
	constructor() {
		super();
	}

	ready() {
		super.ready();
	}

	/* Properties
	 *************/
	static get properties() {
		return {
			kind: {
				type: String,
				value: 'default'
			},
			removable: {
				type: Boolean,
				value: false
			}
		}
	}

	/* Computed Bindings
	 ********************/
	_removable(removable) {
		return removable ? 'removable' : null
	}

	/* Event Handlers
	 *****************/
	_remove() {
		this.classList.add('hide');
	}

	/* Template
	 ***********/
	static get template() { // :string
		return template;
	}
}

customElements.define('rb-alert', RbAlert);
