'use strict'

const Twing = require('twing');

exports.name = 'twing'
exports.inputFormats = ['twing', 'twig']
exports.outputFormat = 'html'

exports.renderFileAsync = async function (filename, options, locals) {
    // Construct the Twig options.
    options = options || {}
    options.data = str
    if ('filename' in options && !('path' in options)) {
      options.path = options.filename
    }

    let loader = new Twing.TwingLoaderFilesystem(options.root)
    let twing = new Twing.TwingEnvironment(loader);
    let ouput = await twing.render(filename, locals);

    return output
}
