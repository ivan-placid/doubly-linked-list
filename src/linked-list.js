const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0
        this._head = null;
        this._tail = null;
    }


// should assign any nodes to this._head and this._tail if list is empty
// should add new data to the end of list
    append(val){
        var head = this._head,
        current = head,
        previous = head;
        if(!head){
            this._head = new Node(val);
            this._tail = this._head;
        }
        else{
            while(current && current.next){
                previous = current;
                current = current.next;
            }     
            current.next = new Node(val, current, null);
            this._tail = current.next;
        }
        this.length++

        return this;
    }


    head() {
        return (this._head) ? this._head.data : null
    }

    tail() {
        return (this._tail) ? this._tail.data : null
    }

    at(index) {

        var current = this._head,
        previous;
        let i= 0 ;

        while(i <= index){
            previous = current;
            current = current.next;
            i++;
        }
        return previous.data

    }



    insertAt(index, data) {


        if (this.length === 0) {
            this.append(data)
            return this

        }

        var newNode = new Node(data);
        var current = this._head,
        previous;
        let i= 0 ;

        while(i < index){
            previous = current;
            current = current.next;
            i++;
        }

        var current = previous;
        newNode.next = current.next;

        console.log(newNode);

        current.next.prev = newNode
        current.next = newNode

        return this;

    }





    isEmpty() {
        return (this.length === 0)
    }

    clear() {

        this.length = 0
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        var current = this._head,
        previous;
        if(index === 0){
            this._head = current.next;
            if(this._head) this._head.previous = null;
            return this;
        }


        let i= 0;
        if(index !== this.length - 1){
            while(i < index){
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
            current.next.previous = previous;
            
        } else {
            previous.next = null;
        }
        return this;
    }





    reverse() {

        var head = this._head,
        current = this._head,
        tmp;
        while(current){
            tmp = current.next;
            current.next = current.prev;
            current.prev = tmp;
            if(!tmp){
                //set the last node as header
                this._head = current;
                this._tail = head;
                // console.log(current.data);
            }
            current = tmp;
        }
        return this;
    }



    indexOf(data){
        var current = this._head,
            previous;
        
        var i = 0;
        while(current.next){
            if(current.data === data){
                return i;
            }
            previous = current;
            current = current.next;
            i++
        }
        

        if(current.data == data){
            return i;
        }


        return -1
        
    }


}

module.exports = LinkedList;

