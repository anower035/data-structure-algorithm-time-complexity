class Node {
      constructor(value){
          this.value = value;
          this.next = null;
          this.previous = null;
      }
}
class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.value === value){
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(1500);
const mBondon = new LinkedList(head);
mBondon.add('27')
mBondon.add('35')
mBondon.add('47')
mBondon.add('55')
console.log(JSON.stringify(mBondon));