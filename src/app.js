const InstrumentFamilies = require('./models/instrument_families')
const SelectView = require('./view/select_view')
const ResultView = require('./view/result_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const field = document.createElement('label');
  const instrumentFamilies = new InstrumentFamilies();
  const instrumentData = instrumentFamilies.instrumentFamilies;
  const selectView = new SelectView(instrumentData);
  const resultView = new ResultView(field);

  selectView.bindEvent();
  resultView.bindEvent();
  instrumentFamilies.bindEvent();


});
