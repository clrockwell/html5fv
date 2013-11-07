
/**
 * @param formElement a dom element 
 * e.g. document.getElementsByTagName('form');
 */
function html5FormValidator(formElement) {
    
    // first thing, make sure we should be here
    this.isFormNoValidate;

    this._form = formElement;
    /**
     * Fields that should be publicly available to be set
     */
    
    // html elements used as containers
    this.errorListClass = 'errorsList';    
    this.errorContainerClass = 'errorsContains';


    /**
     * Fields that should be private
     */

    // Should the default UA messages be used
    //   can't figure out why anyone would actually want to override this though
    this._useDefaultValidationMsg = false;

    // default messages to override, default messages?
    // will be used to set element.validationMessage
    // @todo get the default values for all of these in any modern browser (only one)
    this._msgs = {
        'patternMismatch': '',
        'rangeOverflow': '',
        'rangeUnderflow': '',
        'stepMismatch': '',
        'tooLong': '',
        'typeMismatch': '',
        'valueMissing': '',
        'valid': '', // this could be used if live validation is desired
    }

    // just for testing;
    this._validateForm = false;

    // holds errors
    this._validationErrors;

    this.themeErrorMsg = function() {

    }

    // if form has attribute no validate, return false
    this.isFormNoValidate = function() {
        if (this._form.hasAttribute('novalidate')) {
            if (console) {
                console.log('The form has the \'novalidate\' attribute set so it will not be validated');
                return false;
            }
        }
        this._validateForm = true;
    }
}