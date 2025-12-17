const findTheOldest = function(peopleArr) {
    sortedArr = peopleArr.sort((a, b) => {
        if (a.yearOfDeath == undefined) a.yearOfDeath = (new Date).getFullYear();
        if (b.yearOfDeath == undefined) b.yearOfDeath = (new Date).getFullYear();
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        return bAge - aAge;
    });
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
