var env, modal, oneEvent;

env = 'dev';

window.A = new Object();

A.debounceTimer = false;

A.debounceQueue = null;

A.debounce = function(fn, id) {
  if (A.debounceQueue === null) {
    A.debounceQueue = id;
  }
  if (id === A.debounceQueue) {
    clearTimeout(A.debounceTimer);
  }
  return A.debounceTimer = setTimeout(function() {
    fn();
    return A.debounceQueue = null;
  }, 1000);
};

oneEvent = function(selector, event, fn) {
  var selectorClone;
  if (selector) {
    selectorClone = selector.cloneNode(true);
    selector.parentNode.replaceChild(selectorClone, selector);
    return selectorClone.addEventListener(event, fn);
  }
};


/*
MODAL
 */

modal = {
  on: function(el, event) {
    return oneEvent(el, event, function(e) {
      $('.se-modal')[0].style.display = 'block';
      return e.stopPropagation();
    });
  },
  close: function() {
    return $('.se-modal')[0].style.display = 'none';
  }
};

$('body').click(function() {
  if ($('.se-modal[style="display: block;"]').length) {
    return $('.se-modal[style="display: block;"]').style.display = 'none';
  }
});

$('.se-modal').click(function(e) {
  return e.stopPropagation();
});


/*
STATUSES
 */

A.status = function(status) {
  var $statusContainer, delay, id;
  id = Math.round(Math.random() * 9999999);
  $statusContainer = $('.acss-status').length ? $('.acss-status') : $(status.selector);
  $($statusContainer).html("<div id='status-" + id + "' class='status'>" + status.title + "</div>");
  delay = status.delay || 2000;
  return setTimeout(function() {
    return $("#status-" + id).fadeOut('fast');
  }, delay);
};
