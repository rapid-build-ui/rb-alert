/***********
 * RB-ALERT
 ***********/
import { RbBase, props, html } from '../../rb-base/scripts/rb-base.js';
import Converter               from '../../rb-base/scripts/public/props/converters.js';
import template                from '../views/rb-alert.html';
import '../../rb-button/scripts/rb-button.js';

export class RbAlert extends RbBase() {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.version = '0.0.20';
	}
	viewReady() { // :void
		super.viewReady && super.viewReady();
		Object.assign(this.rb.elms, {
			rbButton: this.shadowRoot.querySelector('rb-button')
		});
		this._attachEvents();
	}

	/* Properties
	 *************/
	static get props() {
		return {
			kind: Object.assign({}, props.string, {
				default: 'default'
			}),
			removable: Object.assign({}, props.boolean, {
				deserialize: Converter.valueless
			})
		};
	}

	/* Event Management
	 *******************/
	_attachEvents() { // :void
		this.rb.elms.rbButton.onclick = this._remove.bind(this);
	}

	/* Event Handlers
	 *****************/
	_remove() { // :void
		if (!this.removable) return;
		this.setAttribute('rb-hide',''); // see rb-base -> styles.js
	}

	/* Template
	 ***********/
	render({ props }) {
		return html template;
	}
}

customElements.define('rb-alert', RbAlert);