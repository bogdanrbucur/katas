let string = "";

// function to check if a string is balanced, i.e. if all open parantheses are closed
const isBalanced = function (string) {
	let isBalanced = false;
	let strArray = [...string];

	for (let i = 0; i < strArray.length; i++) {
		const char = strArray[i];
		let parantheses = [];
		if (char === "(" || char === "[" || char === "{" || char === "<") {
			parantheses.push(char);
			isBalanced = false;
		}
		if (char === ")" || char === "]" || char === "}" || char === ">") {
			switch (char) {
				case ")":
					if (parantheses[parantheses.length] === "(") {
						parantheses.pop();
						isBalanced = true;
					}
					break;
				case "]":
					if (parantheses[parantheses.length] === "[") {
						parantheses.pop();
						isBalanced = true;
					}
					break;
				case "}":
					if (parantheses[parantheses.length] === "{") {
						parantheses.pop();
						isBalanced = true;
					}
					break;
				case ">":
					if (parantheses[parantheses.length] === "<") {
						parantheses.pop();
						isBalanced = true;
					}
					break;

				default:
					isBalanced = false;
			}
		}
	}
	return isBalanced;
};

console.log(isBalanced("((iop))"));
