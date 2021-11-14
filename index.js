//gretest of two
GreatestOfTwoNumbers = (a,b)=>{
    console.log("a,b",a,b)
    return  a>b? a : b;
}
var larger =GreatestOfTwoNumbers(1,2)
console.log(larger)

//-------------------------------------------------------------------------------


//the lengthy word

TheLengthyWord = (word)=>{
var len =0; 
var longword;
for(each of word) {
if(len < each.length){
    len =   each.length;
    longword =each;
}


}
return longword;
}
var word = ["dewwed","jhfu","edfaefs","dfrsfrs"];
var wordlength = TheLengthyWord(word)
console.log("len",wordlength)

//-----------------------------------------------

//net price

NetPrice =(array)=>{
    var total=0;
    array.forEach((each)=>{
        total += each;
    })
    return total;
    }
prize = [1,2,3,4,5]
var price =NetPrice(prize)
console.log("price",price)

//-----------------------------------------------

//generic sum

GenericSum =(array)=>{
    var total=0;
    array.forEach((each)=>{
        if(isNaN(each)){
            total +=each.length
        }else{
        total += each;
        }
    });
    return total;
    }
generic = [1,"df",3,4,5]
var genericsum =GenericSum(prize)
console.log("genericsum",genericsum)
//-----------------------------------------------

//Mid Point

generic = [1,2,3,4,5]
var midpoint = GenericSum(prize)/generic.length;
console.log("midpoint",midpoint)

//-----------------------------------------------

//4.1 Avg of numbers

var avg =NetPrice(prize)/prize.length;
console.log("avg",avg)

////-----------------------------------------------

//4.2  and 4.3 Avg of length of words
avglength =["afs","fea","435534sa"]
avgeragelength = GenericSum(avglength)/avglength.length;
console.log("avg length",avgeragelength.toFixed(1))
////-----------------------------------------------

// 5  unique array
UniqueArray =(array)=>{
    uniq = [...new Set(array)];
    return uniq
}
uniq=["asd","asd","ded","ead","tg"]

uniqearray =UniqueArray(uniq);
console.log("uniq",uniqearray)
////-----------------------------------------------

// 6  search 
SearchElement = (search,element)=>{
   
    const result =  search.filter((word)=>{
        if(word === element) {
           return word;
        }
    });
    console.log("res",result)
    if(result){
        return true;
    }else{
        return false;    
    }

    function checkAdult(age) {
      return age >= 18;
    }

    
}
search=["asd","asd","ded","ead","tg"]

seachelement = SearchElement(search,"ead");
console.log("search",seachelement)
////-----------------------------------------------

// 7  search 
Occourance = (search,element)=>{
   
    const result =  search.filter((word)=>{
        if(word === element) {
           return word;
        }
    });
    return result.length

    
}
repeat = Occourance(search,"asd")
console.log("repeat",repeat)

////-----------------------------------------------

// 8 search 


const multiplyFourNumbers = (a, b, c, d) => {
    return a*b*c*d;
  }
  
  const maximumProduct = (arr) => {
    let maxProduct = 0;
    for(let i =0; i< arr.length; i++) {
      for(let j = 0; j<arr.length; j++) {
        if((j-3) >= 0) {
          let product1 = multiplyFourNumbers(arr[i][j], arr[i][j-1], arr[i][j-2], arr[i][j-3]);
          if(product1 > maxProduct) {
            maxProduct = product1;
          }
        } 
        if((i-3) >= 0) {
          let product2 = multiplyFourNumbers(arr[i][j], arr[i-1][j], arr[i-2][j], arr[i-3][j]);
          if(product2 > maxProduct) {
            maxProduct = product2;
          }
        }
      }
    }
    return maxProduct;
  }
  
  const matrix = [[1,2,3,4,5],
                  [1,25,3,4,5],
                  [1,20,3,4,5],
                  [1,20,3,4,5],
                  [1,4,3,4,5]
                ];
  
  console.log(maximumProduct(matrix));

//-------------------------------------------------------------
//8.1
const maximunProductOfDiagonal = (arr) => {
    let maxProduct = 0;
    for(let i =0; i< arr.length; i++) {
      for(let j = 0; j<arr.length; j++) {
        if((j-3) >= 0 && (i-3) >= 0) {
          let product1 = multiplyFourNumbers(arr[i][j], arr[i-1][j-1], arr[i-2][j-2], arr[i-3][j-3]);
          if(product1 > maxProduct) {
            maxProduct = product1;
          }
        } 
        if((i-3) >= 0 && (j-1) <= 0) {
          let product2 = multiplyFourNumbers(arr[i][j], arr[i-1][j+1], arr[i-2][j+2], arr[i-3][j+3]);
          if(product2 > maxProduct) {
            maxProduct = product2;
          }
        }
      }
    }
    return maxProduct;
  }
  
  console.log(maximunProductOfDiagonal(matrix));