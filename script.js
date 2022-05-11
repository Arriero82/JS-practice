//plusMinus([-5,0,0,1,2,3]);


function miniMaxSum(arr) {
    // Write your code here
    arr.sort();
    let maxArray = arr.slice();
    let minArray = arr.slice();
    maxArray.shift();
    const maxSum = maxArray.reduce((a,b) => a+b);
    minArray.pop();
    const minSum = minArray.reduce((a,b)=>a+b);
    console.log(minSum+" "+maxSum);

}

//miniMaxSum([5,3,2,4,1]);


function timeConversion(s) {
    // Write your code here
    let amPm = s.slice(8,10);
    let time = s.slice(0,2);
    let time24 = s.slice(2);
    time24 = time24.slice(0,6);
    if(amPm=="PM"){
        if(time<12){
            time = parseInt(time)+12;
        }
    }else if(amPm=="AM"){
        if(time==12){
            time = "00";
        }
    }
    s = time+time24;
    return s;
}

//timeConversion("07:05:45PM");

function fizzBuzz(n) {
    // Write your code here
    let i;
    for(let i=1; i<=n;i++){
        if((i%3==0)&&(i%5==0)){
            console.log("FizzBuzz");
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else{
            console.log(i);
        }
    }
    return i;
}

//fizzBuzz(20);

function findMedian(arr) {
    // Write your code here
    function order ( a, b ){ return a - b; };
    arr.sort(order);
    console.log(arr);
    let median = (arr.length/2)-0.5;
    let solution = arr.slice(median,median+1);
    return solution;
}

//console.log(findMedian([0,1,2,8,7,5,9,10,50,1000,2000,1003,5005]));


function lonelyinteger(a) {
    // Write your code here
    function order ( a, b ){ return a - b; };
    a.sort(order);
    const pairs = [];
    const lonely = [];
    for(let i = 0; i<a.length; i++){
        if(a[i]==a[i+1]){
            pairs.push(a[i]);
        }else{
            lonely.push(a[i]);
        }
    }
    for(i=0;i<lonely.length;i++){
        if(pairs[i]!=lonely[i]){
            return lonely[i];
        }
    }
}


console.log(lonelyinteger([1,2,3,4,4,3,2,1,8]));