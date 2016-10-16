'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onCreateBlog = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBlog(data)
    .done(ui.createBlogSuccess)
    .fail(ui.createBlogFail);
};

const onIndexBlogs = function (event) {
  event.preventDefault();
  api.indexBlogs()
    .done(ui.success)
    .fail(ui.failure);
};

const onShowBlog = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showBlog(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onEditBlog = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.editBlog(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onDeleteBlog = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteBlog(data)
    .done(ui.success)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('#create-blog').on('submit', onCreateBlog);
  $('#index-blogs').on('submit', onIndexBlogs);
  $('#show-blog').on('submit', onShowBlog);
  $('#edit-blog').on('submit', onEditBlog);
  $('#delete-blog').on('submit', onDeleteBlog);
};

module.exports = {
  addHandlers,
};
