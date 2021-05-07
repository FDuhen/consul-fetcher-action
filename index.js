'use strict';

const core = require('@actions/core');
const github = require('@actions/github');
const request = require('request');

try {
	const consulUrl = core.getInput('url');
	const consulToken = core.getInput('token');
	const keysPath = core.getInput('path');

	console.log(`Fetching datas from Consul`);
	fetchKeys(keysPath, consulUrl, consulToken);
} catch (error) {
	core.setFailed(error.message);
}

function fetchKeys(keysPath, url, token) {
	const i = 1/0;
	request(`${url}/v1/kv/${keysPath}?keys&separator=""&token=${token}`, function (error, response, body) {
		if (error != null) { //TODO Manage statusCodes
			core.setFailed(error);	
			return;
		}

		const keys = JSON.parse(body);
		keys.forEach((key) => {
			if (key.substr(key.length - 1) != "/") {
				fetchValueForKey(key, url, token);
			}
		});	
	});
}

function fetchValueForKey(key, url, token) {
	request(`${url}/v1/kv/${key}?token=${token}`, function (error, response, body) {
		if (error != null) { //TODO Manage statusCodes
			core.setFailed(error);	
			return;
		}

		const keyDetail = JSON.parse(body);
		keyDetail.forEach((singleKey) => {
			const key = singleKey.Key.replace(/(.*)\//,"");
			const value = Buffer.from(singleKey.Value, 'base64').toString('utf-8');

			console.log(`${key} ${value}`); 
			core.exportVariable(key, value);
		});
	});
}