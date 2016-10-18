'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onPublicIndexBlogs = function (event) {
  event.preventDefault();
  api.publicIndexBlogs()
    .done(ui.publicIndexBlogsSuccess)
    .fail(ui.failure);
};

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
    .done(ui.indexBlogsSuccess)
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
  $('#public-index-blogs').on('submit', onPublicIndexBlogs);
  $('#create-blog').on('submit', onCreateBlog);
  $('#index-blogs').on('submit', onIndexBlogs);
  $('#show-blog').on('submit', onShowBlog);
  // $('#edit-blog').on('submit', onEditBlog);
  // $('#delete-blog').on('submit', onDeleteBlog);

  $('.content-display').on('submit','#edit-blog', onEditBlog);
  $('.content-display').on('submit','#delete-blog', onDeleteBlog);
};

module.exports = {
  addHandlers,
};
