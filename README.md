Made with :heart: in Malaga.

# HTML FORM validator

Respecting the architecture **MODEL - VIEW - CONTROLLER**, this project allows to validate the fields of a web form using regular expressions.


## GETTING STARTER
### INSTALLATION
It is not necessary to install any dependencies for the deployment, unless you want to launch tests. To install them, please execute:
> npm i

### RUNNING
Just open the example form **./Index.html** in a browser. (or run **npm run start**)

### Running the tests
The project contains a test battery that verifies that the validation service works as it should work. The tests are within the wonderful **"test" directory**.
To execute them, write in a terminal:
> npm test

Karma will take care of the rest and show you by console the results.

## HOW TO IMPLEMENT
Either you want to implement an existing form, or you want to create one from scratch ...
Imagine that we want to validate an input **"Name"**
1. In the html, add next to the field to validate the following elements
```html
 <i id="nameStatus" class=""></i>  
 ```

(In this element will show if the entry is valid or not).&nbsp;&nbsp;

And in the input itself, add the following html attribute:
```html
  oninput="regExpController.validateName()"
 ```

2. Add the following lines in FORMVIEW (in regexp.constants.js):
  ```js
  NAME_FIELD : '<id_input_element_in_html>',
  NAME_STATUS : '<id_status_element_in_html>',
  ```
  
and create the regulated expression within REGEXP following the following example:
 ```js
  NAME: /\^[A-z]{3,50}$/,
  ```

&nbsp;
3. Add the following lines within regExpService:
```js
function isValidName(name) {
    return REGEXP.NAME.test(name);
}
  ```

4. Finally, add the following function to regExpController:
  ```js
  function validateName() {
    const name = this.regExpView.getElementById(FORMVIEW.NAME_FIELD).value;
    this.regExpService.isValidName(name)
      ? setOkStatus(FORMVIEW.NAME_STATUS)
      : setKOStatus(FORMVIEW.NAME_STATUS);
  }
  ```

## Files explained
* [/app.js](): Initializes the controller, linking it to the view (that is, the window object that contains the elements).

* [/constants/regexp.constants.js](): Here are the constants, as well as the regular expressions or the ids of the INPUTS of the web form.

* [/services/regExService.js](): Service that is responsible for validating input parameters with regular expressions.

* [/controllers/regExController.js](): Controller that interacts with the view to modify certain elements (such as validation) and will use the services to validate them.

* [/test/regExpServiceSpect.js](): Contains a unit test battery from Jasmine that tests the service.


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
