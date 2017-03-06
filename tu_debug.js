((document) => {
document.addEventListener('keyup', listenForKeypress);

function listenForKeypress(e) {
  if (e.keyCode === 81) {
    runCommand();
  }
}

function runCommand() {
  document.querySelectorAll('*').forEach(e => {
  var array = Array.prototype.slice.call(e.childNodes);
  
  var result = array
  .filter(startWithWord)
  .filter(isNodeType3);

  if(result.length > 0) {
    var tus = getTranslations();
    var tu = findElementTU(e, tus);

    if(tu) {
      e.style.border = 'solid 2px orange';
      e.addEventListener('click', alertTu(tu))
    }
  }
});
}

function alertTu(tu) {
  return function(e) {
    e.preventDefault();
    alert('TU: ' + tu.key + ' found for text: ' + tu.val);
  }
}

function findElementTU(e, tus) {
  var text = e.textContent.trim();
  return tus.find(hasMatchingText(text));
}

function hasMatchingText(text) {
  return function (obj) {
    return obj.val === text;
  };
}

function getTranslations() {
  var translations = document.querySelector('[data-store="translations"]');
  var data = (translations && translations.innerHTML) ? JSON.parse(translations.innerHTML) : {};
  var result = Object.values(data).filter(isNotArray).reduce(modulesToTu, []);

  return result;
}

function startWithWord(val) {
  return /^\w/.test(val.textContent.trim())
}

function isNodeType3(val) {
  return val.nodeType === 3;
}

function isNotArray(val) {
  return !Array.isArray(val);
}

function modulesToTu(acc, tuModule) {
  var result = Object.keys(tuModule).map(key => {
    return {key: key, val: tuModule[key]};
  });

  return acc.concat(result);
}

})(document);
