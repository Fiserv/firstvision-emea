window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "http://127.0.0.1:5500/assets/swagger/Release-swagger/23.06.yaml",
    url: "http://127.0.0.1:5500/assets/swagger/Release-swagger/23.07.yaml",
    url: "https://raw.githubusercontent.com/Fiserv/firstvision-emea/develop-qa/assets/swagger/Release-swagger/23.06.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
