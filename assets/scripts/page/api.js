'use strict';

const app = require('../app');


const createPage = (data) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/pages',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const indexPages = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/pages',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const showPage = (data) => {
  let token = app.user.token;
  let page_id = data.page._id;
  return $.ajax({
    url: app.host + '/pages/' + page_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const editPage = (data) => {
  let page_id = data.page._id;
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/pages/' + page_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const deletePage = (data) => {
  let token = app.user.token;
  let page_id = data.page._id;
  return $.ajax({
    url: app.host + '/pages/' + page_id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};


module.exports = {
  createPage,
  indexPages,
  showPage,
  editPage,
  deletePage,
};
