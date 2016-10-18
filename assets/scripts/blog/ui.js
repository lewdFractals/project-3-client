'use strict';

const indexBlogsTemplate = require('../templates/blogs-listing.handlebars');

const clearForm = () => {
  $('input').val('');
};

const createBlogSuccess = (data) => {
  console.log("Blog successfully created!", data);
  clearForm();
};

const createBlogFail = (data) => {
  console.log("Blog creation failed!", data);
};

const indexBlogsSuccess = (blogs) => {
  $('.content-display').html(indexBlogsTemplate(blogs));
  console.log(blogs);
};

const success = (data) => {
  console.log("SUCCESS!", data);
  clearForm();
};

const failure = (data) => {
  console.log("OOPS!", data);
};


module.exports = {
  createBlogSuccess,
  createBlogFail,
  indexBlogsSuccess,
  success,
  failure,
};
