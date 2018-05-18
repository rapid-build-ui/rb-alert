/**************************
 * TRAVIS CONTINUOUS BUILD
 **************************/
require('../../bootstrap/colors');
const args  = process.argv.slice(2);
const paths = {
	component: args[0]
};
const TRAVIS_TOKEN = args[1];
const steps        = require('./steps')(paths);

/* Build Steps: IN ORDER!
 *************************/
!async function() {
	await steps.triggerShowcaseBuild(TRAVIS_TOKEN);
}();