"use strict";

const DbService = require('moleculer-db');
const MongoAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
  name: 'products',
  mixins: [DbService],
  adaper: new MongoAdapter("mongodb://localhost/my-first-service"),
  collection: 'products',
};
