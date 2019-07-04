$(document).ready(function(){

    $(document).on('click', '.catalog__more-button', function(){

        var targetContainer = $('.catalog__product'),          //  Контейнер, в котором хранятся элементы
            url =  $('.catalog__more-button').attr('data-url');    //  URL, из которого будем брать элементы

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){

                    //  Удаляем старую навигацию
                    $('.catalog__more').remove();

                    var elements = $(data).find('.product-row'),  //  Ищем элементы
                        pagination = $(data).find('.catalog__more');//  Ищем навигацию

                    targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                    targetContainer.append(pagination); //  добавляем навигацию следом

                }
            })
        }
    });
    
});  





