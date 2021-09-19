/* 
    FizzBuzz問題
    minNum~maxNumまでの数を表示するスクリプト
    pairMultpleWordのkeyの倍数のときは、そのvalueを出力する。
    公倍数の場合は連結して出力される。
 */

// 倍数と出力ワードのペア
let pairMultipleWord = new Map([
    [3, 'Fizz'], 
    [5, 'Buzz']
]);
// 繰り返しの最小数と最大数
let minNum = 1;
let maxNum = 20;
// 改行
const br = '<br>'

for (let i = minNum; i <= maxNum; i++){
    let output = '';
    for (let [multiple, word] of pairMultipleWord){
        if (i % multiple == 0){
            output += word;
        }
    }
    if (output == ''){
        console.log(i);
        document.write(i + br);
    }else{
        console.log(output);
        document.write(output + br);
    }  
}