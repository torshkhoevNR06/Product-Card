export class Form {
  constructor(form) {
    this.form = document.getElementById(form);
  };
  
  getData(event) {
    this.form = event.target;
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    return data;
  };
    
  isValidityForm() {
    return this.form.checkValidity();
  };
  
  isResetFormValues() {
    this.form.reset();
  };

  isEqualValues(firstValue, secondValue) {
    return firstValue === secondValue;
  };
}