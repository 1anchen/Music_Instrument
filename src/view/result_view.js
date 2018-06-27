const PubSub = require('../helper/pub_sub.js')

const ResultView = function(field){
  this.field = field;
}

ResultView.prototype.bindEvent = function () {
  PubSub.subscribe('InstrumentFamilies:instrument',(event) =>{
    const selectedInstrument = event.detail;
    this.displayResult(selectedInstrument);
  });
};

ResultView.prototype.displayResult = function (instrument) {
  console.log(instrument);
  const resultField = document.querySelector('#result-field');
  this.field.textContent = `${instrument.name} ${instrument.description} ${instrument.instruments}`;
  resultField.appendChild(this.field);
};

module.exports = ResultView;
