// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running" 
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


// Option 1
swim = () => "Todays's exercise: swimming"

console.log(swim());

run = () => "Todays's exercise: running"

console.log(run());


// Option 2
var run = function (run) {
    var run = 'running';
    return `Today's exercise: ${run}`;


}
console.log(run());


var swim = function (swim) {
    var swim = 'swimming';
    return `Today's exercise: ${swim}`;
}

console.log(swim());

var swim = excercise('swimming');


// Option 3
function run(x) {
    return `Today's exercise: ${x}`;

}
console.log(run('Running'));

function swim(x) {
    return `Today's exercise: ${x}`;

}
console.log(swim('Swimming'));





















