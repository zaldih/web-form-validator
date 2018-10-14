const REGEXP = {
  NAME: /^[A-z]{3,50}$/,
  SURNAME: /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+)){3,250}$/,
  EMAIL : /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
  AGE : /^(1[6-9]|[2-9][0-9]|1[01][0-9]|120)$/,
  POSTCODE_SPAIN : /^[0-9]{5}$/,
  POSTCODE_USA : /^[0-9]*$/,
  BORNAGE_SPAIN : /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/g,
  BORNAGE_USA: /((0|1)\d{1})-((0|1|2)\d{1})-((19|20)\d{2})/,
  PHONE_SPAIN : /^[0-9]{2,3}-? ?[0-9]{6,7}$/,
  PHONE_USA : /^[0-9]{2,3}-? ?[0-9]{6,7}$/,
};

const FONTAWESOME = {
  OK: "far fa-check-circle",
  KO: "far fa-times-circle"
};

const FORMVIEW = {
  NAME_FIELD : 'exampleInputName',
  NAME_STATUS : 'nameStatus',

  SURNAME_FIELD : 'exampleInputSurname',
  SURNAME_STATUS : 'surnameStatus',
  
  EMAIL_FIELD : 'exampleInputEmail',
  EMAIL_STATUS : 'emailStatus',

  AGE_FIELD : 'exampleInputAge',
  AGE_STATUS : 'ageStatus',

  COUNTRY_FIELD : 'exampleInputCountry',
  COUNTRY_STATUS : 'countryStatus',

  POSTCODE_FIELD : 'exampleInputPostlCode',
  POSTCODE_STATUS : 'postCodeStatus',

  BORNAGE_FIELD : 'exampleInputBornDate',
  BORNAGE_STATUS : 'bornAgeStatus',

  PHONE_FIELD : 'exampleInputPhoneNumber',
  PHONE_STATUS : 'PhoneStatus',

  COUNTRY_FIELD : 'exampleInputCountry',
}