export default class Queue
{
	constructor()
	{
		this.collection = [];
		this.count = 0;
	}
	enqueue(value)
	{
		for (let i = this.count - 1; i >= 0; i--)
		{
			this.collection[i + 1] = this.collection[i];
		}

		this.collection[0] = value;
		this.count++;
	}
	dequeue()
	{
		for (let i = 0; i < this.count - 1; i++)
		{
			this.collection[i] = this.collection[i + 1]
		}

		if (this.collection.length > 0)
		{
			this.collection.splice(-1, 1)
			this.count--;
		}
	}

}