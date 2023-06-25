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
	// O(n)
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
	// O(1)
	removeFirst() {
		if (this.isEmpty()) {
			throw new Error("Linked list is empty");
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
			throw new Error("Linked list is empty");
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
	//  O(n)
	getPrevious(node) {
		if (node === this.first) return null;

		let current = this.first;
		while (current !== null) {
			if (current.next === node) return current;
			current = current.next;
		}
		return null;
	}
	// O(n)
	toArray() {
		let array = [];
		let current = this.first;
		while (current !== null) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}
	// O(n)
	reverse() {
		let origFirst = this.first;
		let origLast = this.last;

		// go from end to beginning
		let current = origLast;
		while (current !== null) {
			// store the original previous node, if there is one
			let origPrev;
			this.getPrevious(current) ? (origPrev = this.getPrevious(current)) : (origPrev = null);

			// change the next reference to point to the previous node
			current.next = this.getPrevious(current);

			// move on to the previous node
			current = origPrev;
		}
		this.first = origLast;
		this.last = origFirst;
	}
	// return Kth node from the end
	// O(n)
	getKthFromTheEnd(k) {
		if (k > this.size) throw new Error("Argument is larger than list size!");
		if (k <= 0) throw new Error("Invalid argument!");
		if (k === this.size) return this.first;

		// start from the last node and go back k-1 times
		let current = this.last;
		for (let i = 0; i < k - 1; i++) {
			current = this.getPrevious(current);
		}
		return current;
	}

	// fast and slow pointer algorithm
	// O(n)
	getMiddle() {
		if (this.fist === this.last) return this.first;

		let fast = this.first;
		let slow = this.first;

		// until fast reaches the tail of the list
		while (fast !== this.last) {

			// if below is true, it means even number of nodes
			if (fast.next.next === null) {
				// so return both middle values
				return [slow, slow.next];
			}

			// fast goes 2 positions forward and slow 1
			fast = fast.next.next;
			slow = slow.next;
		}
		return slow; // return middle node for odd no. of nodes
	}
}

let list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.addLast(60);
list.addLast(70);
list.addLast(80);
list.addLast(80);
list.addFirst(5);

// console.log(list);
// list.removeFirst();
// list.removeLast();
// console.log(list);
// console.log(list.indexOf(10));
// console.log(list.contains(5));
// console.log(list.toArray());
list.reverse();
console.log(list.toArray());
// console.log(list);
console.log(list.getSize());
console.log(list.getKthFromTheEnd(3).value);
console.log(list.getMiddle());
