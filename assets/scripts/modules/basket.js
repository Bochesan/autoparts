

function load_basket() {
    $('div.basket').load('/ajax/get_basket.php');
    }
    
    function load_basket_mini() {
    $('div.header-buttons').load('/ajax/get_basket_mini.php');
    }
    
    function add2basket(id) {
    $.get('/ajax/add2basket.php',{id : id}, function(ret) {
    if(ret=='ok') {visualAddBasket(); load_basket(); load_basket_mini();} else alert(ret);
    })
    }
    function visualAddBasket() {
        $('.sucsess--basket').addClass('active');
        setTimeout(function() {
            $('.sucsess--basket').removeClass('active');
        }, 3500)
    }
    
    function add2basketngo(id) {
    $.get('/ajax/add2basket.php',{id : id}, function(ret) {
    //if(ret=='ok') location.href='/basket#order'; else alert(ret);
    })
    }
    
    function remove_from_basket(id,full) {
    $.get('/ajax/remove_from_basket.php',{id : id, full : full}, function(ret) {
    //if(ret=='ok') alert('Товар удален из коризны!');
    load_basket();
    load_basket_mini();
    })
    }
    
    function clear_basket(id) {
    $.get('/ajax/clear_basket.php', function(ret) {
    load_basket();
    load_basket_mini();
    })
    }