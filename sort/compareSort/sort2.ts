// 梳排序

function comb<T>(arr: T[]): T[] {
    let j = arr.length, s: number = 1.3, flag: boolean = false;
    while (j > 1 || flag == true) {
        let i = 0;
        j = Math.max((j / s), 1), flag = false;
        while (i + j <= arr.length) {
            if (arr[i] > arr[i + j]) {
                const temp = arr[i]
                arr[i] = arr[i + j];
                arr[i + j] = temp
                flag = true
            }
            i++;
        }
    }
    console.log(arr)
    return arr
}

comb<number>([9, 8, 7, 6, 5, 4, 3, 2,])
comb<number>([2, 3, 4, 5, 6, 7, 8, 9])