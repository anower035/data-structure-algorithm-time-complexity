const friends = []
friends.push(10);
friends.push(40);
friends.push(60);
console.log(friends)
const getOne = friends.pop();
console.log(getOne)
console.log(friends)


class Stack{
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item)
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}


const guest = new Stack();
guest.add('suman');
guest.add('kuman')
guest.add('juman')
guest.add('numan')
console.log(guest.stack);
const speaker = guest.remove();
console.log(speaker);
console.log(guest.stack)