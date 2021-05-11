# Sanitize HTML with NodeJS

Sanitize passed embedded HTML by removing all JavaScript references.

## Dependencies

JSDOM: [JSDOM Github Link](https://github.com/jsdom/jsdom)

Before running the provided `sanitize_html_example.js` file, please run:

```
npm install jsdom
```

to install jsdom for use with the `sanitizeHTML` function.

## Usage

Pass in a string with embedded HTML to remove any JavaScript references from the string.  `<script>` tags are completely removed along with any reference to any `on` event as well as embedded `javascript:` references. 

Example:

```
sanitizeHTML(`<a href="javascript:dosomethingbad()"></a>
	<p onclick="doanoterbadthing()" style="font-weight:bold;">Hello there 
	<script>alert('hi')</script><script>function dobad() {}</script></p><p>Some more text</p>`
);
```

Returns:

```
<a></a>
<p style="font-weight:bold;">Hello there 
</p><p>Some more text</p>
```

## Extending

If I've left out any vulnerabilities to JavaScript injection, please help me patch them with a pull request! And if you have a faster implementation than this already quick implementation, please put out a pull request! I'll try to review them within 48 hours of submission.

## Licensing

This software is open source.  

Copyright 2021-Present Marcus Parsons

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWAR