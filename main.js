//#region task 1 
function SplitWord(sentence){
    return sentence.split(' ')
}
console.log(SplitWord("Ayxan Musali"));
//#endregion

//#region task 2
// function truncate_string(word,count){
//     return word.slice(0,count)
    
// }
// console.log(truncate_string("Robin Singh", 2));
//#endregion

//#region task 3
// function protect_email(email) {
//     let username = email.split('@')[0].slice(0, 5) + '...';
//     return username + email.slice(email.indexOf('@'));
//   }
  
//   console.log(protect_email("robinsinghaa@example.com"));
//#endregion

//#region task 4
// function  RepeatedString(word,count){
//     let result = "";
//     if ( count < 1 || !Number.isInteger(count)) { //googledan arasdirib baxdim-(how to  check if count is exist or not..)
//         return 'Error in string or count.';}
//     for (let index = 0; index < count; index++) {
//         result = result + word; 
//     }
//     return result;
// }
// console.log(RepeatedString("Ayxan"));

//#endregion 

//#region task 5
// function FindString(sentence,word){
//     let count = 0;
//     for (const iterator of sentence) {
//         if(iterator == word){
//             count++         
//         }
//         return `The "a" was found ${count} times`
        
//     }
// }
// console.log(FindString('a,b,c,s','a'));

//#endregion

