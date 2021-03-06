'use strict'

module.exports = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-type" content="text/html;charset=utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />

</head>
<body>
<div class="container">
  <div class="row">
    <div class="col-xs-12 text-center" style="margin-top: 3em;">
      Login with:
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 text-center" style="padding-top: 2em;">
      <button type="button" class="btn btn-md btn-primary" id="testProvider">
        solidtest.space
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 text-center" style="padding-top: 2em;">
      or custom:<br />
      <input type="text" id="customProviderUri" value="https://" />
      <button type="button" class="btn btn-md" id="customProvider">Go</button>
    </div>
  </div>
</div>
<script type="text/javascript">
  window.addEventListener('load', function () { init() });

  function init () {
    initEvents()
  }

  function initButton(id, action) {
    document.getElementById(id).addEventListener('click', action)
  }

  function initEvents () {
    initButton('testProvider',
      function () { selectProvider('https://solidtest.space') })
    initButton('customProvider',
      function () {
        var defaultValue = 'https://'
        var customUri = document.getElementById('customProviderUri')
        if (customUri && customUri.value !== defaultValue) {
          selectProvider(customUri.value)
        }
      })
  }

  function selectProvider (providerUri) {
    console.log('Provider selected: ', providerUri)
    var message = {
      event_type: 'providerSelected',
      value: providerUri
    }
    console.log('opener.window.location: ', opener.window.location.href)

    opener.postMessage(message, opener.window.location.origin)
  }
</script>
</body>
</html>
`
