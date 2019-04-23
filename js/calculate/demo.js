// 面向对象的世界, 创建很多对象, 策略对象  实现了同样的接口,caculate,互换策略,策略模式
var Bounce = function(salary) {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
    return this.strategy.caculate(this.salary);
} 
PerformanceS.prototype.caculate = function(salary) {
    return salary * 5;
}
PerformanceA.prototype.caculate = function(salary) {
    return salary * 3;
}
function PerformanceS() {
   
}
function PerformanceA() {
   
}
const bounce = new Bounce(10000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());

const bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformanceA());
console.log(bounce2.getBounce());