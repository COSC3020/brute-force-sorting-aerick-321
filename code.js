
function ifsorted(array){
    for(let i = 0; i < array.length-1; i++){
        if (array[i] > array[i +1]){
            return false;
        }
    }
    return true;
}

function permutationSort(a, num) {
    if (a.length<=1) {
        return 1;
    }
    else{
        let count = 0;
        for(let i = num; i < a.length; i++){
             [a[i], a[num]] = [a[num], a[i]];
            permutationSort(a, num +1);
            [a[i], a[num]] = [a[num], a[i]];
            count++;
        }
    }
}
