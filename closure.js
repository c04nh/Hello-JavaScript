function makeCounterFunction(initval){
    var count = initval;
    function Increase(){
        count++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(11);

counter1();
counter2();