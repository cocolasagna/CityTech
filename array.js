//Using bubble Sort as I am confident to solve with it.
//Time Complexity is higher 

function countInversion(arr){
    if(arr.length <=1) {
        console.log('Count = 0' )
    }
    else{
        console.log('arr:',arr)
        let inv = 0 
        const n  = arr.length
        for(let i  = 0 ; i <n ; i++){
            for(let j = 0 ; j <n-1 ;j++){
                if(arr[j]> arr[j + 1]){
                    [arr[j] , arr[j+1]] = [arr[j+1 ] , arr[j]] 
                    
                    inv ++  //Increasing the count after every swap made
                }
            }
        }
        console.log(`count = ${inv}`)
    }

}

const array = [2 ,4 ,1 ,3 ,5]
countInversion(array)