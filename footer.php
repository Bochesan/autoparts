</main>
<footer class="footer">
    <div class="footer__container wrapper">
        <div class="footer__col">
            <a class="footer__col-title" href="/">Автозапчасти<br> в Звенигороде</a>
            <div class="info-line__information info-line__information--address">Фрунзе, 19/1<br> Звенигород, Московская область</div>
            <div class="info-line__information info-line__information--phone">
                <a href="tel:+74959925321">+7 (495) 992–53–21</a>
            </div>
            <div class="info-line__information info-line__information--work-time">Ежедневно: 08:00 — 20:00</div>
        </div>
        <div class="footer__col">
            <a href="#" class="footer__col-title">Аккумуляторы</a>
            <ul class="footer__col-list">
                <li class="footer__col-item"><a href="#" class="footer__col-link">Afa</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Akom</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Aktex</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Moto</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Banner Bike Bull</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Bolk</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Bosch</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Fiamm</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Varta</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Vergel</a></li>
            </ul>
        </div>
        <div class="footer__col">
            <a href="#" class="footer__col-title">Масла</a>
            <ul class="footer__col-list">
                <li class="footer__col-item"><a href="#" class="footer__col-link">GL Минер</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">GL Синт</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Shell</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Mobil</a></li>
            </ul>
        </div>
        <div class="footer__col">
            <a href="#" class="footer__col-title">Химия</a>
            <ul class="footer__col-list">
                <li class="footer__col-item"><a href="#" class="footer__col-link">Gunk</a></li>
                <li class="footer__col-item"><a href="#" class="footer__col-link">Permatex</a></li>
            </ul>
        </div>
        <div class="footer__col">
            <a href="#" class="footer__col-title">Клеммы</a>
            <ul class="footer__col-list">
                <li class="footer__col-item"><a href="#" class="footer__col-link">Клемма переходник</a></li>
            </ul>
        </div>
    </div>
</footer>
</div>

<div class="i-popup">
    <div class="i-popup__overlay"></div>
    <div class="i-popup__container">

      <div class="i-popup__box">
        <div class="i-popup__box-content i-popup__box-content--form">
          <div class="i-popup__box-content-inner">
            <div class="i-popup__box-title"><b>Заказ в 1 клик</b><br>Менеджер перезвонит Вам, узнает все детали и сам оформит заказ на Ваше имя</div>
                <div class="formContainer">
                    <div class="formContainer__item">
                        <form class="formYv" type="post" action="test.json">
                            <div class="formYv__input formYv__input--onClick">
                                <input type="text" data-valid="noEmety" name="name">
                                <label class="formYv__label" for="">Ваше ФИО</label>
                                <span class="formYv__error">Введите ФИО</span>
                            </div>
                            <div class="formYv__input formYv__input--onClick">
                                <input type="text" data-valid="phone" name="phone">
                                <label class="formYv__label" for="">Ваш телефон</label>
                                <span class="formYv__error">Введите телефон</span>
                            </div>
                            <div class="formYv__checkbox">
                                <input id="checkbox1" name="checkbox" type="checkbox" data-valid="checked">
                                <label class="customCheckbox" for="checkbox1">
                                    <span class="customCheckbox__body"></span>
                                    <span class="customCheckbox__label">Я согласен на обработку персональных данных</span>
                                </label>
                            </div>
                            <div class="formYv__submit">
                                <input type="submit" class="delivery__form-button button button--red" name="" value="Оформить">
                            </div>
                        </form>
                    </div>
                    <div class="formContainer__item formContainer__item--done formContainer__item--onClick">
                        <svg class="done" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z" stroke="#3da35a" fill="transparent"></path>
                        </svg>
                        <div class="formContainerItem__doneText">
                            Спасибо за заказ!<br>
                            Наш менеджер свяжется с Вами
                        </div>
                        <div class="formContainerItem__errorText">
                            Неожиданная ошибка<br>
                            Повторите попытку позднее
                        </div>
                    </div>
                </div>
          </div>
        </div>
        <div class="i-popup__box-picture">
          <img src="/media/images/oil.png" alt="" class="i-popup__box-image">
        </div>
      </div>

    </div>
</div>

<script src="/assets/scripts/jquery-3.3.1.min.js"></script>
<script src="/assets/scripts/textMaskCore.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
<script src="<?=$buildDest?>main.min.js?<?= filemtime($_SERVER['DOCUMENT_ROOT'].$buildDest.'main.min.js'); ?>" defer></script>
</body>
</html>
