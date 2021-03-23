class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift()
        }
    }
}

const food = new Queue();
food.enqueue('cake');
food.enqueue('biscuit');
food.enqueue('chanachur');
food.enqueue('chips');
console.log(food.queue)

const winner = food.dequeue();
console.log(winner);
console.log(food.queue)