// Your code here
class Polygon {
    constructor(arr){
        this.arr = arr
    }
    get countSides(){
        return this.arr.length
    }
    get perimeter(){
        let sumOfSides = 0;
        this.arr.forEach(side => {
            sumOfSides += side
        });
        return sumOfSides
    }
}

class Triangle extends Polygon {
    get isValid(){
        let sortedArr = this.arr.sort((a,b)=> a-b)
        let maxVal = sortedArr[2];
        if(sortedArr[1]+sortedArr[0] > maxVal){
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get isValid(){
        let initialVal = this.arr[0]
        let isSquare;
        this.arr.forEach(item => {
            if(item === initialVal){
                isSquare = true
            }else{
                isSquare = false
            }
        })
        return isSquare
    }
    get area(){
        return this.arr[0]*this.arr[0]
    }
}