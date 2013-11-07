describe ("Validate HTML5 Form: ", function() {
    
    beforeEach(function() {
        var novalidateForm = document.createElement('form');
        var validateForm = document.createElement('form');
        novalidateForm.setAttribute('novalidate');
        novalidateForm.setAttribute('id', 'novalidate');
        validateForm.setAttribute('id', 'validate');

        // input
        var inputText = document.createElement('input');
        inputText.setAttribute('type', 'text')
        inputText.setAttribute('required', 'required');
        noV
        validateForm.appendChild(inputText);

        
        document.body.appendChild(novalidateForm);
        document.body.appendChild(validateForm);
    });

    it("Should log to console and exit if the form has the novalidate attribute set", function() {
        var novalid = html5FormValidator(document.getElementById('novalidate'));
        expect(novalid).toBeFalsy();
    });
})