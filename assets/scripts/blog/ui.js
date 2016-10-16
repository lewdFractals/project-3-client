'use strict';

const indexBlogsTemplate = require('../templates/blogs-listing.handlebars');

const createBlogSuccess = (data) => {
  console.log("Blog successfully created!", data);
};

const createBlogFail = (data) => {
  console.log("Blog creation failed!", data);
};

const indexBlogsSuccess = (blogs) => {
  $('.content-display').html(indexBlogsTemplate(blogs));
};

const success = (data) => {
  console.log("SUCCESS!", data);
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
