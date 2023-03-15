let ul = document.createElement('ul');
    document.body.append(ul);
    while (true) {
      let k = prompt("Введите текст для элемента списка", "");
      if (!data) {
        break;
      }
      let li = document.createElement('li');
      li.textContent = k;
      ul.append(li);
    }