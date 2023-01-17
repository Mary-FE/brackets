module.exports = function check(str, config) {
  function getNewString(strArr, config) { 
    for(let i = 0; i < strArr.length; i++) { 
      for(let j = 0; j < config.length; j++) { 
          if (strArr[i] === config[j][0] && strArr[i + 1] === config[j][1]) { 
              strArr.splice(i, 2); 
          } 
      } 
    } 
 
    return strArr.join(''); 
  } 
 
  function checkCorrect(str, config) { 
    let   strArr = str.split(''), 
          lenBefore = strArr.length, 
          newStr = getNewString(strArr, config), 
          lenAfter = newStr.length; 
 
    while(lenBefore !== lenAfter) { 
          lenBefore = lenAfter; 
          newStr = getNewString(newStr.split(''), config); 
          lenAfter = newStr.length; 
    } 

    return lenBefore === lenAfter && lenAfter !== 0 ? false : true;
  }

  return checkCorrect(str, config); 
}
