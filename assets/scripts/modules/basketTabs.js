;(function() {

    window.addEventListener('load', function() {

        if ($('.hr-sect').length) {

            $(".hr-pagination__step").click(function() {
                var thStep = $(this);
                if (!thStep.hasClass("is-active")) {
                    thStep.closest('.hr-sect').find(".hr-pagination__step").removeClass("is-active").removeClass("button");
                    thStep.addClass("is-active").addClass("button");
                    var pagiIndex = thStep.attr("data-index");

                    var sliderSlides = thStep.closest(".hr-sect").find(".hr-slider-slide");
                    sliderSlides.removeClass("is-active");
                    sliderSlides.each(function(pagiIndex, thStep) {
                        if ($(this).attr("data-index") == $(".hr-pagination__step.is-active").attr("data-index")) {
                            $(this).addClass("is-active");
                        }
                    });
                }
            });

        }

    });

})();
