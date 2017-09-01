let getFirstSelector = function(selector) {
  return document.querySelector(selector);
}

let nestedTarget = function() {
  return getFirstSelector("#nested .target");
}

let increaseRankBy = function(n) {
  let items = document.querySelectorAll(".ranked-list li");

  for(let i = 0, l = items.length; i < l; i++) {
    let number = parseInt(items[i].textContent) + n
    items[i].innerHTML = number
  }
}

let deepestChild = function() {
  let element = getFirstSelector("#grand-node");
  let child = element.children[0];

  while(child) {
    element = child;
    child = child.children[0];
  }

  return element;
}
