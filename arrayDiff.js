function arrayDiff(a, b) {
		// keep only what b DOES NOT include
		return a.filter((element) => !b.includes(element));
}