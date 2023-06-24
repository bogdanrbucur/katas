class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(first = null) {
		this.first = first;
		this.last = null;
		this.size = 0;
	}
	isEmpty() {
		return this.size === 0;
	}
	getSize() {
		return this.size;
	}

	// O(1)
	addLast(value) {
		let node = new Node(value);

		if (this.first === null) {
			this.first = this.last = node;
			this.size += 1;
		} else {
			this.last.next = node;
			this.last = node;
			this.size += 1;
		}
	}

	// O(1)
	addFirst(value) {
		let node = new Node(value);

		node.next = this.first;
		this.first = node;
		this.size += 1;
	}
	indexOf(item) {
		let index = 0;
		let current = this.first;
		while (current !== null) {
			if (current.value === item) return index;
			current = current.next;
			index += 1;
		}
		return -1;
	}
	contains(item) {
		return this.indexOf(item) != -1;
	}
	// 5 -> 10 -> 20
	removeFirst() {
		if (this.isEmpty()) {
			throw new console.error("Linked list is empty");
		}
		if (this.first == this.last) {
			this.first = this.last = null;
			this.size = 0;
		} else {
			this.first = this.first.next;
			this.size -= 1;
		}
	}
	// O(n)
	removeLast() {
		if (this.isEmpty()) {
			throw new console.error("Linked list is empty");
		}
		if (this.first == this.last) {
			this.first = this.last = null;
			this.size = 0;
		} else {
			let previous = this.getPrevious(this.last);
			previous.next = null;
			this.last = previous;
			this.size -= 1;
		}
	}
	//  5 -> 10 -> 20 -> 30
	getPrevious(node) {
		if (node === this.first) return null;

		let current = this.first;
		while (current !== null) {
			if(current.next === node) return current;
			current = current.next;
		}
		return null;
	}
	toArray(){
		let array = [];
		let current = this.first;
		while(current !== null) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}
}

let list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addFirst(5);

console.log(list);
list.removeFirst();
list.removeLast();
console.log(list);
console.log(list.getSize());
console.log(list.indexOf(10));
console.log(list.contains(5));
console.log(list.toArray())