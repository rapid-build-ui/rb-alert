/***********
 * RB-ALERT
 ***********/
import { props, withComponent } from '../../../skatejs/dist/esnext/index.js';
import { html, withRenderer } from './renderer.js';
import '../../rb-button/scripts/rb-button.js';
import template from '../views/rb-alert.html';

class RbAlert extends withComponent(withRenderer()) {
	static get props() {
		return {
			kind: props.string,
			removable: props.boolean
		};
	}

	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.state = {
			hidden: false
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