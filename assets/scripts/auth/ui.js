'use strict';

const app = require('../app');

const hideContainer = () => {
  $('.container').hide();
};

const showContainer = () => {
  $('.container').show();
};

$(window).load(function(){
  hideContainer();
});

const clearForm = () => {
  $('input').val('');
};

const toggleAuth = () => {
  $('.auth-nav').toggle();
  $('.auth-forms').toggle();
  $('.user-nav').toggle();
};

const toggleAuthOptions = () => {
  $('.sign-up-link').toggleClass('hidden');
  $('.log-in-link').toggleClass('block');
  $('#log-in').toggle('fast');
  $('#sign-up').toggle('fast');
};

const toggleChangePassword = () => {
  $('.pwd-form').slideToggle();
};

// const logInFailure = () => {
//   messageFade('.messages div', 'logInFail');
// };
//
// const logOutFailure = () => {
//   messageFade('.messages div', 'logOutFail');
// };
//
// const passwordChangeFailure = () => {
//   messageFade('.messages div', 'passwordChangeFail');
// };
//
// const signUpFailure = () => {
//   messageFade('.messages div', 'signUpFail');
// };

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const logInSuccess = (data) => {
  app.user = data.user;
  toggleAuth();
  showContainer();
  clearForm();
};

const logOutSuccess = () => {
  app.user = null;
  toggleAuth();
  hideContainer();
  clearForm('change-password');
  $('.pwd-form').hide();
  $('.sign-up-link').removeClass('hidden');
  $('.log-in-link').removeClass('hidden');
  $('#log-in').show();
  $('#sign-up').hide();
};


module.exports = {
  clearForm,
  toggleAuth,
  toggleAuthOptions,
  toggleChangePassword,
  // logInFailure,
  // logOutFailure,
  // passwordChangeFailure,
  // signUpFailure,
  logInSuccess,
  logOutSuccess,
  failure,
  success,
  hideContainer,
  showContainer
};
