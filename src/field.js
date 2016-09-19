export default class Field {
	constructor(field) {
		this.field = field;
		this.filters = [];
	}

	toJS() {
		return this.filters.map(filter => {
			return [this.field, filter];
		});
	}

	eq(value) {
		this.filters.push(["$eq", value]);
		return this;
	}

	ieq(value) {
		this.filters.push(["$ieq", value]);
		return this;
	}

	ne(value) {
		this.filters.push(["$ne", value]);
		return this;
	}

	lt(value) {
		this.filters.push(["$lt", value]);
		return this;
	}

	le(value) {
		this.filters.push(["$le", value]);
		return this;
	}

	gt(value) {
		this.filters.push(["$gt", value]);
		return this;
	}

	ge(value) {
		this.filters.push(["$ge", value]);
		return this;
	}

	in(value) {
		this.filters.push(["$in", value]);
		return this;
	}

	inSet(value) {
		console.warn("The function inSet() is deprecated, use in().");
		return this.in(value);
	}

	match(expression) {
		this.filters.push(["$match", expression]);
		return this;
	}

	regex(expression) {
		console.warn("The function regex() is deprecated, please use match().");
		return this.match(expression);
	}

	starts(value) {
		this.filters.push(["$starts", value]);
		return this;
	}

	istarts(value) {
		this.filters.push(["$istarts", value]);
		return this;
	}

	ends(value) {
		this.filters.push(["$ends", value]);
		return this;
	}

	iends(value) {
		this.filters.push(["$iends", value]);
		return this;
	}

	intersects(value) {
		this.filters.push(["$intersects", value]);
		return this;
	}

	includes(value) {
		this.filters.push(["$includes", value]);
		return this;
	}
}
