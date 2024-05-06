// bubble

function bubble<T>(arr:T[]):T[]{
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if(arr[j]<arr[j+1]){
                let temp=arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr
}

console.log(bubble<number>([91,8,7,6,5,4,3,2,]))

console.log(bubble<number>([1, 2, 3, 4, 5,6, 7, 8, 9]))