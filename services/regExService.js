const regExpService = (function() {
  function isValidName(name) {
    return REGEXP.NAME.test(name);
  }
  function isValidSurname(surname) {
    return REGEXP.SURNAME.test(surname);
  }
  function isValidEmail(email) {
    return REGEXP.EMAIL.test(email);
  }
  function isValidAge(age) {
    return REGEXP.AGE.test(age);
  }
  function isValidPostcod(codpost, country) {
    if(country == "Spain")
      return REGEXP.POSTCODE_SPAIN.test(codpost);
    else
      return REGEXP.POSTCODE_USA.test(codpost);
  }
  function isValidBornage(age, country) {
    if(country == "Spain")
      return REGEXP.BORNAGE_SPAIN.test(age);
    else
      return REGEXP.BORNAGE_USA.test(age);
  }
  function isValidPhone(phone, country) {
    console.log(country);
    if(country == "Spain")
      return REGEXP.PHONE_SPAIN.test(phone);
    else
      return REGEXP.PHONE_USA.test(phone);
  }

  return {
    isValidName,
    isValidSurname,
    isValidEmail,
    isValidAge,
    isValidPostcod,
    isValidBornage,
    isValidPhone
  };
})();