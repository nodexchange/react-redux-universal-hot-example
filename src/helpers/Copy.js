export default class Copy {
  static retrieveCopy(section) {
    // LOCALE?
    let copy = {};
    switch (section) {
      case 'front':
        copy = require('./../data/front.json');
        break;
      case 'about':
        copy = require('./../data/about.json');
        break;
      case 'contact':
        copy = require('./../data/contact.json');
        break;
      case 'projects':
        copy = require('./../data/projects.json');
        break;
      case 'aib':
        copy = require('./../data/aib.json').data;
        break;
      case 'ducati':
        copy = require('./../data/ducati.json').data;
        break;
      case 'ebs':
        copy = require('./../data/ebs.json').data;
        break;
      case 'marvel':
        copy = require('./../data/marvel.json').data;
        break;
      case 'renault':
        copy = require('./../data/renault.json').data;
        break;
      case 'toyota':
        copy = require('./../data/toyota.json').data;
        break;
      default :
        copy = [{ default: 'helper default' }];
    }
    return copy;
  }
}
