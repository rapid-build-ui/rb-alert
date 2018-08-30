/***********
 * RB-ALERT
 ***********/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import '../../rb-button/scripts/rb-button.js';
import template from '../views/rb-alert.html';

export class RbAlert extends RbBase() {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.state = {
			hidden: false
		};
	}

	/* Properties
	 *************/
	static get props() {
		return {
			kind: props.string,
			removable: props.boolean
		};
	}

	/* Event Handlers
	 *****************/
	_remove() {
		this.state.hidden = true;
		this.triggerUpdate();
	}

	/* Template
	 ***********/
	render({ props, state }) {
		return html template;
	}
}

customElements.define('rb-alert', RbAlert);