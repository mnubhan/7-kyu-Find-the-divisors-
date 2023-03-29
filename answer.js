function divisors(integer) {
  let newArr = []
  for(let i=0;i<=integer;i++){
    if(i!==0 && i!==1 && i!=integer ){
      integer%i==0 ? newArr.push(i) : newArr
    }
    else{
      newArr
    }
  }
  return newArr.length!==0 ?newArr: `${integer} is prime`
};

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

function divisors(integer) {
	var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
    	divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};
