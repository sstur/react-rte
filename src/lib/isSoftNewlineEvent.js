/* @flow */
var Keys = require('fbjs/lib/Keys');

function isSoftNewlineEvent(e) {
  return e.which === Keys.RETURN;
}

module.exports = isSoftNewlineEvent;
