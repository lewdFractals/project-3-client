'use strict';

// const app = require('../app');

const createBlogSuccess = (data) => {
  console.log("Blog successfully created!", data);
};

const createBlogFail = (data) => {
  console.log("Blog creation failed!", data);
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
  success,
  failure
};
