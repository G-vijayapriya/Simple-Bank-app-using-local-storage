class Plant{
    constructor(name){
        this.name = name;
    }
    displayDetails(){
        return "Name: "+name+"|";
    }
    grow(){
        console.log("Plant is growing")
    }
}

class Flower extends Plant{
    constructor(name,color){
        super(name);
        this.color = color;
    }
    displayDetails(){
        return super.displayDetails+"Color: "+this.color;
    }
    bloom(){
        console.log("Flower is blooming");
    }
}

class Tree extends Plant{
    constructor(name,heigth){
        super(name);
        this.heigth = heigth;
    }

    provideShade(){
        console.log("Tree is shade");
    }
}

let f1 = new Flower("Lily","Pink");
console.log(typeof(f1));

let f2 = new Flower();
console.log(typeof(f2));
f2.bloom();
