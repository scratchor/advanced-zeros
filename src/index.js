module.exports = function getZerosCount(number, base) {

  let obj = {};
  let obj2 ={};
  let arr = [];
  

  calc(base);
  
  function calc(base) {
      if(base === 1){
          return;
      }
      for(let i=2; i<=base; i++) {
          if(base%i === 0) {
              for(let j=2;j<=i;j++) {
                  if(i%j === 0) {
                      if(obj[i] === undefined) {
                       obj[i] = 1;
                      return calc(base/i);
                  } else {
                       obj[i]+=1;
                      return calc(base/i);
                  };                        
                      continue;
                  }
              }       
          }
      }
  };

    

  for(let prop in obj)    {
      obj2[prop] = obj[prop];
      obj2[prop] = 0;
      calc2(number, prop);
  }


      function calc2(number, prop) {
          while(number >= prop) {
                  number /= prop;
                  obj2[prop] += Math.floor(number);
          }
          obj2[prop] = Math.floor(obj2[prop]/obj[prop]);
      };


  arr = Object.values(obj2);

  arr.sort(function(a, b) {
      return a - b;
  });
   


  return(arr[0]);

};