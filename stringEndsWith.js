// Checks if str ends with ending
function solution(str, ending) {
  // convert the strings into arrays of chars and get their length
	strArray = [...str];
	strArrayLen = [...str].length;
	endArray = [...ending];
	endArrayLen = [...ending].length;

	let found = 0;

  // validate if ending is shorter than str
	if (endArrayLen > strArrayLen) {
		return false;
	} else {
    // go backwards from the last char of ending until the first and check if it matches str
		for (let i = 1; i <= endArrayLen; i++) {
			if (endArray[endArrayLen - i] === strArray[strArrayLen - i]) {
				found++;
			}
		}
	}

  // check if all chars from ending match
	if (found === endArrayLen) {
		return true;
	} else return false;
}

console.log(solution("abc","c"));

function solution2(str, ending){
  return str.endsWith(ending);
}