function myFunction(undefined) {
    'use strict';
  
    var element = $('.notification-icon'),
      caption = $('.notification-caption');
  
    element.on('click', function() {
      element.toggleClass('read'), caption.toggleClass('read');
  
      var regex = /^\d/;
      element.hasClass('read') ?
        caption.text(caption.text().replace(regex, '0')) : caption.text(caption.text().replace(regex, '3'));
  
      $('ul.notifications li').each(function(i) {
        var t = $(this);
        setTimeout(function() {
          t.toggleClass('hidden');
        }, (i + 1) * 100);
      });
  
    });
  };