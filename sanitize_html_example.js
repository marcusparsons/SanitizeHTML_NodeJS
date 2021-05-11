//the sanitize_html.js file requires JSDOM
//npm install jsdom
const { sanitizeHTML } = require('./sanitize_html');

/* 
Usage: pass in a string with embedded HTML and receive back the sanitized HTML 
with all JavaScript references removed or null if there is no valid content to return
*/
console.time('sanitized in');
console.log(
    sanitizeHTML(`<a href="javascript:dosomethingbad()"></a>
    <p onclick="doanoterbadthing()" style="font-weight:bold;">Hello there 
    <script>alert('hi')</script><script>function dobad() {}</script></p><p>Some more text</p>`
    )
);
console.timeEnd('sanitized in');