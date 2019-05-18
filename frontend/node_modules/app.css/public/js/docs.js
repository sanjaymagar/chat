var env, input, li, _i, _len, _ref;

env = 'dev';

_ref = $('.acss-sidebar li');
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  li = _ref[_i];
  input = document.createElement('input');
  input.type = 'text';
  input.value = li.children[0].innerHTML;
  li.appendChild(input);
}

$('.example-debouncer input')[0].addEventListener('keyup', function() {
  var save;
  save = function() {
    $('.example-debouncer .alert')[0].innerHTML = "You saved! { name: '" + ($('.example-debouncer input')[0].value) + "' }";
    return setTimeout(function() {
      return $('.alert')[0].innerHTML = '';
    }, 1000);
  };
  return A.debounce(save, 'save');
});

$('#editSidebar').click(function() {
  var _j, _len1, _ref1;
  _ref1 = $('.acss-sidebar li');
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    li = _ref1[_j];
    li.className = 'edit';
  }
  $('.example-editable-sidebar #text')[0].innerHTML = 'Click on sidebar items to edit them.';
  return setTimeout(function() {
    var _k, _len2, _ref2;
    _ref2 = $('.acss-sidebar li');
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      li = _ref2[_k];
      li.className = '';
    }
    return $('.example-editable-sidebar #text')[0].innerHTML = '';
  }, 5000);
});

$('#launchStatusOne').click(function() {
  return A.status({
    title: 'Saved'
  });
});

$('#launchStatusTwo').click(function() {
  return A.status({
    title: 'Deleted'
  });
});
