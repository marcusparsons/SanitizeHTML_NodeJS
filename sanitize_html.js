//npm install jsdom
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

exports.sanitizeHTML = (html) => {
	const { document } = (new JSDOM(html)).window;

    document.querySelectorAll('*').forEach(function (el) {
        for (let i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
            if (atts[i]) {
                let att = atts[i].nodeName.toLowerCase();
                let attValue = atts[i].value.replace(/\t|\r|\n/g, '');

                if (
                    att.startsWith('on') || 
                    attValue.indexOf('javascript:') > -1 
                ) {
                    el.removeAttribute(att);
                }
            }
        }

        if (el.nodeName.replace(/\t|\r|\n/g, '').toLowerCase().indexOf('script') > -1) {
            el.remove();
        }
    });

    if (document.body.innerHTML.length > 0) {
        return document.body.innerHTML;
    }
    else {
        return null;
    }
}
 
