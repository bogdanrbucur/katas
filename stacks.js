class Stack {
	constructor() {
		this.items = [];
		this.size = 0;
	}
	push(item) {
		this.items.push(item);
		this.size++;
	}
	pop() {
		this.items.pop();
		this.size--;
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		if (this.size === 0) return true;
		return false;
	}
}

let string = "null";
// let array = [...string];

let reverseString = function (string) {
	if (typeof string !== "string") throw new Error("Input is not string!");

	let array = [...string];
	let reversed = "";

	let i = array.length - 1;
	while (i >= 0) {
		reversed += array[i];
		i--;
	}

	return reversed;
};

// let stack = new Stack();
// for (let i = 0; i < array.length; i++) {
//   stack.push(array[i]);
// }

// while (!stack.isEmpty()) {
// 	console.log(stack.peek());
// 	stack.pop();
// }
// console.log(stack);

console.log(reverseString(string));
