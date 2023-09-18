const input = [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}];
//  Output: {'S005', 'S002', 'S007', 'S001', 'S009'}

function findUnique(arr) {
  return new Set(arr.reduce((acc, item) => acc.concat(Object.values(item)), []));
}

console.log(findUnique(input));