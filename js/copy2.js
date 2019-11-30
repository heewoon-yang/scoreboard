let book = {title: "인사이드 자바스크립트", price: 18000};
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
let copyBook = { ...book, a:'aaa', ...{title:'bbb'} };
copyBook.price = 22000;
console.log(book);
console.log(copyBook);