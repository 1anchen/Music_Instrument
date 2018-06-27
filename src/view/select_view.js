const PubSub = require('../helper/pub_sub.js')

const SelectView = function(instrumentData){
  this.instrumentData = instrumentData;
};

SelectView.prototype.bindEvent = function () {
  const selection = document.querySelector('#instrument-families');
  this.populate(this.instrumentData,selection);

  selection.addEventListener('change',(event) => {
    const selectedInstrument = event.target.value;
    PubSub.publish('SelectView:selectedInstrument', selectedInstrument);
  })

};


SelectView.prototype.populate = function (instrumentsData, selection) {
  instrumentsData.forEach((instrument, index) =>{
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index
    selection.appendChild(option);
  })

};

module.exports = SelectView;
