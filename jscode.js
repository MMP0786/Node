let num =123456;
let sum =0;
let rev =0;
let count=0;

while(num!=0){
    data = num%10;
    sum = sum+data;
    rev = rev*10 +data;
    count++
    num = Math.floor(num/10);
}

console.log(count, sum, rev)