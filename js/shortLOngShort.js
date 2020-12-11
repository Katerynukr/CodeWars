function solution(a, b){
    return a.length>b.length ? b+a+b : a+b+a;
  }
solution('13', '200'); //'1320013'
solution('Soon', 'Me'); //'MeSoonMe'
solution('U', 'False'); //'UFalseU'