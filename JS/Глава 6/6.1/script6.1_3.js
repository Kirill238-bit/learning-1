//через цикл
function printList(list){
  let tmp = list;

  while (tmp!=null) {
    alert(tmp.value);
    tmp = tmp.next;
}
}
//через рекурсию
function printList(list){
  alert(list.value); 

  if (list.next) {
    printList(list.next); 
  }
}