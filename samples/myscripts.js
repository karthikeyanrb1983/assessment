// A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
// 1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
// 2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
// 3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
//  - N is an integer within the range [1..100,000];
//  - string S is made only of lowercase letters (a−z).



// function differentCharPresent(str){
//     let strArr = str.split("");
//     for(let i=0;strArr.length-1 > i;i++){
//         if(strArr[i] !== strArr[i+1]) return true;
//     }
//     return false;
// }

// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// This method is used for number of charater accarance
function strTwoObj(str){
    let strArr = str.split("");
    let obj ={}
    for(let i=0;strArr.length > i;i++){
        let key = strArr[i];
        if(!obj.hasOwnProperty(key)) { 
            obj[key] = 1;
         }
        else {
            obj[key] =obj[key] + 1 
        }
    }
    return obj;
}

function differentCharPresentTwoAndEqual(str){
    let obj = strTwoObj(str);
    let keys = Object.keys(obj)
    if(keys.length !== 2) return false;
    if(obj[keys[0]] != obj[keys[1]]) return false;
    // check the consecutive letters
    let compare = str.slice(0,2);
    for(let i=2 ; i < str.length - 2 ; i+=2){
        if(compare != str.slice(i,i+2)) return false;
    }
    return true;
   
}


function balancedCheck(str){
    if(differentCharPresentTwoAndEqual(str)){
        return {
            count : str.length,
            substring :str
        }
    }
    return {
        count : 0,
        substring : ""
    }
}

function balancedString(str){
    let check = 4;
    let balanced = {
        count : 0,
        substring :[]
    };
    if((check >= str.length)) return balanced;
    let newbalanced = balancedCheck(str);
    if(newbalanced.count > balanced.count) {
        balanced.count = newbalanced.count
        balanced.substring.push(newbalanced.substring)
    }
    for(let j=check;j < str.length;j+=2){
        for(let i=0;i <= str.length ; i++){
            let substring = str.substring(i,i + j);
            if(substring.length %2 !== 0) continue;
            let newbalanced = balancedCheck(substring);
            if(newbalanced.count == balanced.count) {
                balanced.count = newbalanced.count
                balanced.substring.push(newbalanced.substring)
            }
            if(newbalanced.count > balanced.count){
                balanced.substring = [];
                balanced.count = newbalanced.count;
                balanced.substring.push(newbalanced.substring);
            }
        }
    }
    return balanced;
}

function balancedStringCheck(){
    var para2 = document.getElementById("para2");
    var input = document.getElementById("str");
    let result = balancedString(input.value);
    result.substring = result.count == 0 ? [] : result.substring;
    para2.innerText =  result.count > 0 ? result.substring : '[]';
    console.log(result);
}

function fibonacciSeries(n) {
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacciSeries(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

function fibonaci(){
    var para1 = document.getElementById("para1");
    var input = document.getElementById("intval");
    let result = fibonacciSeries(+input.value);
    console.log(result);
    para1.innerText = result[result.length -1].toString();
}


function stringcheck(str){
   if (typeof str === 'string') return true;
   return false
}

// console.log(fibonacciSeries(8))






