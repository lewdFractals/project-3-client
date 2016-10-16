'use strict';

const indexPagesTemplate = require('../templates/pages-listing.handlebars');

const createPageSuccess = (data) => {
  console.log("Page successfully created!", data);
};

const createPageFail = (data) => {
  console.log("Page creation failed!", data);
};

const indexPagesSuccess = (pages) => {
  $('.content-display').html(indexPagesTemplate(pages));
};

const success = (data) => {
  console.log("SUCCESS!", data);
};

const failure = (data) => {
  console.log("OOPS!", data);
};


module.exports = {
  createPageSuccess,
  createPageFail,
  indexPagesSuccess,
  success,
  failure
};
