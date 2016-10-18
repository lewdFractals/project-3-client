'use strict';

const app = require('../app');


const createBlog = (data) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/blogs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const indexBlogs = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/myblogs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const showBlog = (data) => {
  let token = app.user.token;
  let blog_id = data.blog._id;
  return $.ajax({
    url: app.host + '/blogs/' + blog_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const editBlog = (data) => {
  let blog_id = data.blog._id;
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/blogs/' + blog_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const deleteBlog = (data) => {
  let token = app.user.token;
  let blog_id = data.blog._id;
  return $.ajax({
    url: app.host + '/blogs/' + blog_id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};


module.exports = {
  createBlog,
  indexBlogs,
  showBlog,
  editBlog,
  deleteBlog,
};
