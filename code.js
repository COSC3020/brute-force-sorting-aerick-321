function ifsorted(array){
    for(let i = 0; i < array.length-1; i++){
        if (array[i] > array[i +1]){
            return false;
        }
    }
    return true;
}

function permutationSort(a, num=0) {
    if (num === a.length - 1) {
        return 1;
    }

    let count = 0;
    for(let i = num; i < a.length; i++){
        [a[i], a[num]] = [a[num], a[i]];
        count += permutationSort(a, num + 1);
        
        if (ifsorted(a)) {
            break;
        }

        [a[i], a[num]] = [a[num], a[i]];
    }
    return count;
}
