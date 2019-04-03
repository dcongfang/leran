const people = [
    {age:46,name:'roger'},
    {age:99,name:'awyfa'},
    {age:26,name:'wuewf'},
    {age:74,name:'esfuiw'}
]
var orderPeople = function sort(people) {
    return people.sort((a,b) => {
        return a.age - b.age;
    })
}
    console.log(orderPeople(people));