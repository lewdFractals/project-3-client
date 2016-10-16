'use strict';

// const app = require('../app');

const createPageSuccess = (data) => {
  console.log("Page successfully created!", data);
};

const createPageFail = (data) => {
  console.log("Page creation failed!", data);
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
  success,
  failure
};
