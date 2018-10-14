const regExpController = (function() {
  this.regExpService;
  this.regExpView;
  let setStatus2;

  function init(regExpService, regExpView) {
    this.regExpService = regExpService;
    this.regExpView = regExpView;    
    
    setStatus2 = setStatus.bind(this);
  }

  function showDI() {
    console.log("regExpService", this.regExpService);
  }

  function validateName() {
    const name = this.regExpView.getElementById(FORMVIEW.NAME_FIELD).value;
    this.regExpService.isValidName(name)
      ? setOkStatus(FORMVIEW.NAME_STATUS)
      : setKOStatus(FORMVIEW.NAME_STATUS);
  }

  function validateSurname() {
    const surname = this.regExpView.getElementById(FORMVIEW.SURNAME_FIELD).value;
    this.regExpService.isValidSurname(surname)
      ? setOkStatus(FORMVIEW.SURNAME_STATUS)
      : setKOStatus(FORMVIEW.SURNAME_STATUS);
  }

  function validateEmail() {
    const email = this.regExpView.getElementById(FORMVIEW.EMAIL_FIELD).value;
    this.regExpService.isValidEmail(email)
      ? setOkStatus(FORMVIEW.EMAIL_STATUS)
      : setKOStatus(FORMVIEW.EMAIL_STATUS);
  }

  function validateAge() {
    const age = this.regExpView.getElementById(FORMVIEW.AGE_FIELD).value;
    this.regExpService.isValidAge(age)
      ? setOkStatus(FORMVIEW.AGE_STATUS)
      : setKOStatus(FORMVIEW.AGE_STATUS);
  }

  function validatePostcod() {
    const cospost = this.regExpView.getElementById(FORMVIEW.POSTCODE_FIELD).value;
    const country = this.regExpView.getElementById(FORMVIEW.COUNTRY_FIELD).value;
    this.regExpService.isValidPostcod(cospost, country)
      ? setOkStatus(FORMVIEW.POSTCODE_STATUS)
      : setKOStatus(FORMVIEW.POSTCODE_STATUS);
  }

  function validateBornage() {
    const bornage = this.regExpView.getElementById(FORMVIEW.BORNAGE_FIELD).value;
    const country = this.regExpView.getElementById(FORMVIEW.COUNTRY_FIELD).value;
    this.regExpService.isValidPostcod(bornage, country)
      ? setOkStatus(FORMVIEW.BORNAGE_STATUS)
      : setKOStatus(FORMVIEW.BORNAGE_STATUS);
  }

  function validatePhone() {
    const phone = this.regExpView.getElementById(FORMVIEW.PHONE_FIELD).value;
    const country = this.regExpView.getElementById(FORMVIEW.COUNTRY_FIELD).value;
    this.regExpService.isValidPostcod(phone, country)
      ? setOkStatus(FORMVIEW.PHONE_STATUS)
      : setKOStatus(FORMVIEW.PHONE_STATUS);
  }
  
  //#region  PRIVATE FUNCTIONS 
    function setOkStatus(field) {
      setStatus2(field, FONTAWESOME.OK);
    }
    function setKOStatus(field) {
      setStatus2(field, FONTAWESOME.KO);
    }
    function setStatus(field, status) {
      this.regExpView.getElementById(field).className = status;
    }    
  //#endregion
  
  return {
    init,
    showDI,
    validateName,
    validateSurname,
    validateEmail,
    validateAge,
    validatePostcod,
    validateBornage,
    validatePhone,
  };
})();


