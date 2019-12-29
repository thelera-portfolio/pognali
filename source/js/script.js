// меню в шапке сайта
var mainMenu = document.querySelector(".menu");
var menuLogoWhite = document.querySelector(".menu__logo--white");
var menuLogoBlue = document.querySelector(".menu__logo--blue");
var menuToggle = document.querySelector(".menu__toggle");
var menuCloseButton = document.querySelector(".menu__close-button");

// модальное окно с бизнес-тарифами
var businessRatesModal = document.querySelector(".business-rates-modal");
var showBusinessRatesModalButton = document.querySelector(".rates__more-link");
var businessRatesModalCloseButton = document.querySelector(".business-rates-modal__close-button");

var scrolled;

// форма
var countryDropdown = document.querySelector(".step__country-dropdown");
var chooseCountrySelect = document.querySelector(".step__select--choose-country");
var stepSelectDropdownButton = document.querySelector(".step__select-dropdown--choose-country");
var stepSelectButton = document.querySelector(".step__select-button--choose-country");
var countryDropdownCloseButton = document.querySelector(".step__dropdown-close-button");

var stepOne = document.querySelector(".step--one");
var stepTwo = document.querySelector(".step--two");
var stepThree = document.querySelector(".step--three");
var toStepTwoButton = document.querySelector(".step__button--to-step-two");
var toStepThreeButton = document.querySelector(".step__button--to-step-three");
var backStepOneButton = document.querySelector(".step__button--back-step-one");
var backStepTwoButton = document.querySelector(".step__button--back-step-two");
var stepOneControlButton = document.querySelector(".controls-list__item--step-one");
var stepTwoControlButton = document.querySelector(".controls-list__item--step-two");
var stepThreeControlButton = document.querySelector(".controls-list__item--step-three");

var buttonPlusTravelmates = document.querySelector(".control-field__button--plus-travelmates");
var buttonMinusTravelmates = document.querySelector(".control-field__button--minus-travelmates");
var buttonPlusDays = document.querySelector(".control-field__button--plus-days");
var buttonMinusDays = document.querySelector(".control-field__button--minus-days");
var buttonDateForward = document.querySelector(".control-field__button--forward");
var buttonDateBack = document.querySelector(".control-field__button--back");

var inputFieldTravelmates = document.querySelector(".control-field__input--travelmates");
var inputFieldDays = document.querySelector(".control-field__input--days");
var inputDate = document.querySelector(".control-field__input--date");

// каталог
var filterCountry = document.querySelector(".filter-country");
var findTravelmate = document.querySelector(".catalog-main__find-travelmate");
var filterCountryButton = document.querySelector(".filter-country__button");// кнопка "свернуть / показать все"
var filterCountryButtonClose = document.querySelector(".filter-country__button-close");// кнопка "свернуть"
var continentList = document.querySelector(".continent-list");
var countryKeyboard = document.querySelector(".country-keyboard");
var countriesList = document.querySelector(".countries-list");

var formCloseButtonHobby = document.querySelector(".travelmate-form__close-button--hobby");
var formCloseButtonMusic = document.querySelector(".travelmate-form__close-button--music");
var formCloseButtonFood = document.querySelector(".travelmate-form__close-button--food");
var formCloseButtonTransport = document.querySelector(".travelmate-form__close-button--transport");
var formCloseButtonLevel = document.querySelector(".travelmate-form__close-button--level");
var formLabelWrapperHobby = document.querySelector(".travelmate-form__label-wrapper--hobby");
var formLabelWrapperMusic = document.querySelector(".travelmate-form__label-wrapper--music");
var formLabelWrapperFood = document.querySelector(".travelmate-form__label-wrapper--food");
var formLabelWrapperTransport = document.querySelector(".travelmate-form__label-wrapper--transport");
var formLabelWrapperLevel = document.querySelector(".travelmate-form__label-wrapper--level");

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
};

// меню в шапке сайта
mainMenu.classList.remove("menu--no-js");

// если работает js, то меню на мобильной и планшетной версии закрыто
if (window.matchMedia("(max-width: 1439px)").matches) {
  mainMenu.classList.add("menu--closed");
  mainMenu.classList.remove("menu--opened");
}

window.addEventListener("resize", throttle(function () {
  if (window.matchMedia("(max-width: 1439px)").matches) {
    mainMenu.classList.add("menu--closed");
    mainMenu.classList.remove("menu--opened");
  }

  if (window.matchMedia("(min-width: 1439px)").matches) {
    mainMenu.classList.remove("menu--closed");
    mainMenu.classList.add("menu--opened");
  }
}, 500));

if (menuCloseButton) {
  menuCloseButton.addEventListener("click", function () {
    mainMenu.classList.add("menu--closed");
    mainMenu.classList.remove("menu--opened");
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.remove("menu--closed");
    mainMenu.classList.add("menu--opened");
  });
}

if (showBusinessRatesModalButton) {
  showBusinessRatesModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessRatesModal.classList.add("business-rates-modal--show");
  });
}

if (businessRatesModalCloseButton) {
  businessRatesModalCloseButton.addEventListener("click", function () {
    businessRatesModal.classList.remove("business-rates-modal--show");
  });
}

// прокрутка меню в шапке сайта
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("resize", throttle(function () {
    if ((scrolled > 73 && mainMenu.classList.contains("menu--closed")) || (scrolled > 119 && window.matchMedia("(min-width: 1440px)").matches)) {
      mainMenu.classList.add("menu--scrolled");
    }
    if ((scrolled < 73) || (scrolled < 119 && window.matchMedia("(min-width: 1440px)").matches)) {
      mainMenu.classList.remove("menu--scrolled");
    }
  }, 500));
  if ((scrolled > 73 && mainMenu.classList.contains("menu--closed")) || (scrolled > 119 && window.matchMedia("(min-width: 1440px)").matches)) {
    mainMenu.classList.add("menu--scrolled");
  }
  if ((scrolled < 73) || (scrolled < 119 && window.matchMedia("(min-width: 1440px)").matches)) {
    mainMenu.classList.remove("menu--scrolled");
  }
}

// блок "выбрать страну"
if (chooseCountrySelect) {
  chooseCountrySelect.addEventListener("click", function (evt) {
    evt.preventDefault();
    countryDropdown.classList.add("step__country-dropdown--show");
    stepSelectButton.classList.add("step__select-button--hide");
  });
}

if (stepSelectDropdownButton) {
  stepSelectDropdownButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    countryDropdown.classList.add("step__country-dropdown--show");
    stepSelectButton.classList.add("step__select-button--hide");
  });
}

if (countryDropdownCloseButton) {
  countryDropdownCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    countryDropdown.classList.remove("step__country-dropdown--show");
    stepSelectButton.classList.remove("step__select-button--hide");
  });
}

//выход из формы при нажатии клавиши escape
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (countryDropdown.classList.contains("step__country-dropdown--show")) {
      evt.preventDefault();
      countryDropdown.classList.remove("step__country-dropdown--show");
      stepSelectButton.classList.remove("step__select-button--hide");
    }
  }
});

// навигация по шагам с помощью кнопок
if (stepTwo || stepThree) {
  stepTwo.classList.add("step--hide");
  stepThree.classList.add("step--hide");
}

if (toStepTwoButton) {
  toStepTwoButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    stepOne.classList.add("step--hide");
    stepTwo.classList.remove("step--hide");
    stepTwoControlButton.classList.add("controls-list__item--active");
    stepOneControlButton.classList.remove("controls-list__item--active");
  });
}

if (toStepThreeButton) {
  toStepThreeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    stepTwo.classList.add("step--hide");
    stepThree.classList.remove("step--hide");
    stepThreeControlButton.classList.add("controls-list__item--active");
    stepTwoControlButton.classList.remove("controls-list__item--active");
  });
}

if (backStepTwoButton) {
  backStepTwoButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    stepThree.classList.add("step--hide");
    stepTwo.classList.remove("step--hide");
    stepTwoControlButton.classList.add("controls-list__item--active");
    stepThreeControlButton.classList.remove("controls-list__item--active");
  });
}

if (backStepOneButton) {
  backStepOneButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    stepTwo.classList.add("step--hide");
    stepOne.classList.remove("step--hide");
    stepOneControlButton.classList.add("controls-list__item--active");
    stepTwoControlButton.classList.remove("controls-list__item--active");
  });
}

if (buttonPlusTravelmates) {
  buttonPlusTravelmates.addEventListener("click", function (evt) {
    evt.preventDefault();

    inputFieldTravelmates.stepUp();
  });
}

if (buttonMinusTravelmates) {
  buttonMinusTravelmates.addEventListener("click", function (evt) {
    evt.preventDefault();

    inputFieldTravelmates.stepDown();
  });
}

if (buttonPlusDays) {
  buttonPlusDays.addEventListener("click", function (evt) {
    evt.preventDefault();

    inputFieldDays.stepUp();
  });
}

if (buttonMinusDays) {
  buttonMinusDays.addEventListener("click", function (evt) {
    evt.preventDefault();

    inputFieldDays.stepDown();
  });
}

if (buttonDateForward) {
  buttonDateForward.addEventListener("click", function (evt) {
    evt.preventDefault();

    inputDate.stepUp();
  });
}

if (buttonDateBack) {
  buttonDateBack.addEventListener("click", function (evt) {
    evt.preventDefault();

    inputDate.stepDown();
  });
}

if (continentList || filterCountryButtonClose || filterCountryButton) {
  //блок "фильтрация по странам" по умолчанию скрыт
  //тк js работает, показываем кнопки закрытия / открытия блока
  filterCountryButton.classList.remove("filter-country__button--hide");
  filterCountryButtonClose.classList.remove("filter-country__button-close--hide");

  window.addEventListener("resize", throttle(function () {
    if (window.matchMedia("(max-width: 767px)").matches) {//блок со странами убираем только для мобильных
      continentList.classList.add("continent-list--hide");
    }
    if (window.matchMedia("(min-width: 768px)").matches) {//блок со странами убираем только для мобильных
      continentList.classList.remove("continent-list--hide");
    }
  }, 500));

  if (window.matchMedia("(max-width: 767px)").matches) {
    continentList.classList.add("continent-list--hide");
  }

  countryKeyboard.classList.add("country-keyboard--hide");
  countriesList.classList.add("countries-list--hide");
  filterCountryButtonClose.classList.add("filter-country__button-close--hide");
  filterCountryButton.classList.remove("filter-country__button--expanded");
}

if (filterCountryButton) {
  filterCountryButton.addEventListener("click", function () {

    if (countryKeyboard.classList.contains("country-keyboard--hide") && countriesList.classList.contains("countries-list--hide")) {//если блок с выбором страны закрыт, то открываем его
      filterCountry.classList.add("filter-country--absolute");//позиционируем блок абсолютно
      findTravelmate.classList.add("catalog-main__find-travelmate--margin");//следующему в потоке блоку добавляем марджин, чтобы не было его смещения
      continentList.classList.remove("continent-list--hide");
      countryKeyboard.classList.remove("country-keyboard--hide");
      countriesList.classList.remove("countries-list--hide");
      filterCountryButtonClose.classList.remove("filter-country__button-close--hide");
      filterCountryButton.classList.add("filter-country__button--expanded");
    } else {//если открыт, то закрываем
      filterCountry.classList.remove("filter-country--absolute");//убираем абсолютное позиционирование
      findTravelmate.classList.remove("catalog-main__find-travelmate--margin");
      window.addEventListener("resize", throttle(function () {
        if (window.matchMedia("(max-width: 767px)").matches) {//блок со странами убираем только для мобильных
          continentList.classList.add("continent-list--hide");
        }
      }, 500));
      if (window.matchMedia("(max-width: 767px)").matches) {
        continentList.classList.add("continent-list--hide");
      }
      countryKeyboard.classList.add("country-keyboard--hide");
      countriesList.classList.add("countries-list--hide");
      filterCountryButtonClose.classList.add("filter-country__button-close--hide");
      filterCountryButton.classList.remove("filter-country__button--expanded");
    }
  });
}

if (filterCountryButtonClose) {
  filterCountryButtonClose.addEventListener("click", function () {
    filterCountry.classList.remove("filter-country--absolute");//убираем абсолютное позиционирование
    findTravelmate.classList.remove("catalog-main__find-travelmate--margin");
    window.addEventListener("resize", throttle(function () {
      if (window.matchMedia("(max-width: 767px)").matches) {//блок со странами убираем только для мобильных
        continentList.classList.add("continent-list--hide");
      }
    }, 500));
    if (window.matchMedia("(max-width: 767px)").matches) {
      continentList.classList.add("continent-list--hide");
    }
    countryKeyboard.classList.add("country-keyboard--hide");
    countriesList.classList.add("countries-list--hide");
    filterCountryButtonClose.classList.add("filter-country__button-close--hide");
    filterCountryButton.classList.remove("filter-country__button--expanded");
  });
}

// блоки формы в каталоге скрыты по умолчанию (на мобилке и десктопе)
if (formCloseButtonHobby || formLabelWrapperHobby || formCloseButtonMusic || formLabelWrapperMusic || formCloseButtonFood || formLabelWrapperFood || formCloseButtonTransport || formLabelWrapperTransport || formCloseButtonLevel || formLabelWrapperLevel) {
  window.addEventListener("resize", throttle(function () {
    if (window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(min-width: 1440px)").matches) {
      formCloseButtonHobby.classList.add("travelmate-form__close-button--close");
      formLabelWrapperHobby.classList.add("travelmate-form__label-wrapper--hidden");

      formCloseButtonMusic.classList.add("travelmate-form__close-button--close");
      formLabelWrapperMusic.classList.add("travelmate-form__label-wrapper--hidden");

      formCloseButtonFood.classList.add("travelmate-form__close-button--close");
      formLabelWrapperFood.classList.add("travelmate-form__label-wrapper--hidden");

      formCloseButtonTransport.classList.add("travelmate-form__close-button--close");
      formLabelWrapperTransport.classList.add("travelmate-form__label-wrapper--hidden");

      formCloseButtonLevel.classList.add("travelmate-form__close-button--close");
      formLabelWrapperLevel.classList.add("travelmate-form__label-wrapper--hidden");
    }

    if (window.matchMedia("(min-width: 768px)").matches || window.matchMedia("(max-width: 1439px)").matches) {
      formCloseButtonHobby.classList.remove("travelmate-form__close-button--close");
      formLabelWrapperHobby.classList.remove("travelmate-form__label-wrapper--hidden");

      formCloseButtonMusic.classList.remove("travelmate-form__close-button--close");
      formLabelWrapperMusic.classList.remove("travelmate-form__label-wrapper--hidden");

      formCloseButtonFood.classList.remove("travelmate-form__close-button--close");
      formLabelWrapperFood.classList.remove("travelmate-form__label-wrapper--hidden");

      formCloseButtonTransport.classList.remove("travelmate-form__close-button--close");
      formLabelWrapperTransport.classList.remove("travelmate-form__label-wrapper--hidden");

      formCloseButtonLevel.classList.remove("travelmate-form__close-button--close");
      formLabelWrapperLevel.classList.remove("travelmate-form__label-wrapper--hidden");
    }
  }, 500));
  if (window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(min-width: 1440px)").matches) {
    formCloseButtonHobby.classList.add("travelmate-form__close-button--close");
    formLabelWrapperHobby.classList.add("travelmate-form__label-wrapper--hidden");

    formCloseButtonMusic.classList.add("travelmate-form__close-button--close");
    formLabelWrapperMusic.classList.add("travelmate-form__label-wrapper--hidden");

    formCloseButtonFood.classList.add("travelmate-form__close-button--close");
    formLabelWrapperFood.classList.add("travelmate-form__label-wrapper--hidden");

    formCloseButtonTransport.classList.add("travelmate-form__close-button--close");
    formLabelWrapperTransport.classList.add("travelmate-form__label-wrapper--hidden");

    formCloseButtonLevel.classList.add("travelmate-form__close-button--close");
    formLabelWrapperLevel.classList.add("travelmate-form__label-wrapper--hidden");
  }

  if (formCloseButtonHobby) {
    formCloseButtonHobby.addEventListener("click", function () {
      if (formLabelWrapperHobby.classList.contains("travelmate-form__label-wrapper--hidden")) {
        formCloseButtonHobby.classList.remove("travelmate-form__close-button--close");
        formLabelWrapperHobby.classList.remove("travelmate-form__label-wrapper--hidden");
      } else {
        formCloseButtonHobby.classList.add("travelmate-form__close-button--close");
        formLabelWrapperHobby.classList.add("travelmate-form__label-wrapper--hidden");
      }
    });
  }

  if (formCloseButtonMusic) {
    formCloseButtonMusic.addEventListener("click", function () {
      if (formLabelWrapperMusic.classList.contains("travelmate-form__label-wrapper--hidden")) {
        formCloseButtonMusic.classList.remove("travelmate-form__close-button--close");
        formLabelWrapperMusic.classList.remove("travelmate-form__label-wrapper--hidden");
      } else {
        formCloseButtonMusic.classList.add("travelmate-form__close-button--close");
        formLabelWrapperMusic.classList.add("travelmate-form__label-wrapper--hidden");
      }
    });
  }

  if (formCloseButtonFood) {
    formCloseButtonFood.addEventListener("click", function () {
      if (formLabelWrapperFood.classList.contains("travelmate-form__label-wrapper--hidden")) {
        formCloseButtonFood.classList.remove("travelmate-form__close-button--close");
        formLabelWrapperFood.classList.remove("travelmate-form__label-wrapper--hidden");
      } else {
        formCloseButtonFood.classList.add("travelmate-form__close-button--close");
        formLabelWrapperFood.classList.add("travelmate-form__label-wrapper--hidden");
      }
    });
  }

  if (formCloseButtonTransport) {
    formCloseButtonTransport.addEventListener("click", function () {
      if (formLabelWrapperTransport.classList.contains("travelmate-form__label-wrapper--hidden")) {
        formCloseButtonTransport.classList.remove("travelmate-form__close-button--close");
        formLabelWrapperTransport.classList.remove("travelmate-form__label-wrapper--hidden");
      } else {
        formCloseButtonTransport.classList.add("travelmate-form__close-button--close");
        formLabelWrapperTransport.classList.add("travelmate-form__label-wrapper--hidden");
      }
    });
  }

  if (formCloseButtonLevel) {
    formCloseButtonLevel.addEventListener("click", function () {
      if (formLabelWrapperLevel.classList.contains("travelmate-form__label-wrapper--hidden")) {
        formCloseButtonLevel.classList.remove("travelmate-form__close-button--close");
        formLabelWrapperLevel.classList.remove("travelmate-form__label-wrapper--hidden");
      } else {
        formCloseButtonLevel.classList.add("travelmate-form__close-button--close");
        formLabelWrapperLevel.classList.add("travelmate-form__label-wrapper--hidden");
      }
    });
  }
}
