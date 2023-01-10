var eachA = [1, 2, 3, 4];
eachA.forEach(function (item) { return console.log(item); });
var mapA = [1, 2, 3];
mapA.map(function (item) { return item + 1; });
// filter는 type이 2개라서 추론을 제대로 못하는 경우도 있음,
var filterA = [1, 2, 3, 4];
filterA.filter(function (item) { return item % 2 === 1; });
