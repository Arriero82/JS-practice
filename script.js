
function plusMinus(arr) {
    // Write your code here
    const arrLength = arr.length;
    const positives = [];
    const negatives = [];
    const zeros = [];
    const ratios = [];
    for(num of arr){
        if(num<0){
            negatives.push(num);
        }else if(num>0){
            positives.push(num);
        }else if(num==0){
            zeros.push(num);
        }
    }
    ratios.push((negatives.length/arrLength).toFixed(6),(positives.length/arrLength).toFixed(6),(zeros.length/arrLength).toFixed(6));
    for(rat of ratios){
        console.log(rat);
    }
}

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

timeConversion("07:05:45PM");
