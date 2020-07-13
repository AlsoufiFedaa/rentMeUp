webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./assets/kitchen.jpg */ "./src/assets/kitchen.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n:root {\n  --primaryColor: #af9a7d;\n  --mainWhite: #fff;\n  --offWhite: #f7f7f7;\n  --mainBlack: #222;\n  --mainGrey: #ececec;\n  --darkGrey: #cfcfcf;\n  --mainTransition: all 0.3s linear;\n  --mainSpacing: 3px;\n  --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);\n  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5); }\n\n/* globals */\nbody {\n  padding-top: 66px;\n  color: var(--mainBlack);\n  background: var(--mainWhite);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  line-height: 1.2; }\n\nh1 {\n  font-size: 3em;\n  line-height: 1;\n  margin-bottom: 0.5em; }\n\nh2 {\n  font-size: 2em;\n  margin-bottom: 0.75em; }\n\nh3 {\n  font-size: 1.5em;\n  line-height: 1;\n  margin-bottom: 1em; }\n\nh4 {\n  font-size: 1.2em;\n  line-height: 1.25;\n  margin-bottom: 1.25em; }\n\nh5 {\n  font-size: 1em;\n  font-weight: bold;\n  margin-bottom: 1.5em; }\n\nh6 {\n  font-size: 1em;\n  font-weight: bold;\n  margin-bottom: 1.5em; }\n\n.btn-primary {\n  display: inline-block;\n  text-decoration: none;\n  letter-spacing: var(--mainSpacing);\n  color: var(--mainBlack);\n  background: var(--primaryColor);\n  padding: 0.4rem 0.9rem;\n  border: 3px solid var(--primaryColor);\n  transition: var(--mainTransition);\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-left: 30px;\n  margin-top: 40px; }\n\n.uName {\n  height: 70px;\n  background-color: #bcbec0;\n  display: flex;\n  justify-self: flex-end;\n  flex-direction: row;\n  align-items: center;\n  align-self: center;\n  margin-right: 50px;\n  padding: 2; }\n\n.btn-primary:hover {\n  background: transparent;\n  color: var(--primaryColor); }\n\n.btn {\n  text-decoration: none;\n  letter-spacing: var(--mainSpacing);\n  color: var(--mainBlack);\n  background-color: var(--primaryColor);\n  padding: 0.4rem 0.9rem;\n  border: 3px solid var(--primaryColor);\n  transition: var(--mainTransition);\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-left: 30px;\n  margin-top: 40px; }\n\n.btn:hover {\n  background-color: transparent;\n  color: var(--primaryColor); }\n\n.btn-add {\n  margin-left: 300px;\n  margin-top: 55px;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: bold;\n  align-self: center;\n  color: var(--mainBlack);\n  background: var(--primaryColor);\n  padding: 0.4rem 0.9rem;\n  border: 3px solid var(--primaryColor);\n  transition: var(--mainTransition);\n  text-transform: uppercase;\n  cursor: pointer;\n  width: 219px; }\n\n.btn-add:hover {\n  background: transparent;\n  color: var(--primaryColor); }\n\n.loading {\n  text-transform: capitalize;\n  text-align: center;\n  margin-top: 3rem; }\n\n.error {\n  text-align: center;\n  text-transform: uppercase;\n  margin: 2rem 0; }\n\n.empty-search {\n  text-align: center;\n  text-transform: capitalize;\n  margin: 2rem 0;\n  padding: 1rem;\n  letter-spacing: var(--mainSpacing); }\n\n/* end of globals */\n/* Navbar */\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: var(--offWhite);\n  z-index: 200;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px; }\n\n.nav-header {\n  display: flex;\n  justify-content: space-between;\n  position: static; }\n\n.nav-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none; }\n\n.nav-icon {\n  font-size: 1.5rem;\n  color: var(--primaryColor); }\n\n.nav-links {\n  height: 0;\n  overflow: hidden;\n  transition: var(--mainTransition);\n  list-style-type: none; }\n\n.nav-links a {\n  display: block;\n  text-decoration: none;\n  padding: 1rem 0;\n  color: #532a03;\n  transition: var(--mainTransition);\n  text-align: center;\n  font-size: 18px;\n  font-family: fantasy;\n  font-weight: 550;\n  letter-spacing: var(--mainSpacing); }\n\n.nav-links a:hover {\n  color: var(--primaryColor); }\n\n.show-nav {\n  height: 190px;\n  overflow: visible; }\n\n@media screen and (min-width: 768px) {\n  .nav-btn {\n    display: none; }\n  .nav-center {\n    max-width: 1990px;\n    margin: 0 auto;\n    display: flex;\n    margin-top: 0px;\n    justify-content: space-between; }\n  .nav-links {\n    height: auto;\n    display: flex;\n    margin-left: 3.7rem;\n    justify-self: center;\n    margin-top: 37px; }\n  .nav-links a {\n    margin: 0 1rem;\n    padding: 0.5rem 0; } }\n\n/* end of navbar */\n/* Hero */\n.defaultHero,\n.estateHero {\n  min-height: calc(100vh - 66px);\n  background: center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.estateHero {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  min-height: calc(100vh - 66px); }\n\n/* End of Hero */\n/* Banner */\n.banner {\n  display: inline-block;\n  background: rgba(12, 12, 12, 0.5);\n  color: var(--mainWhite);\n  padding: 2rem 1rem;\n  text-align: center;\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing);\n  z-index: 100;\n  margin-top: 15px; }\n\n.banner h1 {\n  font-size: 2.5rem; }\n\n.banner div {\n  width: 10rem;\n  height: 5px;\n  background: var(--primaryColor);\n  margin: 1.7rem auto; }\n\n.banner p {\n  font-size: 1.2rem;\n  margin-bottom: 2rem; }\n\n@media screen and (min-width: 576px) {\n  .banner {\n    padding: 2rem 3rem; }\n  .banner h1 {\n    font-size: 3rem; } }\n\n@media screen and (min-width: 992px) {\n  .banner {\n    padding: 2rem 6rem; }\n  .banner h1 {\n    font-size: 4rem; } }\n\n/* End of Banner */\n/* Title */\n.section-title {\n  text-align: center;\n  margin-bottom: 1rem;\n  margin-top: 2rem; }\n\n.section-title h4 {\n  font-size: 2rem;\n  letter-spacing: var(--mainSpacing);\n  text-transform: capitalize;\n  margin-bottom: 1rem;\n  margin-top: 10px; }\n\n.section-title div {\n  width: 5rem;\n  height: 5px;\n  margin: 0 auto;\n  background: var(--primaryColor); }\n\n.GestureGallery {\n  max-width: 100%; }\n\n/* end of Title */\n.container {\n  width: 100vw;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  visibility: hidden; }\n\n.img-container {\n  position: relative;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100vw;\n  overflow: hidden; }\n  .img-container:after {\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    top: 0;\n    right: 0; }\n  .img-container img {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto; }\n\n/* services */\n.services {\n  padding: 5rem 0; }\n\n.services {\n  background: var(--darkGrey);\n  text-align: center; }\n\n.services-center {\n  width: 90vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));\n  grid-row-gap: 2rem;\n  grid-column-gap: 50px; }\n\n.service span {\n  display: inline-block;\n  color: var(--primaryColor);\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem; }\n\n.services h6 {\n  letter-spacing: var(--mainSpacing);\n  text-transform: capitalize; }\n\n.services p {\n  width: 80%;\n  margin: 0 auto; }\n\n@media screen and (min-width: 992px) {\n  .services-center {\n    width: 95vw;\n    max-width: 1170px; } }\n\n@media screen and (min-width: 1200px) {\n  .services p {\n    width: 100%; } }\n\n/*end of services */\n/*contact*/\n.contacts {\n  padding: 0.4rem;\n  background: var(--mainBlack);\n  text-align: center;\n  display: block;\n  width: 100%;\n  position: relative;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.contact-center {\n  margin: 0 auto; }\n\n.contact {\n  display: inline-block;\n  margin-right: 33px;\n  justify-self: center;\n  align-self: center;\n  margin-top: 19px; }\n\n.contact img {\n  margin-bottom: 1.5rem; }\n\n.contact :hover {\n  width: 40px;\n  height: 40px;\n  transition: 0.4s all;\n  background: transparent;\n  background: var(--primaryColor); }\n\n/* single room*/\n.single-room {\n  padding: 5rem 0 0 0; }\n\n.data {\n  float: left; }\n\n.desc,\n.info {\n  margin: 30px;\n  float: left;\n  margin-left: 90px; }\n\n.desc h3 {\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing); }\n\n.desc p {\n  line-height: 1.5;\n  margin-left: 20px;\n  margin-top: 33px; }\n\n.info h3,\n.info h6 {\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing);\n  margin-top: 31px;\n  margin-left: 25px; }\n\n.info h6 {\n  font-weight: 400; }\n\n.room-extras {\n  width: 80vw;\n  margin: 0 auto 3rem auto; }\n\n.room-extras h6 {\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing); }\n\n.extras {\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem; }\n\n@media screen and (min-width: 992px) {\n  .info {\n    padding-left: 3rem; } }\n\n/* end of single room*/\n/*  rooms fitler*/\n.filter-container {\n  padding: 3rem 0; }\n\n.filter-form {\n  width: 60vw;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));\n  grid-row-gap: 2rem;\n  grid-column-gap: 40px; }\n\n.opt {\n  font-size: 1rem;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 1rem;\n  margin-top: 10px; }\n\n.wrapper {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  padding: 0 20px; }\n\n.addForm {\n  max-width: 1000px;\n  margin: 0 auto;\n  background: rgba(230, 224, 224, 0.5);\n  padding: 30px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); }\n\n.form-group {\n  text-transform: capitalize;\n  margin-top: 2rem; }\n\n.form-group label {\n  display: block;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 0.5rem;\n  font-family: Verdana;\n  font-weight: bold;\n  color: black; }\n\n.form-group input {\n  border: none;\n  border-bottom: 2px solid #af9a7d;\n  background: transparent; }\n\n.form-group input:focus {\n  border: 3px solid #af9a7d; }\n\n.AutoComplete:focus {\n  border: 3px solid #af9a7d; }\n\n.form-group input[type=\"radio\"] {\n  height: 15px;\n  width: 15px;\n  background-color: #af9a7d;\n  border-radius: 50%; }\n\n.form-group input[type=\"radio\"]:checked {\n  background-color: #af9a7d; }\n\n.form-control {\n  width: 100%;\n  background: transparent;\n  font-size: 1rem; }\n\n.size-inputs {\n  display: flex; }\n\n.size-input {\n  width: 40%;\n  padding: 0.2rem;\n  border: 1px solid var(--mainBlack);\n  border-radius: 0.3rem;\n  margin-right: 0.3rem; }\n\n.single-extra label {\n  display: inline-block;\n  font-size: 0.8rem;\n  margin-left: 0.5rem; }\n\n@media screen and (min-width: 776px) {\n  .filter-form {\n    width: 70vw; } }\n\n@media screen and (min-width: 992px) {\n  .filter-form {\n    width: 95vw;\n    max-width: 1170px; } }\n\n.singUp {\n  justify-self: center;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1;\n  position: absolute;\n  top: 30%;\n  left: 30%;\n  width: 20%;\n  margin-top: 30px; }\n\n.input {\n  flex-direction: row;\n  display: flex;\n  margin: 17px; }\n\n.infotype {\n  text-align: center; }\n\n.infoStreet {\n  text-align: center;\n  margin-left: 35px; }\n\n.infobtn {\n  margin-left: 30px;\n  margin-top: 0px;\n  text-decoration: none;\n  font-weight: bold;\n  align-self: center;\n  color: var(--mainBlack);\n  background: var(--primaryColor);\n  padding: 0.4rem 0.9rem;\n  border: 3px solid var(--primaryColor);\n  border-radius: 10%;\n  transition: var(--mainTransition);\n  text-transform: uppercase;\n  cursor: pointer;\n  width: 70px; }\n\n.infobtn:hover {\n  background: transparent;\n  color: var(--primaryColor); }\n\n.estate {\n  flex-direction: row;\n  border-radius: 20%;\n  padding: 10px;\n  background-color: aliceblue;\n  width: 80px; }\n\n.hours {\n  flex: 1 1;\n  flex-direction: column;\n  margin-left: 24;\n  justify-content: space-evenly; }\n\n.imageInfo {\n  align-self: center;\n  height: 40; }\n\n.estateInfoContainer {\n  flex: 1.5 1;\n  flex-direction: \"row\"; }\n\n.inNA {\n  margin-right: 20px; }\n\n.INna {\n  margin-block-end: 5px;\n  justify-content: end; }\n\n.navImg {\n  margin-left: 1.9rem;\n  height: 105px;\n  width: 120px; }\n\n.form-groupp {\n  width: 300px;\n  height: auto;\n  transform: translate(-50%, -50%);\n  margin-top: 50px; }\n\n.form-groupp .sl {\n  display: block;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 0.5rem; }\n\n.form-control {\n  position: relative;\n  height: 50px;\n  border: none;\n  border-bottom: 1px solid #555;\n  border-radius: 0;\n  transition: 0.5s ease-in-out;\n  font-size: 1rem;\n  letter-spacing: var(--mainSpacing);\n  text-transform: capitalize;\n  margin-bottom: 1rem;\n  margin-top: 10px; }\n\n.form-control:focus {\n  box-shadow: none;\n  border-bottom: 2px solid #222; }\n\n.sl {\n  position: absolute;\n  top: 0;\n  font-size: 18px;\n  padding-left: 15px;\n  line-height: 50px;\n  transition: 0.5s ease; }\n\n.form-control:focus + .sl,\n.form-control:valid + .sl {\n  top: -30px;\n  padding-left: 0;\n  font-size: 20x; }\n\n.imgSL {\n  position: absolute;\n  top: 30%;\n  left: 57%; }\n\n.IMsl {\n  height: 330px;\n  width: 330px; }\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  align-content: flex-start; }\n\n.singleImage {\n  padding: 0 20px 20px;\n  height: 300px;\n  border-radius: 34; }\n\n.singleImage:hover {\n  padding: 5px;\n  /* opacity: .5; */\n  transition: 0.9s;\n  transform: scale(1.24);\n  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */ }\n\n.popupParent {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.popupImage {\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  top: 25%;\n  bottom: 25%;\n  margin: auto; }\n\n.imageClosingButton {\n  position: relative; }\n\n.card {\n  border: 3px #f3f3f3 solid;\n  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s linear;\n  cursor: pointer;\n  background-color: #f3f3f3;\n  padding: 10px;\n  max-width: 220px;\n  text-align: left;\n  margin: 0 auto; }\n  .card:hover {\n    background-color: #f3f3f3;\n    border-color: #f3f3f3; }\n  .card img {\n    max-width: calc(100%);\n    margin: 0 auto;\n    display: block; }\n  .card .index {\n    background-color: rgba(0, 0, 0, 0.2);\n    color: #fff;\n    line-height: 20px;\n    font-size: 14px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: block;\n    padding: 0 10px; }\n  .card .price {\n    margin: 0;\n    padding: 10px 0;\n    font-weight: bold; }\n\n/* #endregion */\n/* #region cards slider */\n.col-wrapper {\n  display: flex;\n  position: absolute;\n  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955); }\n  .col-wrapper .card {\n    flex: 1 1;\n    min-width: 200px;\n    opacity: 0.7;\n    transform: scale(0.8);\n    box-shadow: none;\n    background-color: white;\n    border-color: white;\n    transition: opacity 300ms linear, border-color 300ms linear, background-color 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955); }\n    .col-wrapper .card .details {\n      opacity: 0;\n      transition: opacity 150ms linear; }\n\n.cards-slider.active-slide-0 #card-0 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-0 #card-0 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-1 #card-1 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-1 #card-1 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-2 #card-2 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-2 #card-2 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-3 #card-3 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-3 #card-3 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-4 #card-4 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-4 #card-4 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-5 #card-5 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-5 #card-5 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-6 #card-6 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-6 #card-6 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-7 #card-7 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-7 #card-7 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-8 #card-8 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-8 #card-8 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-9 #card-9 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-9 #card-9 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-10 #card-10 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-10 #card-10 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-11 #card-11 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-11 #card-11 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-12 #card-12 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-12 #card-12 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-13 #card-13 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-13 #card-13 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-14 #card-14 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-14 #card-14 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-15 #card-15 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-15 #card-15 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-16 #card-16 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-16 #card-16 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-17 #card-17 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-17 #card-17 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-18 #card-18 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-18 #card-18 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-19 #card-19 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-19 #card-19 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-20 #card-20 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-20 #card-20 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-21 #card-21 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-21 #card-21 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-22 #card-22 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-22 #card-22 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-23 #card-23 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-23 #card-23 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-24 #card-24 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-24 #card-24 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-25 #card-25 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-25 #card-25 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-26 #card-26 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-26 #card-26 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-27 #card-27 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-27 #card-27 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-28 #card-28 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-28 #card-28 .details {\n    opacity: 1; }\n\n.cards-slider.active-slide-29 #card-29 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n  .cards-slider.active-slide-29 #card-29 .details {\n    opacity: 1; }\n\n.col {\n  height: 264px;\n  position: relative; }\n  .col:before, .col:after {\n    content: \"\";\n    display: block;\n    width: 50%;\n    height: 120%;\n    background: linear-gradient(to right, white 15%, rgba(255, 255, 255, 0) 100%);\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2; }\n  .col:after {\n    left: auto;\n    right: 0;\n    background: linear-gradient(to left, white 15%, rgba(255, 255, 255, 0) 100%); }\n\n.cards-slider {\n  position: relative;\n  max-width: 226px;\n  margin: 0 auto; }\n  .cards-slider:after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 264px;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n/* #endregion */\n.card {\n  border: 2px #f3f3f3 solid;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s linear;\n  cursor: pointer;\n  background-color: #f3f3f3;\n  padding: 10px;\n  max-width: 220px;\n  text-align: left;\n  margin: 0 auto; }\n\n.card:hover {\n  background-color: #f3f3f3;\n  border-color: #f3f3f3; }\n\n.card img {\n  max-width: calc(100%);\n  margin: 0 auto;\n  display: block; }\n\n.card .index {\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #fff;\n  line-height: 20px;\n  font-size: 14px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  padding: 0 10px; }\n\n/* #endregion */\n/* #region cards slider */\n.cards-slider-wrapper {\n  display: flex;\n  position: absolute;\n  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955); }\n\n.cards-slider-wrapper .card {\n  flex: 1 1;\n  min-width: 200px;\n  opacity: 0.7;\n  transform: scale(0.8);\n  box-shadow: none;\n  background-color: white;\n  border-color: white;\n  transition: opacity 300ms linear, border-color 300ms linear, background-color 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955); }\n\n.cards-slider-wrapper .card .details {\n  opacity: 0;\n  transition: opacity 150ms linear; }\n\n.cards-slider.active-slide-0 #card-0 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-1 #card-1 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-2 #card-2 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-3 #card-3 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-4 #card-4 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-5 #card-5 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-6 #card-6 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-7 #card-7 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-8 #card-8 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-9 #card-9 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-10 #card-10 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-11 #card-11 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-12 #card-12 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-13 #card-13 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-14 #card-14 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.cards-slider.active-slide-15 #card-15 {\n  opacity: 1;\n  transform: scale(1);\n  background-color: #bcbec0;\n  border-color: #bcbec0; }\n\n.col {\n  height: 264px;\n  position: relative;\n  margin-top: 30px; }\n\n.col:before,\n.col:after {\n  content: \"\";\n  display: block;\n  width: 50%;\n  height: 120%;\n  background: linear-gradient(to right, white 15%, rgba(255, 255, 255, 0) 100%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2; }\n\n.col:after {\n  left: auto;\n  right: 0;\n  background: linear-gradient(to left, white 15%, rgba(255, 255, 255, 0) 100%); }\n\n.cards-slider {\n  position: relative;\n  max-width: 226px;\n  margin: 0 auto; }\n\n.cards-slider:after {\n  content: \"\";\n  display: block;\n  width: 200px;\n  height: 300px;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.labelFilter {\n  color: #000;\n  margin-left: 40px; }\n\n#top {\n  font-family: \"Podkova\"; }\n\n/* #endregion */\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\na {\n  color: var(--text-color);\n  text-decoration: none; }\n\n.nav-item {\n  width: calc(var(--nav-size) * 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/* Icon Button */\n.icon-button {\n  --button-size: calc(var(--nav-size) * 0.5);\n  width: var(--button-size);\n  height: var(--button-size);\n  background-color: #484a4d;\n  border-radius: 50%;\n  padding: 5px;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: filter 300ms; }\n\n.icon-button:hover {\n  filter: brightness(1.2); }\n\n.icon-button svg {\n  fill: var(--text-color);\n  width: 20px;\n  height: 20px; }\n\n/* Dropdown Menu */\n.dropdown {\n  position: absolute;\n  top: 58px;\n  width: 300px;\n  transform: translateX(-45%);\n  background-color: var(--bg);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n  overflow: hidden;\n  transition: height var(--speed) ease; }\n\n.menu {\n  width: 100%; }\n\n.menu-item {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  border-radius: var(--border-radius);\n  transition: background var(--speed);\n  padding: 0.5rem; }\n\n.menu-item .icon-button {\n  margin-right: 0.5rem; }\n\n.menu-item .icon-button:hover {\n  filter: none; }\n\n.menu-item:hover {\n  background-color: #525357; }\n\n.icon-right {\n  margin-left: auto; }\n\n/* CSSTransition classes  */\n.menu-primary-enter {\n  position: absolute;\n  transform: translateX(-110%); }\n\n.menu-primary-enter-active {\n  transform: translateX(0%);\n  transition: all var(--speed) ease; }\n\n.menu-primary-exit {\n  position: absolute; }\n\n.menu-primary-exit-active {\n  transform: translateX(-110%);\n  transition: all var(--speed) ease; }\n\n.menu-secondary-enter {\n  transform: translateX(110%); }\n\n.menu-secondary-enter-active {\n  transform: translateX(0%);\n  transition: all var(--speed) ease; }\n\n.menu-secondary-exit-active {\n  transform: translateX(110%);\n  transition: all var(--speed) ease; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/assets/kitchen.jpg":
/*!********************************!*\
  !*** ./src/assets/kitchen.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/kitchen.24194140.jpg";

/***/ })

})
//# sourceMappingURL=main.14b7192d985a9e541280.hot-update.js.map