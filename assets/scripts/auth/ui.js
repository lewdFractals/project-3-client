'use strict';

const app = require('../app');

const signUpSuccess = (data) => {
  console.log(data);
};
const signInSuccess = (data) => {
  console.log(data);
  app.user = data.user;
};
const signFailure = (error) => {
  document.getElementById("message").innerHTML = 'Sorry! Please try again';
  $('#message').fadeIn('fast').delay(5000).fadeOut('fast');
  console.log(error);
};
const signOutSuccess = (data) => {
  console.log(data);
  app.user = null;
};
const changePasswordSuccess = (data) => {
  document.getElementById("message").innerHTML = 'Password successfully changed';
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
  console.log(data);
};
const failure = (error) => {
  document.getElementById("message").innerHTML = 'Error: ' + error.statusText;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
    console.log(error);

};
module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signFailure
};
