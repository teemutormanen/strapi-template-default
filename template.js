module.exports = function(scope) {
  return {
    package: {
      dependencies: {
        "mime-types": "^2.1.32",
        "strapi-plugin-graphql": scope.strapiVersion,
        "strapi-plugin-ckeditor5": scope.strapiVersion,
      }
    }
  }
}
