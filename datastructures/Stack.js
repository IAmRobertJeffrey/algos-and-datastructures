export default class Stack
{
	constructor()
	{
		this.collection = []
		this.count = 0;
	}
	push(value)
	{
		this.collection[this.count] = value;
		this.count++;

	}
	pop()
	{
		if (this.collection.length > 0)
		{
			this.collection.splice(this.count - 1, 1)
			this.count--;
		}
	}
}

