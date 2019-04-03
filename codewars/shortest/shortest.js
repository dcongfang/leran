// function findfindShort(str) {
//   return str.split(' ').map(w =>w.length).sort((a,b) => a - b)[0];
    // var arr = str.split(' ');
    // var arr1 = arr.map(function(w) {
        
    //         return w.length;
    
    // });
    // arr1.sort((a,b) => a - b)[0];
// }

// console.log(findfindShort('bitcoin take over the world maybe who knows perhaps'));
    // var str = 'bitcoin take over the world maybe who knows perhaps';
    // function findShort(str){
    //     return Math.min(...str.split(' ').map(w => w.length));
    // }
    // console.log(findShort(str));
    var str = 'bitcoin take over the world maybe who knows perhaps';
     function findShort(str){
         return Math.min.apply(null,str.split(' ').map(w => w.length));
     }
     console.log(findShort(str));