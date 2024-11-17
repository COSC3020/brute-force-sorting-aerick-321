
function ifsorted(array){
    for(let i = 0; i < array.length-1; i++){
        if (array[i] > array[i +1]{
            permutationSort(array);
        }
    }
}

function permutationSort(a, num) {
    if (a.length<=1) {
        return 1;
    }
    else{
        for(let i = num; i < a.length; i++){
             [a[i], a[num]] = [a[num], a[i]];
            permutationSort(a, num +1);
            [a[i], a[num]] = [a[num], a[i]];
        }
        
    }
}
