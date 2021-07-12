const hljs = require('highlight.js');
import 'highlight.js/styles/default.css';
const md = require('markdown-it')({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {
                console.log(__);
            }
        }

        return '';
    }
});

export default md;