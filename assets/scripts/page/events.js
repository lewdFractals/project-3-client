'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onCreatePage = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createPage(data)
    .done(ui.createPageSuccess)
    .fail(ui.createPageFail);
};

const onIndexPages = function (event) {
  event.preventDefault();
  api.indexPages()
    .done(ui.indexPagesSuccess)
    .fail(ui.failure);
};

const onShowPage = function (event) {
  console.log("clicked!");
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showPage(data)
    .done(ui.showPageSuccess)
    .fail(ui.failure);
};

const onEditPage = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.editPage(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onDeletePage = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deletePage(data)
    .done(ui.success)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('#create-page').on('submit', onCreatePage);
  $('#index-pages').on('submit', onIndexPages);
  // $('#show-page').on('submit', onShowPage);
  // $('#edit-page').on('submit', onEditPage);
  // $('#delete-page').on('submit', onDeletePage);

  $('.content-display').on('submit','#show-page', onShowPage);
  $('.content-display').on('submit','#edit-page', onEditPage);
  $('.content-display').on('submit','#delete-page', onDeletePage);
};

module.exports = {
  addHandlers,
};
