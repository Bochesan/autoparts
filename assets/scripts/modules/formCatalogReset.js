;(function() {
    
function DelayedSubmission() {
    var date = new Date();
    initial_time = date.getTime();
    if (typeof setInverval_Variable == 'undefined') {
            setInverval_Variable = setInterval(DelayedSubmission_Check, 50);
    } 
}
function DelayedSubmission_Check() {
    var date = new Date();
    check_time = date.getTime();
    var limit_ms=check_time-initial_time;
    $('.preloader').addClass('preloader--active');
    if (limit_ms > 1000) { 
        $('.catalog-filter__form>input[type=submit]').click();
        clearInterval(setInverval_Variable);
        delete setInverval_Variable;
    }
}
})();
