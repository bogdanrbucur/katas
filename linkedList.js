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
			this.first = null;
			this.last = null;
			this.size -= 1;
		} else {
			this.first = this.first.next;
			this.size -= 1;
		}
	}
	removeLast() {
		if (this.isEmpty()) {
			throw new console.error("Linked list is empty");
		}
		if (this.first == this.last) {
			// TODO
		}
	}
}

let list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addFirst(5);

console.log(list);
list.removeFirst();
console.log(list.getSize());
console.log(list.indexOf(10));
console.log(list.contains(5));
