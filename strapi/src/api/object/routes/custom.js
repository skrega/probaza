module.exports = {
    routes: [{
      method: "GET",
      path: "/object/:slug",
      handler: "object.findOne",
      config: {
        auth: false
      }
    }, ],
  };
  