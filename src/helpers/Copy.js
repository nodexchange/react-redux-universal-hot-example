export default class Copy {
  static retrieveCopy(section) {
    // LOCALE?
    let copy = {};
    switch (section) {
      case 'front':
        copy = require('./../Data/front.json');
        break;
      case 'projects':
        copy = require('./../Data/projects.json');
        break;
      case 'aib':
        copy = require('./../Data/aib.json').data;
        break;
      case 'ducati':
        copy = require('./../Data/ducati.json').data;
        break;
      case 'ebs':
        copy = require('./../Data/ebs.json').data;
        break;
      case 'marvel':
        copy = require('./../Data/marvel.json').data;
        break;
      case 'renault':
        copy = require('./../Data/renault.json').data;
        break;
      case 'toyota':
        copy = require('./../Data/toyota.json').data;
        break;
      default :
        copy = [{ default: 'helper default' }];
    }
    return copy;
  }
}
