'use strict'

const {TwingEnvironment, TwingLoaderFilesystem} = require('twing')

exports.name = 'twing'
exports.inputFormats = ['twing', 'twig']
exports.outputFormat = 'html'

exports.renderFile = function (filename, options, locals) {
  // Construct the Twig options.
  options = options || {}
  if ('filename' in options && !('path' in options)) {
    options.path = options.filename
  }

  if (!options.root) {
    options.root = process.cwd()
  }

  // Initialize Twing
  const loader = new TwingLoaderFilesystem(options.root)
  const twing = new TwingEnvironment(loader)

  // Remove the root from the filename if it's present.
  filename = filename.replace(options.root, '')
  const output = twing.render(filename, locals)

  return output
}
