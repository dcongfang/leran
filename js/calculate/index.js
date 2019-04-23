// S  5 A  3 B  2 C 1  D
let stratigies = {
    'S': function(salary) {
        return salary * 5;
    },
    'A': function(salary) {
        return salary * 3;
    },
    'B': function(salary) {
        return salary * 2;
    },
    'C': function(salary) {
        return salary;
    }
}
function calculate(level, salary) {
    return stratigies[level](salary);
    // if(level === 'S') {
    //     return salary * 5;
    // }
    // if(level === 'A') {
    //     return salary * 3;
    // }
    // if(level === 'B') {
    //     return salary * 2;
    // }
    // if(level === 'S') {
    //     return salary;
    // }
}
console.log(calculate('S', 1000));
