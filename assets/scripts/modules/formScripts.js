;(function() {
    class Field {
        constructor(self, classError, classFocus, classNoEmety) {
            this._self = self;
            this._inputTag = this._self.getElementsByTagName("input")[0];
            this._classError = classError || "";
            this._classFocus = classFocus || "";
            this._classNoEmety = classNoEmety || "";

            this._validInputIndex = false;
        }

        get input() {
            return this._inputTag;
        }

        get inputType() {
            return this._inputTag.getAttribute("data-valid");
        }

        get valValidation() {
            return this._validInputIndex;
        }

        _validationNoEmety(inputTag) {

            if (inputTag.value !== "") {
                return true;
            }

            this._error();
            return false;
        }

        _error() {
            let classError = this._classError,
                self = this._self;

            if (classError) {
                self.classList.add(classError);

                setTimeout(function(){
                    self.classList.remove(classError);
                }, 1500);
            }
        }

        focusIn() {
            let classFocus = this._classFocus;

            if (classFocus){
                this._self.classList.add(classFocus);
            }
        }

        focusOut() {
            let classFocus = this._classFocus;

            if (classFocus){
                this._self.classList.remove(classFocus);
            }
        }

        noEmetyInputTest() {
            let classNoEmety = this._classNoEmety;

            if (classNoEmety) {
                if (this._inputTag.value !== "") {
                    this._self.classList.add(classNoEmety);
                } else {
                    this._self.classList.remove(classNoEmety);
                }
            }
        }

        validation() {
            switch (this._inputTag.getAttribute("data-valid")){

                case "noEmety":
                    this._validInputIndex = this._validationNoEmety(this._inputTag);
                break;

                default:
                    this._validInputIndex = true;
            }
        }

    }

    class Textarea extends Field {
        constructor(self, classError, classFocus, classNoEmety) {
            super(self, classError, classFocus, classNoEmety);

            this._inputTag = this._self.getElementsByTagName("textarea")[0];
        }
    }

    class Input extends Field {
        constructor (self, classError, classFocus, classNoEmety) {
            super(self, classError, classFocus, classNoEmety);

            this._inputTag = this._self.getElementsByTagName("input")[0];
        }

        _validationEmail(inputTag) {
            let patternEmail = /^[0-9a-z]([\.-]?\w+)*@[0-9a-z]([\.-]?[0-9a-z])*(\.[0-9a-z]{2,4})+$/;

            if (inputTag.value.search(patternEmail) === 0) {
                return true; // test
            }

            this._error();
            return false; // test
        }

        _validationPhone(inputTag) {
            if (inputTag.value !== "" && inputTag.value.indexOf('_') === -1) {
                return true;
            }
            this._error();
            return false;
        }

        maskPhoneFunctional() {
            // Добавление маски телефонного номера
            if (this._phoneMask === undefined) {
                this._phoneMask = textMaskCore.createTextMaskInputElement({
                    inputElement: this._inputTag,
                    mask: ["+","7",'(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
                });
            }

            this._phoneMask.update();
        }

        validation() {
            switch (this._inputTag.getAttribute("data-valid")){

                case "noEmety":
                    this._validInputIndex = this._validationNoEmety(this._inputTag);
                break;

                case "email":
                    this._validInputIndex = this._validationEmail(this._inputTag);
                break;

                case "phone":
                    this._validInputIndex = this._validationPhone(this._inputTag);
                break;

                default:
                    this._validInputIndex = true;
            }
        }

    }

    class Checkbox {
        constructor(self, classError) {
            this._self = self;
            this._classError = classError || "";
            this._inputTag = this._self.getElementsByTagName("input")[0];

            this._validInputIndex = false;
        }

        get input() {
            return this._inputTag;
        }

        get inputType() {
            return this._inputTag.getAttribute("data-valid");
        }

        get valValidation() {
            return this._validInputIndex;
        }

        _error() {
            let classError = this._classError,
                self = this._self;

            if (classError) {
                self.classList.add(classError);

                setTimeout(function(){
                    self.classList.remove(classError);
                }, 1500);
            }
        }

        _validationСhecked(inputTag) {
            if (inputTag.checked) {
                return true;
            }
            this._error();
            return false;
        }

        validation() {
            switch (this._inputTag.getAttribute("data-valid")){

                case "checked":
                    this._validInputIndex = this._validationСhecked(this._inputTag);
                break;

                default:
                    this._validInputIndex = true;
            }
        }

    }

    class Form {
        constructor (self, options) {
            this._self = self;
            this._classInputContainer = options.classInputContainer || "";
            this._classInputError = options.classInputError || "";
            this._classInputFocus = options.classInputFocus || "";
            this._classInputNoEmety = options.classInputNoEmety || "";
            this._classTextareaContainer = options.classTextareaContainer || "";
            this._classTextareaError = options.classTextareaError || "";
            this._classTextareaFocus = options.classTextareaFocus || "";
            this._classTextareaNoEmety = options.classTextareaNoEmety || "";
            this._classCheckboxContainer = options.classCheckboxContainer || "";
            this._classCheckboxError = options.classCheckboxError || "";

            this._inputsObjectArray = [];
            this._textareaObjectArray = [];
            this._checkboxObjectArray = [];
            this._validFormIndex = false;
        }

        _ajaxSand() {
            let ajax = new XMLHttpRequest(),
                form = this._self,
                type = form.getAttribute("type") || "post",
                action = form.getAttribute("action") || window.location.href;

                console.log(type + " " + action);

            ajax.open(type, action);

            if (type.toLowerCase() === "post") {

                ajax.addEventListener("progress", function() {
                    console.log(ajax.response);
                });
                ajax.addEventListener("load", function() {
                    let formContainer = form.closest(".formContainer");
                    formContainer.classList.add("formContainer--done");
                    //Todo: здесь надо поставить очистку формы
                    setTimeout(function(){
                        formContainer.classList.remove("formContainer--done");
                    }, 3000);
                });

                let data = new FormData(this._self);
                ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                ajax.send(data);
            } else {
                //Todo: здесь надо реализовать Get метод
                // ajax.send();
            }
        }

        _ajaxError() {
            //Todo: здесь надо реализовать метод не пройденой валидации формы
            console.log("Форма не прошла валидацию");
        }

        submit() {
            let self = this;

            self._validFormIndex = true;

            this._inputsObjectArray.forEach(function(item){
                item.validation();
                if (item.valValidation === false) {
                    self._validFormIndex = item.valValidation;
                }
            });

            this._textareaObjectArray.forEach(function(item){
                item.validation();
                if (item.valValidation === false) {
                    self._validFormIndex = item.valValidation;
                }
            });

            this._checkboxObjectArray.forEach(function(item){
                item.validation();
                if (item.valValidation === false) {
                    self._validFormIndex = item.valValidation;
                }
            });

            console.log(self._validFormIndex);

            if (self._validFormIndex === true) {
                // Функция отправки формы по ajax
                this._ajaxSand();
            } else {
                this._ajaxError();
            }

        }

        init () {
            let inputs = this._self.querySelectorAll("." + this._classInputContainer),
                textareas = this._self.querySelectorAll("." + this._classTextareaContainer),
                checkboxs = this._self.querySelectorAll("." + this._classCheckboxContainer),
                self = this;

            for(var i = 0; i < inputs.length; ++i) {
                this._inputsObjectArray.push(new Input(inputs[i], this._classInputError, this._classInputFocus, this._classInputNoEmety));
            }

            for(var i = 0; i < textareas.length; ++i) {
                this._textareaObjectArray.push(new Textarea(textareas[i], this._classTextareaError, this._classTextareaFocus, this._classTextareaNoEmety));
            }

            for(var i = 0; i < checkboxs.length; ++i) {
                this._checkboxObjectArray.push(new Checkbox(checkboxs[i], this._classCheckboxError));
            }

            this._inputsObjectArray.forEach(function(item) {

                item.input.addEventListener("focusout", function(){
                    item.validation();
                    item.noEmetyInputTest();
                    item.focusOut();
                });

                item.input.addEventListener("focusin", function(){
                    item.focusIn();
                });

                // Добавление маски телефонного номера по мере ввода номера
                if (item.inputType === "phone") {
                    item.input.addEventListener("input", function(){
                        item.maskPhoneFunctional();
                    });
                }

            });

            this._textareaObjectArray.forEach(function(item) {

                item.input.addEventListener("focusout", function(){
                    item.validation();
                    item.noEmetyInputTest();
                    item.focusOut();
                });

                item.input.addEventListener("focusin", function(){
                    item.focusIn();
                });

            });

            this._self.addEventListener("submit", function(event){
                event.preventDefault();
                self.submit();
            });

        }
    }


    let formsElem = document.querySelectorAll(".formYv");

    if (formsElem !== undefined) {
        formsElem.forEach(function(item){
            let formObj = new Form(item, {
                classInputContainer: "formYv__input",
                classInputError: "formYv__input--error",
                classInputFocus: "formYv__input--focus",
                classInputNoEmety: "formYv__input--noEmety",
                classTextareaContainer: "formYv__textarea",
                classTextareaError: "formYv__textarea--error",
                classTextareaFocus: "formYv__textarea--focus",
                classTextareaNoEmety: "formYv__textarea--noEmety",
                classCheckboxContainer: "formYv__checkbox",
                classCheckboxError: "formYv__checkbox--error"
            });
            formObj.init();
        });
    }



})();
