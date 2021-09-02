const { global, pages } = require("./en");
const { globalFI, pagesFI } = require("./fi");
const { leadFormSubmissions } = require("./lead-form-submissions.json");

module.exports = {
  globals: [global, globalFI],
  pages: [...pages, ...pagesFI],
  leadFormSubmissions,
};
