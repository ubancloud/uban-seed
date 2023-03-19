'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.app);
    ctx.body = 'hi, uban.js';
  }
}

module.exports = HomeController;
