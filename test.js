const test = require("ava")
const isCmd = require(".")

test("main", t => {
	t.is(typeof isCmd(), "boolean")
})
