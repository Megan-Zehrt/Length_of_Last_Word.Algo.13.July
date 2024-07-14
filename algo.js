// 58. Length of Last Word



// Given a string s consisting of words and spaces, return the length of the last word in the string.
// a word is a maximal substring consisting of non-space characters only.








/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let sorted = s.split(' ')

    for(let i = sorted.length-1; i < sorted.length; i--){
        
        if(sorted[i] == ''){
            continue
        }else{
            return sorted[i].length
        }
    }
};