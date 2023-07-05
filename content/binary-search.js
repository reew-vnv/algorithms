import {generateSortedRandomNumArray} from "../helpers/generate-sorted-random-num-array.js";

// Randomly generated sorted array of numbers
const arr = generateSortedRandomNumArray(300)

const binarySearch = (arr, key) => {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) /  2)
        let guess = arr[mid]

        if (guess === key) {
            return mid
        } else if (guess > key) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return 'Key not found'
}


const result = binarySearch(arr, 77)
console.log(result)


/*
 --- Explanation:

 -- English:

 Binary search works by comparing the target element with the middle element of a sorted array
 and narrowing down the search range by excluding the half of the array in which the target element cannot reside.
 It continues dividing the remaining range in half until the element is found or the search range becomes empty.


 -- Russian:

 Бинарный поиск работает путем сравнения искомого элемента с элементом в середине массива,
 и затем сужает область поиска путем исключения половины массива,
 в которой искомый элемент не может находиться, продолжая делить оставшуюся область пополам до тех пор,
 пока элемент не будет найден или пока область поиска не станет пустой.

 */
