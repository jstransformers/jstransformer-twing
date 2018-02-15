'use strict'

const Twing = require('twing')

exports.name = 'twing'
exports.inputFormats = ['twing', 'twig']
exports.outputFormat = 'html'

exports.renderFileAsync = async function (filename, options, locals) {
  // Construct the Twig options.
  options = options || {}
  if ('filename' in options && !('path' in options)) {
    options.path = options.filename
  }

  const loader = new Twing.TwingLoaderFilesystem(options.root)
  const twing = new Twing.TwingEnvironment(loader)
  const output = await twing.render(filename, locals)

  return output
}
