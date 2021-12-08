import LinkedList from "../datastructures/LinkedList.js";

const names = new LinkedList();

names.append("Hi")
names.append("Hey")
names.append("Hello")
names.insertBefore("Before Hello", "Hey")
console.log(names.toArray());