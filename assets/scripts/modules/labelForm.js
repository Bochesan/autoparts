;(function() {

    window.addEventListener('load', function() {

        $('.delivery__form-input').focusout(function(){
          if ($(this).val() !== '') {
            $(this).parent().addClass('value');
          }
          else {
            $(this).parent().removeClass('value');
          }
        });

    });

})();
