// Test Task in Radency internship

const stringChecker = function (s, p1, p2) {
  const coppyS = [...s];
  const coppyP1 = [];
  const coppyP2 = [];
  const resultWord = [];
  const index = 0;

  [...p1].filter((el) => {
    if (el !== ' ') {
      coppyP1.push(el);
    }
  });

  [...p2].filter((el) => {
    if (el !== ' ') {
      coppyP2.push(el);
    }
  });
  if (
    [...p1].length + [...p2].length > s.length ||
    [...p1].length + [...p2].length < s.length
  )
    return false;

  [...s].map(() => {
    if (coppyS[index] === ' ') {
      coppyS.splice(index, 1);
    } else if (coppyS[index] === coppyP2[index]) {
      resultWord.push(coppyP2[index]);
      coppyS.splice(index, 1);
      coppyP2.splice(index, 1);
    } else if (coppyS[index] === coppyP1[index]) {
      resultWord.push(coppyP1[index]);
      coppyS.splice(index, 1);
      coppyP1.splice(index, 1);
    }
  });

  return resultWord.join('') === s.replaceAll(' ', '') ? true : false;
};

console.log(stringChecker('VGiUx07IR3 PI2A899L', 'VGiUx07IR', '3 PI2A899LL')); //false
console.log(stringChecker(' Hacker News! ', 'Hacker Ne', 'ws! ')); //false
console.log(stringChecker(' Hacker News! ', 'Hacker Ne', 'ws! ')); //false
console.log(stringChecker(' Hacker News! ', 'Hacker Ne', 'ws! ')); //false
console.log(stringChecker('VGiUx07IR3 PI2A899L', 'VGiUx07IR', '3 PI2A899LL')); //false
console.log(stringChecker('w27y7', '27', 'w7y')); //true
console.log(stringChecker('Rw89668gElMAHWZ35v b', 'Rw89668gEl', 'MAHWZ35v b')); //true
console.log(stringChecker('bHC2Oa2774Kr8W4y0Sw', 'bHC2Oa277', '4Kr8W4y0Sww')); //false
console.log(stringChecker('j4H78Q5uUr677Gf9 70', '', 'j4H78Q5uUr677Gf9 70')); //true
console.log(stringChecker(' Hacker News! ', ' Hacker News ', '!')); // true
console.log(stringChecker(' Hacker News! ', ' cker s ', 'HaNew!')); //true
console.log(stringChecker('Hacker News!', 'cker Ne', 'Haws!')); //true
console.log(stringChecker('Hacker News!', 'Haerws', 'ck Ne!')); //true
console.log(
  stringChecker(
    'Do you have a cup of tea? Yes, I do!',
    'yo ha a cof tea Yes I',
    'Douveup ?, do!'
  )
); //true
console.log(stringChecker('Will do', 'Wl o', 'ild')); //true
console.log(stringChecker('radency', 'rade', 'ncyy')); //false
console.log(stringChecker('radency', 'rdnc', 'aey')); //true
