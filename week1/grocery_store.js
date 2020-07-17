var shopper = {
    firstName: "Jesse",
    lastName: "James",
    budget: 50,
    isCash: true,
    cart: ["soap", "toothPaste", "milk", "coffee", "toiletPaper", "bread", "juice"]
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(shopper.fullName)


