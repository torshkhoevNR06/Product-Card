export default class Form {
  constructor(form) {
    this.form = document.getElementById(`${form}`);
  };
  
  getData(event) {
    this.form = event.target;
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    data.createdOn = new Date();
    return data;
  };
  
  validityValues(firstValue, secondValue) {
    return firstValue === secondValue;
  };

  isResetValues() {
    return this.form.reset();
  };
}