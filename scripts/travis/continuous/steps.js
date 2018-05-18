/********************************
 * TRAVIS CONTINUOUS BUILD STEPS
 ********************************/
const util     = require('util');
const request  = require('request');
const post     = util.promisify(request.post);
const template = require('../../helpers/template-tags');

/* Loggers
 **********/
const log   = console.log.bind(console);
const info  = console.info.bind(console);
const error = console.error.bind(console);

/* Steps
 ********/
const Steps = paths => { // :{}
	return {
		triggerShowcaseBuild(TRAVIS_TOKEN) { // :Promise{} (runs asynchronously)
			info();
			info(template.underline`begin: trigger showcase build`.toUpperCase().alert);
			const opts = {
				url: 'https://api.travis-ci.com/repo/travis-ci%rapid-build-ui/rapid-build-ui.io',
				headers: {
					'content-type':      'application/json',
					'accept':            'application/json',
					'travis-api-version': '3',
					'authorization':     `token ${TRAVIS_TOKEN}`
				},
				body: {
					request: {
						branch: 'continuous'
					}
				}
			};
			return post(opts).then(results => {
				log('POST RESULTS:');
				log(results);
				info(`✔ triggered showcase build`.toUpperCase().success);
				return results;
			}).catch(e => {
				error(template.underline`error: triggering showcase build`.toUpperCase().error);
				error(e);
				process.exit(1);
				return e;
			});
		}
	};
};

/* Export It!
 *************/
module.exports = Steps;
