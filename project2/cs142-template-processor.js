/**
 * @param {string} template, ret
 */

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function (dict) {
    let ret = this.template;
    for (let key in dict) {
        let regex = new RegExp('\\{\\{' + key + '\\}\\}');
        ret = ret.replace(regex, dict[key]);
    }

    ret = ret.replace(new RegExp('\\{\\{\\w+\\}\\}', "g"), "");
    return ret;
}
