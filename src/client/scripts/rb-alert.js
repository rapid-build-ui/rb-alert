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
		this.state = {
			hidden: false
		};
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