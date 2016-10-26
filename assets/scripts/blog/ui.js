'use strict';

const indexBlogsTemplate = require('../templates/blogs-listing.handlebars');
const publicIndexBlogsTemplate = require('../templates/public-blogs-listing.handlebars');

const clearForm = () => {
  $('input').val('');
};

const clearTinyMCE = () => {
  tinyMCE.activeEditor.setContent('');
};

const displayMessage = () => {
  $('#message').fadeIn('fast').delay(3000).fadeOut('fast');
};

const createBlogSuccess = () => {
  document.getElementById("message").innerHTML = 'Blog post successfully submitted!';
  displayMessage();
  $('#create-blog-modal').modal('hide');
  clearForm();
  clearTinyMCE();
};

const createBlogFail = () => {
  document.getElementById("message").innerHTML = 'You failed to put text in all the required fileds. Please enter all the required text.';
  displayMessage();
};

const publicIndexBlogsSuccess = (blogs) => {
  $('.public-display').html(publicIndexBlogsTemplate(blogs));
};

const indexBlogsSuccess = (blogs) => {
  $('.content-display').html(indexBlogsTemplate(blogs));
};

const success = () => {
  clearForm();
};

const failure = () => {
  document.getElementById("message").innerHTML = 'Please try again.';
  displayMessage();
};


module.exports = {
  createBlogSuccess,
  createBlogFail,
  publicIndexBlogsSuccess,
  indexBlogsSuccess,
  success,
  failure,
};
