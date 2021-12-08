export default class LinkedList
{

	constructor()
	{
		this.head = null;
		this.tail = null;
	}
	append(value)
	{
		const newNode = { value: value, next: null }

		if (this.tail)
		{
			this.tail.next = newNode;
		}
		this.tail = newNode;
		if (!this.head)
		{
			this.head = newNode;
		}
	}
	prepend(value)
	{
		const newNode = { value: value, next: this.head }
		this.head = newNode;

		if (!this.tail)
		{
			this.tail = newNode
		}
	}
	toArray()
	{
		const elements = [];

		let currentNode = this.head;

		while (currentNode)
		{
			elements.push(currentNode)
			currentNode = currentNode.next
		}
		return elements;
	}

	find(value)
	{
		if (!this.head)
		{
			return;
		}
		let currentNode = this.head;

		while (currentNode)
		{
			if (currentNode.value === value)
			{
				return currentNode;
			}
			currentNode = currentNode.next
		}
		return null;
	}
	insertAfter(value, after)
	{
		const existingNode = this.find(after);

		if (existingNode)
		{
			const newNode = { value: value, next: existingNode.next }
			existingNode.next = newNode
		}
		else
		{
			return
		}
	}
	insertBefore(value, before)
	{
		const existingNode = this.find(before)
		let currentNode = this.head;
		if (existingNode)
		{
			while (currentNode)
			{
				if (currentNode.next.value === before)
				{
					const newNode = { value: value, next: before }
					currentNode.next = newNode;
					currentNode.next.next = existingNode
					return;
				}

				currentNode = currentNode.next;
			}


		}
		else
		{
			return
		}
		return
	}

	delete(value)
	{
		if (!this.head)
		{
			return;
		}

		while (this.head && this.head.value === value)
		{
			this.head = this.head.next;
		}

		let currentNode = this.head;

		while (currentNode.next)
		{
			const nextObj = currentNode.next

			if (nextObj.value === value)
			{
				currentNode.next = currentNode.next.next
			}
			else
			{
				currentNode = currentNode.next;
			}
		}

		if (this.tail.value === value)
		{
			this.tail = currentNode
		}

	}

}

// const names = new LinkedList();
// names.append("Rob")
// names.append("Rob")
// names.append("Tom")
// names.append(2);
// names.prepend(5)
// names.delete("Rob")
// names.find("Tom")
// names.insertAfter("Inserted", 5)
// console.log(names.toArray());