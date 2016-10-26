'use strict';

const indexPagesTemplate = require('../templates/pages-listing.handlebars');
const showPageTemplate = require('../templates/show-page.handlebars');

const clearForm = () => {
  $('input').val('');
};

const clearTinyMCE = () => {
  tinyMCE.activeEditor.setContent('');
};

const displayMessage = () => {
  $('#message').fadeIn('fast').delay(3000).fadeOut('fast');
};

const createPageSuccess = () => {
  document.getElementById("message").innerHTML = 'Page successfully created!';
  displayMessage();
  $('#create-page-modal').modal('hide');
  clearForm();
  clearTinyMCE();
};

const createPageFail = () => {
  document.getElementById("message").innerHTML = 'You failed to put text in all the required fileds. Please enter all the required text.';
  displayMessage();
};

const indexPagesSuccess = (pages) => {
  $('.content-display').html(indexPagesTemplate(pages));
};

const showPageSuccess = (page) => {
  $('.content-display').html(showPageTemplate(page));
};

const success = () => {
  clearForm();
};

const failure = () => {
  document.getElementById("message").innerHTML = 'Please try again.';
  displayMessage();
};


module.exports = {
  createPageSuccess,
  createPageFail,
  indexPagesSuccess,
  showPageSuccess,
  success,
  failure
};
