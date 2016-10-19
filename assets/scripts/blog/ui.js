'use strict';

const indexBlogsTemplate = require('../templates/blogs-listing.handlebars');
const publicIndexBlogsTemplate = require('../templates/public-blogs-listing.handlebars');

const clearForm = () => {
  $('input').val('');
};

const createBlogSuccess = (data) => {
  console.log("Blog successfully created!", data);
  clearForm();
  $('#create-blog-modal').modal('hide');
};

const createBlogFail = (data) => {
  console.log("Blog creation failed!", data);
};

const publicIndexBlogsSuccess = (blogs) => {
  $('.public-display').html(publicIndexBlogsTemplate(blogs));
  console.log(blogs);
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
  publicIndexBlogsSuccess,
  indexBlogsSuccess,
  success,
  failure,
};
