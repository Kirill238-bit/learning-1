let lis = document.getElementsByTagName('li');
    for (let li of lis) {
      let Count = li.getElementsByTagName('li').length;
      if (!Count) continue;
      li.firstChild.data += ' [' + Count + ']';
    }