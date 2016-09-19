export default class ProjectAPI {
	constructor(client) {
		this.client = client;
	}

	get() {
		return this.client.request(`project`);
	}

	update({ name, subdomain }) {
		var payload = {};

		if(name) {
			payload.name = name;
		}

		if(subdomain) {
			payload.subdomain = subdomain;
		}

		if (Object.keys(payload).length) {
			return this.client.request(`project`, 'PATCH', payload);
		}
	}
}