// @dynamic
export class ParseTpl {

  static parse(template, map) {
    return template.replace(/\$\{.+?}/g, (match) => {
      const path = match.substr(2, match.length - 3).trim();
      return ParseTpl.get(path, map, `$\{${path}}`);
    });
  }


  static get(path, obj, fb) {
    return path.split('.').reduce((res, key) => res[key] || fb, obj);
  }


}
