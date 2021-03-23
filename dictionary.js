class dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
       return this.dictionary[key];
    }
}

const phoneBook = new dictionary();
phoneBook.add('mahi','0182233456');
phoneBook.add('apu','0192333450');
phoneBook.add('Purnima','0172233296');
phoneBook.add('Sakib','0152233256');
console.log(phoneBook.dictionary)
const number = phoneBook.get('apu');
console.log(number)