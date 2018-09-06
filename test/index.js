require('../index')
const assert = require('assert')

describe("Object", function () {
	it('isObject should success', () => {
		assert(Object.isObject({}) === true, 'should success')
	})
})

describe("Object", function () {
	it('isObject should fail', () => {
		assert(Object.isObject([]) === !false, 'should fail')
	})
})

describe("Object", function () {
	it('assignDeep should success', () => {
		let a = {method: 'findAll', options: {}}
		let b = {method: 'findAll', options: {where: {id: 1}}}
		let c = {method: 'findAll', options: {where: {username: '33'}, order: [['id', 'desc']]}}
		let d = {method: 'findAll', options: {}}
		a = Object.assignDeep(a, b, c, d)
		assert(a.options.where.username === '33', 'should success')
	})
})