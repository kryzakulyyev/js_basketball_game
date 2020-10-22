let arrJohn = [189, 120, 103];
let arrMike = [129, 94, 123];
let scoreJohn = (arrJohn[0] + arrJohn[1] + arrJohn[2]) / 3;
let scoreMike = (arrMike[0] + arrMike[1] + arrMike[2]) / 3;

function whoIsWinner(name1, name2, arr1, arr2){
    let avg1 = Math.floor((arr1[0] + arr1[1] + arr1[2]) / 3);
    let avg2 = Math.floor((arr2[0] + arr2[1] + arr2[2]) / 3);

    if (avg1 > avg2) {
        return `${name1}'s team wins againts to ${name2} with ${avg1} to ${avg2} points`;
    } else if (avg1 < avg2) {
        eturn `${name2}'s team wins againts to ${name1} with ${avg2} to ${avg1} points`;
    } else {
        return `There is a draw for ${name1}'s team and ${name2}'s with ${avg1} and ${avg2} points`;
    }
}

console.log(whoIsWinner("John", "Mike", arrJohn, arrMike));

let arrMarry = [97, 134, 105];

let scoreMary = (arrMarry[0] + arrMarry[1] + arrMarry[2]) / 3;

console.log(scoreJohn, scoreMike, scoreMary);

function winnerIn3Teams(name1, name2, name3, arr1, arr2, arr3) {
    let avg1 = Math.floor((arr1[0] + arr1[1] + arr1[2]) / 3);
    let avg2 = Math.floor((arr2[0] + arr2[1] + arr2[2]) / 3);
    let avg3 = Math.floor((arr3[0] + arr3[1] + arr3[2]) / 3);

    if (avg1 > avg2 && avg1 > avg3) {
        return `${name1}'s team wins againts to ${name2} and ${name3} with ${avg1} to ${avg2} to ${avg3} points`;
    } else if (avg2 > avg1 && avg2 > avg3) {
        return `${name2}'s team wins againts to ${name1} and ${name3} with ${avg2} to ${avg1} to ${avg3} points`;
    } else if (avg3 > avg1 && avg3 > avg1) {
        return `${name3}'s team wins againts to ${name1} and ${name2} with ${avg3} to ${avg1} to ${avg2} points`;
    } else {
        return `There is a draw for ${name1}'s team and ${name2}'s and ${name3}'s with ${avg1} and ${avg2} and ${avg3} points`;
    }
}

console.log(winnerIn3Teams("John", "Mike", "Mary", arrJohn, arrMike, arrMarry));