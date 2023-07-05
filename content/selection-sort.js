import {generateRandomNumArray} from "../helpers/generate-random-num-array.js";

const arr = generateRandomNumArray(150)

const selectionSort = (arr) => {
    let n = arr.length

    for (let i = 0; i < n; i++) {
        // Finding smallest element in the right part of array
        let min = i
        for (let j = i; j < n; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            // Changing element
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp
        }
    }
    return arr
};

const sorted = selectionSort(arr)
console.log(sorted)


/*
--- Explanation:

-- English:

Selection sort is a simple sorting algorithm that works by dividing the input array into two parts:
the sorted part at the left end and the unsorted part at the right end.
It repeatedly selects the smallest element from the unsorted part and swaps it with the leftmost element in the unsorted part.
This way, the sorted part grows from left to right until the whole array is sorted.

-- Russian:

Сортировка выбором - это простой алгоритм сортировки, который работает путем разделения входного массива на две части:
отсортированную часть в левом конце и неотсортированную часть в правом конце.
Он многократно выбирает наименьший элемент из неотсортированной части и меняет его местами с самым левым элементом в неотсортированной части.
Таким образом, отсортированная часть растет слева направо, пока весь массив не будет отсортирован.
*/






