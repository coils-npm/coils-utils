Object.isObject = function (v) {
	return typeof v === 'function' || v === Object(v) || toString.call(v) === '[object Object]'
}
Object.assignDeep = function (target, ...args) {
	if (Object.isObject(target)) {
		for (let i = 0; i < args.length; i++) {
			Object.keys(args[i]).forEach(key => {
				if (Object.isObject(target[key]) && Object.isObject(args[i][key])) {
					Object.assignDeep(target[key], args[i][key])
				} else {
					target[key] = args[i][key]
				}
			})
		}
		return target
	} else {
		throw new Error('target is not a object')
	}
}