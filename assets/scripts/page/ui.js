'use strict';

const indexPagesTemplate = require('../templates/pages-listing.handlebars');
const showPageTemplate = require('../templates/show-page.handlebars');

const clearForm = () => {
  $('input').val('');
};

const createPageSuccess = (data) => {
  console.log("Page successfully created!", data);
  clearForm();
  $('#create-page-modal').modal('hide');  
};

const createPageFail = (data) => {
  console.log("Page creation failed!", data);
};

const indexPagesSuccess = (pages) => {
  $('.content-display').html(indexPagesTemplate(pages));
};

const showPageSuccess = (page) => {
  $('.content-display').html(showPageTemplate(page));
};

const success = (data) => {
  console.log("SUCCESS!", data);
  clearForm();
};

const failure = (data) => {
  console.log("OOPS!", data);
};


module.exports = {
  createPageSuccess,
  createPageFail,
  indexPagesSuccess,
  showPageSuccess,
  success,
  failure
};
