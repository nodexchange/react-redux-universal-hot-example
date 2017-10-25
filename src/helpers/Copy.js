export default class Copy {
  static retrieveCopy(section) {
    // LOCALE?
    let copy = {};
    switch (section) {
      case 'projects':
        copy = require('./../Data/projects.json').data;
        break;
      default :
        copy = { default: 'default' };
    }
    return copy;
  }
}
/* eslint-enable */
