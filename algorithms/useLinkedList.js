import LinkedList from "../datastructures/LinkedList.js";
import Stack from "../datastructures/Stack.js";
import Queue from '../datastructures/Queue.js'

const names = new LinkedList();

// names.append("Hi")
// names.append("Hey")
// names.append("Hello")
// names.insertBefore("Before Hello", "Hey")
// console.log(names.toArray());

const stackOfNames = new Stack()




const queueOfNames = new Queue();

queueOfNames.enqueue("Robert")
queueOfNames.enqueue("Tom")
queueOfNames.enqueue("Henry")
queueOfNames.enqueue("John")
queueOfNames.enqueue("Tommy")
queueOfNames.dequeue()
queueOfNames.dequeue()

console.log(queueOfNames);