/* Dependencies, JSON2 & _underscore */
var JSON;JSON||(JSON={});
(function(){function s(g){return g<10?"0"+g:g}function u(g){j.lastIndex=0;return j.test(g)?'"'+g.replace(j,function(g){var h=z[g];return typeof h==="string"?h:"\\u"+("0000"+g.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+g+'"'}function y(g,j){var n,m,q,v,w=l,o,f=j[g];f&&typeof f==="object"&&typeof f.toJSON==="function"&&(f=f.toJSON(g));typeof r==="function"&&(f=r.call(j,g,f));switch(typeof f){case "string":return u(f);case "number":return isFinite(f)?String(f):"null";case "boolean":case "null":return String(f);case "object":if(!f)return"null";
l+=h;o=[];if(Object.prototype.toString.apply(f)==="[object Array]"){v=f.length;for(n=0;n<v;n+=1)o[n]=y(n,f)||"null";q=o.length===0?"[]":l?"[\n"+l+o.join(",\n"+l)+"\n"+w+"]":"["+o.join(",")+"]";l=w;return q}if(r&&typeof r==="object"){v=r.length;for(n=0;n<v;n+=1)typeof r[n]==="string"&&(m=r[n],(q=y(m,f))&&o.push(u(m)+(l?": ":":")+q))}else for(m in f)Object.prototype.hasOwnProperty.call(f,m)&&(q=y(m,f))&&o.push(u(m)+(l?": ":":")+q);q=o.length===0?"{}":l?"{\n"+l+o.join(",\n"+l)+"\n"+w+"}":"{"+o.join(",")+
"}";l=w;return q}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+s(this.getUTCMonth()+1)+"-"+s(this.getUTCDate())+"T"+s(this.getUTCHours())+":"+s(this.getUTCMinutes())+":"+s(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var t=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
j=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,l,h,z={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},r;if(typeof JSON.stringify!=="function")JSON.stringify=function(g,j,n){var m;h=l="";if(typeof n==="number")for(m=0;m<n;m+=1)h+=" ";else typeof n==="string"&&(h=n);if((r=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return y("",
{"":g})};if(typeof JSON.parse!=="function")JSON.parse=function(g,h){function j(g,l){var m,o,f=g[l];if(f&&typeof f==="object")for(m in f)Object.prototype.hasOwnProperty.call(f,m)&&(o=j(f,m),o!==void 0?f[m]=o:delete f[m]);return h.call(g,l,f)}var l,g=String(g);t.lastIndex=0;t.test(g)&&(g=g.replace(t,function(g){return"\\u"+("0000"+g.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(g.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return l=eval("("+g+")"),typeof h==="function"?j({"":l},""):l;throw new SyntaxError("JSON.parse");}})();(function(){function s(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null)return a===c;var e=typeof a;if(e!=typeof c)return false;if(!a!=!c)return false;if(b.isNaN(a))return b.isNaN(c);var k=b.isString(a),i=b.isString(c);if(k||i)return k&&i&&String(a)==String(c);k=b.isNumber(a);i=b.isNumber(c);if(k||i)return k&&i&&+a==+c;k=b.isBoolean(a);i=b.isBoolean(c);if(k||i)return k&&i&&+a==+c;k=b.isDate(a);i=b.isDate(c);if(k||i)return k&&i&&a.getTime()==c.getTime();k=b.isRegExp(a);i=b.isRegExp(c);if(k||i)return k&&
i&&a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase;if(e!="object")return false;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(b.isFunction(a.isEqual))return a.isEqual(c);for(e=d.length;e--;)if(d[e]==a)return true;d.push(a);e=0;k=true;if(a.length===+a.length||c.length===+c.length){if(e=a.length,k=e==c.length)for(;e--;)if(!(k=e in a==e in c&&s(a[e],c[e],d)))break}else{for(var f in a)if(g.call(a,f)&&(e++,!(k=g.call(c,f)&&s(a[f],c[f],d))))break;if(k){for(f in c)if(g.call(c,
f)&&!e--)break;k=!e}}d.pop();return k}var u=this,y=u._,t={},j=Array.prototype,l=Object.prototype,h=j.slice,z=j.unshift,r=l.toString,g=l.hasOwnProperty,C=j.forEach,n=j.map,m=j.reduce,q=j.reduceRight,v=j.filter,w=j.every,o=j.some,f=j.indexOf,D=j.lastIndexOf,l=Array.isArray,G=Object.keys,A=Function.prototype.bind,b=function(a){return new x(a)};typeof module!=="undefined"&&module.exports?(module.exports=b,b._=b):u._=b;b.VERSION="1.2.0";var p=b.each=b.forEach=function(a,c,b){if(a!=null)if(C&&a.forEach===
C)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,k=a.length;e<k;e++){if(e in a&&c.call(b,a[e],e,a)===t)break}else for(e in a)if(g.call(a,e)&&c.call(b,a[e],e,a)===t)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(n&&a.map===n)return a.map(c,b);p(a,function(a,i,f){e[e.length]=c.call(b,a,i,f)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var k=d!==void 0;a==null&&(a=[]);if(m&&a.reduce===m)return e&&(c=b.bind(c,e)),k?a.reduce(c,d):a.reduce(c);p(a,function(a,b,f){k?d=c.call(e,
d,a,b,f):(d=a,k=true)});if(!k)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(q&&a.reduceRight===q)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;E(a,function(a,i,f){if(c.call(b,a,i,f))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;
if(v&&a.filter===v)return a.filter(c,b);p(a,function(a,i,f){c.call(b,a,i,f)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;p(a,function(a,i,f){c.call(b,a,i,f)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(w&&a.every===w)return a.every(c,b);p(a,function(a,i,f){if(!(e=e&&c.call(b,a,i,f)))return t});return e};var E=b.some=b.any=function(a,c,d){var c=c||b.identity,e=false;if(a==null)return e;if(o&&a.some===o)return a.some(c,
d);p(a,function(a,b,f){if(e|=c.call(d,a,b,f))return t});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(f&&a.indexOf===f)return a.indexOf(c)!=-1;E(a,function(a){if(b=a===c)return true});return b};b.invoke=function(a,c){var d=h.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;
var e={computed:-Infinity};p(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};p(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var c=[],b;p(a,function(a,f){f==0?c[0]=a:(b=Math.floor(Math.random()*(f+1)),c[f]=c[b],c[b]=a)});return c};b.sortBy=function(a,
c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,b){var d={};p(a,function(a,f){var i=b(a,f);(d[i]||(d[i]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var i=e+f>>1;d(a[i])<d(c)?e=i+1:f=i}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?h.call(a):b.isArguments(a)?h.call(a):
b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?h.call(a,0,b):a[0]};b.initial=function(a,b,d){return h.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?h.call(a,a.length-b):a[a.length-1]};b.rest=b.tail=function(a,b,d){return h.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a){return b.reduce(a,function(a,d){if(b.isArray(d))return a.concat(b.flatten(d));
a[a.length]=d;return a},[])};b.without=function(a){return b.difference(a,h.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,f,g){if(0==g||(c===true?b.last(d)!=f:!b.include(d,f)))d[d.length]=f,e[e.length]=a[g];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments))};b.intersection=b.intersect=function(a){var c=h.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};
b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=h.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(f&&a.indexOf===f)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);
for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};b.bind=function(a,b){if(a.bind===A&&A)return A.apply(a,h.call(arguments,1));var d=h.call(arguments,2);return function(){return a.apply(b,d.concat(h.call(arguments)))}};b.bindAll=function(a){var c=h.call(arguments,1);c.length==0&&(c=b.functions(a));p(c,function(c){a[c]=b.bind(a[c],a)});
return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return g.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=function(a,b){var d=h.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(h.call(arguments,1)))};var F=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};b.throttle=
function(a,b){return F(a,b,false)};b.debounce=function(a,b){return F(a,b,true)};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(h.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=h.call(arguments);return function(){for(var b=h.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,
arguments)}};b.keys=G||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)g.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){p(h.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){p(h.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=
b[d])});return a};b.clone=function(a){return b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return s(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(g.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=l||function(a){return r.call(a)==="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return!(!a||!g.call(a,"callee"))};
b.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};b.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||r.call(a)=="[object Boolean]"};b.isDate=function(a){return!(!a||!a.getTimezoneOffset||!a.setUTCFullYear)};b.isRegExp=function(a){return!(!a||!a.test||!a.exec||!(a.ignoreCase||a.ignoreCase===false))};b.isNull=
function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){u._=y;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){p(b.functions(a),function(c){H(c,b[c]=a[c])})};var I=0;b.uniqueId=function(a){var b=
I++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,
b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",d=new Function("obj",d);return c?d(c):d};var x=function(a){this._wrapped=a};b.prototype=x.prototype;var B=function(a,c){return c?b(a).chain():a},H=function(a,c){x.prototype[a]=function(){var a=h.call(arguments);z.call(a,this._wrapped);return B(c.apply(b,a),this._chain)}};b.mixin(b);p("pop,push,reverse,shift,sort,splice,unshift".split(","),
function(a){var b=j[a];x.prototype[a]=function(){b.apply(this._wrapped,arguments);return B(this._wrapped,this._chain)}});p(["concat","join","slice"],function(a){var b=j[a];x.prototype[a]=function(){return B(b.apply(this._wrapped,arguments),this._chain)}});x.prototype.chain=function(){this._chain=true;return this};x.prototype.value=function(){return this._wrapped}})();

/*
    Copyright (c) 2009 Tim Caswell

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
*/

var Haml;

(function () {

  var matchers, self_close_tags, embedder, forceXML, escaperName, escapeHtmlByDefault;

  function trim(text){
  	return text.replace(/^\s+|\s+$/g,"");
  }

  function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }

  function render_attribs(attribs) {
    var key, value, result = [];
    for (key in attribs) {
      if (key !== '_content' && attribs.hasOwnProperty(key)) {
        switch (attribs[key]) {
        case 'undefined':
        case 'false':
        case 'null':
        case '""':
          break;
        default:
          try {
            value = JSON.parse("[" + attribs[key] +"]")[0];
            if (value === true) {
              value = key;
            } else if (typeof value === 'string' && embedder.test(value)) {
              value = '" +\n' + parse_interpol(html_escape(value)) + ' +\n"';
            } else {
              value = html_escape(value);
            }
            result.push(" " + key + '=\\"' + value + '\\"');
          } catch (e) {
            result.push(" " + key + '=\\"" + '+escaperName+'(' + attribs[key] + ') + "\\"');
          }
        }
      }
    }
    return result.join("");
  }

  // Parse the attribute block using a state machine
  function parse_attribs(line) {
    var attributes = {},
        l = line.length,
        i, c,
        count = 1,
        quote = false,
        skip = false,
        open, close, joiner, seperator,
        pair = {
          start: 1,
          middle: null,
          end: null
        };

    if (!(l > 0 && (line.charAt(0) === '{' || line.charAt(0) === '('))) {
      return {
        _content: line[0] === ' ' ? line.substr(1, l) : line
      };
    }
    open = line.charAt(0);
    close = (open === '{') ? '}' : ')';
    joiner = (open === '{') ? ':' : '=';
    seperator = (open === '{') ? ',' : ' ';

    function process_pair() {
      if (typeof pair.start === 'number' &&
          typeof pair.middle === 'number' &&
          typeof pair.end === 'number') {
        var key = trim(line.substr(pair.start, pair.middle - pair.start)),
            value = trim(line.substr(pair.middle + 1, pair.end - pair.middle - 1));
        attributes[key] = value;
      }
      pair = {
        start: null,
        middle: null,
        end: null
      };
    }

    for (i = 1; count > 0; i += 1) {

      // If we reach the end of the line, then there is a problem
      if (i > l) {
        throw "Malformed attribute block";
      }

      c = line.charAt(i);
      if (skip) {
        skip = false;
      } else {
        if (quote) {
          if (c === '\\') {
            skip = true;
          }
          if (c === quote) {
            quote = false;
          }
        } else {
          if (c === '"' || c === "'") {
            quote = c;
          }

          if (count === 1) {
            if (c === joiner) {
              pair.middle = i;
            }
            if (c === seperator || c === close) {
              pair.end = i;
              process_pair();
              if (c === seperator) {
                pair.start = i + 1;
              }
            }
          }

          if (c === open || c === "(") {
            count += 1;
          }
          if (c === close || (count > 1 && c === ")")) {
            count -= 1;
          }
        }
      }
    }
    attributes._content = line.substr(i, line.length);
    return attributes;
  }

  // Split interpolated strings into an array of literals and code fragments.
  function parse_interpol(value) {
    var items = [],
        pos = 0,
        next = 0,
        match;
    while (true) {
      // Match up to embedded string
      next = value.substr(pos).search(embedder);
      if (next < 0) {
        if (pos < value.length) {
          items.push(JSON.stringify(value.substr(pos)));
        }
        break;
      }
      items.push(JSON.stringify(value.substr(pos, next)));
      pos += next;

      // Match embedded string
      match = value.substr(pos).match(embedder);
      next = match[0].length;
      if (next < 0) { break; }
      if(match[1] === "#"){
        items.push(escaperName+"("+(match[2] || match[3])+")");
      }else{
        //unsafe!!!
        items.push(match[2] || match[3]);
      }
      
      pos += next;
    }
    return _.filter(items, function (part) { return part && part.length > 0}).join(" +\n");
  }

  // Used to find embedded code in interpolated strings.
  embedder = /([#!])\{([^}]*)\}/;

  self_close_tags = ["meta", "img", "link", "br", "hr", "input", "area", "base"];

  // All matchers' regexps should capture leading whitespace in first capture
  // and trailing content in last capture
  matchers = [
    // html tags
    {
      name: "html tags",
      regexp: /^(\s*)((?:[.#%][a-z_\-][a-z0-9_:\-]*)+)(.*)$/i,
      process: function () {
        var line_beginning, tag, classes, ids, attribs, content, whitespaceSpecifier, whitespace={}, output;
        line_beginning = this.matches[2];
        classes = line_beginning.match(/\.([a-z_\-][a-z0-9_\-]*)/gi);
        ids = line_beginning.match(/\#([a-z_\-][a-z0-9_\-]*)/gi);
        tag = line_beginning.match(/\%([a-z_\-][a-z0-9_:\-]*)/gi);

        // Default to <div> tag
        tag = tag ? tag[0].substr(1, tag[0].length) : 'div';

        attribs = this.matches[3];
        if (attribs) {
          attribs = parse_attribs(attribs);
          if (attribs._content) {
            var leader0 = attribs._content.charAt(0),
                leader1 = attribs._content.charAt(1),
                leaderLength = 0;
                
            if(leader0 == "<"){
              leaderLength++;
              whitespace.inside = true;
              if(leader1 == ">"){
                leaderLength++;
                whitespace.around = true;
              }
            }else if(leader0 == ">"){
              leaderLength++;
              whitespace.around = true;
              if(leader1 == "<"){
                leaderLength++;
                whitespace.inside = true;
              }
            }
            attribs._content = attribs._content.substr(leaderLength);
            //once we've identified the tag and its attributes, the rest is content.
            // this is currently trimmed for neatness.
            this.contents.unshift(trim(attribs._content));
            delete(attribs._content);
          }
        } else {
          attribs = {};
        }

        if (classes) {
          classes = _.map(classes, function (klass) {
            return klass.substr(1, klass.length);
          }).join(' ');
          if (attribs['class']) {
            try {
              attribs['class'] = JSON.stringify(classes + " " + JSON.parse(attribs['class']));
            } catch (e) {
              attribs['class'] = JSON.stringify(classes + " ") + " + " + attribs['class'];
            }
          } else {
            attribs['class'] = JSON.stringify(classes);
          }
        }
        if (ids) {
          ids = _.map(ids, function (id) {
            return id.substr(1, id.length);
          }).join(' ');
          if (attribs.id) {
            attribs.id = JSON.stringify(ids + " ") + attribs.id;
          } else {
            attribs.id = JSON.stringify(ids);
          }
        }

        attribs = render_attribs(attribs);

        content = this.render_contents();
        if (content === '""') {
          content = '';
        }
        
        if(whitespace.inside){
          if(content.length==0){
            content='"  "'
          }else{
            try{ //remove quotes if they are there
              content = '" '+JSON.parse(content)+' "';
            }catch(e){
              content = '" "+\n'+content+'+\n" "';
            }            
          }
        }

        if (forceXML ? content.length > 0 : _.indexOf(self_close_tags, tag) == -1) {
          output = '"<' + tag + attribs + '>"' +
            (content.length > 0 ? ' + \n' + content : "") +
            ' + \n"</' + tag + '>"';
        } else {
          output = '"<' + tag + attribs + ' />"';
        }
        
        if(whitespace.around){
          //output now contains '"<b>hello</b>"'
          //we need to crack it open to insert whitespace.
          output = '" '+output.substr(1, output.length - 2)+' "';
        }

        return output;
      }
    },

    // each loops
    {
      name: "each loop",
      regexp: /^(\s*)(?::for|:each)\s+(?:([a-z_][a-z_\-]*),\s*)?([a-z_][a-z_\-]*)\s+in\s+(.*)(\s*)$/i,
      process: function () {
        var ivar = this.matches[2] || '__key__', // index
            vvar = this.matches[3],              // value
            avar = this.matches[4],              // array
            rvar = '__result__';                 // results

        if (this.matches[5]) {
          this.contents.unshift(this.matches[5]);
        }
        return '(function () { ' +
          'var ' + rvar + ' = [], ' + ivar + ', ' + vvar + '; ' +
          'for (' + ivar + ' in ' + avar + ') { ' +
          'if (' + avar + '.hasOwnProperty(' + ivar + ')) { ' +
          vvar + ' = ' + avar + '[' + ivar + ']; ' +
          rvar + '.push(\n' + (this.render_contents() || "''") + '\n); ' +
          '} } return ' + rvar + '.join(""); }).call(this)';
      }
    },

    // if statements
    {
      name: "if",
      regexp: /^(\s*):if\s+(.*)\s*$/i,
      process: function () {
        var condition = this.matches[2];
        return '(function () { ' +
          'if (' + condition + ') { ' +
          'return (\n' + (this.render_contents() || '') + '\n);' +
          '} else { return ""; } }).call(this)';
      }
    },
    
    // silent-comments
    {
      name: "silent-comments",
      regexp: /^(\s*)-#\s*(.*)\s*$/i,
      process: function () {
        return '""';
      }
    },
    
    //html-comments
    {
      name: "silent-comments",
      regexp: /^(\s*)\/\s*(.*)\s*$/i,
      process: function () {
        this.contents.unshift(this.matches[2]);
        
        return '"<!--'+this.contents.join('\\n')+'-->"';
      }
    },
    
    // raw js
    {
      name: "raw",
      regexp: /^(\s*)-\s*(.*)\s*$/i,
      process: function () {
        this.contents.unshift(this.matches[2]);
        return '"";' + this.contents.join("\n")+"; _$output = _$output ";
      }
    },

    // declarations
    {
      name: "doctype",
      regexp: /^()!!!(?:\s*(.*))\s*$/,
      process: function () {
        var line = '';
        switch ((this.matches[2] || '').toLowerCase()) {
        case '':
          // XHTML 1.0 Transitional
          line = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
          break;
        case 'strict':
        case '1.0':
          // XHTML 1.0 Strict
          line = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
          break;
        case 'frameset':
          // XHTML 1.0 Frameset
          line = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">';
          break;
        case '5':
          // XHTML 5
          line = '<!DOCTYPE html>';
          break;
        case '1.1':
          // XHTML 1.1
          line = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">';
          break;
        case 'basic':
          // XHTML Basic 1.1
          line = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">';
          break;
        case 'mobile':
          // XHTML Mobile 1.2
          line = '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">';
          break;
        case 'xml':
          // XML
          line = "<?xml version='1.0' encoding='utf-8' ?>";
          break;
        case 'xml iso-8859-1':
          // XML iso-8859-1
          line = "<?xml version='1.0' encoding='iso-8859-1' ?>";
          break;
        }
        return JSON.stringify(line + "\n");
      }
    },

    // Embedded markdown. Needs to be added to exports externally.
    {
      name: "markdown",
      regexp: /^(\s*):markdown\s*$/i,
      process: function () {
        return parse_interpol(exports.Markdown.encode(this.contents.join("\n")));
      }
    },

    // script blocks
    {
      name: "script",
      regexp: /^(\s*):(?:java)?script\s*$/,
      process: function () {
        return parse_interpol('\n<script type="text/javascript">\n' +
          '//<![CDATA[\n' +
          this.contents.join("\n") +
          "\n//]]>\n</script>\n");
      }
    },

    // css blocks
    {
      name: "css",
      regexp: /^(\s*):css\s*$/,
      process: function () {
        return JSON.stringify('<style type="text/css">\n' +
          this.contents.join("\n") +
          "\n</style>");
      }
    }

  ];

  function compile(lines) {
    var block = false,
        output = [];

    // If lines is a string, turn it into an array
    if (typeof lines === 'string') {
      lines = trim(lines).replace(/\n\r|\r/g, '\n').split('\n');
    }

    _.each(lines, function(line){
   	  var match, found = false;

      // Collect all text as raw until outdent
      if (block) {
        match = block.check_indent.exec(line);
        if (match) {
          block.contents.push(match[1] || ""); 
          return; 
        } else {
          output.push(block.process());
          block = false;
        }
      }

	  _.each(matchers, function(matcher){
        if (!found) {
          match = matcher.regexp.exec(line);
          if (match) {
            block = {
              contents: [],
              indent_level: (match[1]),
              matches: match,
              check_indent: new RegExp("^(?:\\s*|" + match[1] + "  (.*))$"),
              process: matcher.process,
              render_contents: function () {
                return compile(this.contents);
              }
            };
            found = true;
          }
        }
      });

      // Match plain text
      if (!found) {
        output.push(function () {
          // Escaped plain text
          if (line[0] === '\\') {
            return parse_interpol(line.substr(1, line.length));
          }


          function escapedLine(){
            try {
              return escaperName+'('+JSON.stringify(JSON.parse(line)) +')';
            } catch (e2) {
              return escaperName+'(' + line + ')';
            }
          }
          
          function unescapedLine(){
            try {
              return parse_interpol(JSON.parse(line));
            } catch (e) {
              return line;
            }
          }
          
          // always escaped
          if((line.substr(0, 2) === "&=")) {
            line = trim(line.substr(2, line.length));
            return escapedLine();
          }
          
          //never escaped
          if((line.substr(0, 2) === "!=")) {
            line = trim(line.substr(2, line.length));
            return unescapedLine();
          }
          
          // sometimes escaped
          if ( (line[0] === '=')) {
            line = trim(line.substr(1, line.length));
            if(escapeHtmlByDefault){
              return escapedLine();
            }else{
              return unescapedLine();
            }
          }

          // Plain text
          return parse_interpol(line);
        }());
      }

    });
    if (block) {
      output.push(block.process());
    }
    
    var txt = _.filter(output, function (part) { return part && part.length > 0}).join(" +\n");
    if(txt.length == 0){
      txt = '""';
    }
    return txt;
  };

  function optimize(js) {
    var new_js = [], buffer = [], part, end; 

    function flush() {
      if (buffer.length > 0) {
        new_js.push(JSON.stringify(buffer.join("")) + end);
        buffer = [];
      }
    }
    _.each(js.replace(/\n\r|\r/g, '\n').split('\n'), function (line) {
      part = line.match(/^(\".*\")(\s*\+\s*)?$/);
      if (!part) {
        flush();
        new_js.push(line);
        return;
      }
      end = part[2] || "";
      part = part[1];
      try {
        buffer.push(JSON.parse(part));
      } catch (e) {
        flush();
        new_js.push(line);
      }
    });
    flush();
    return new_js.join("\n");
  };

  function render(text, options) {
    options = options || {};
    text = text || "";
    var js = compile(text, options);
    if (options.optimize) {
      js = Haml.optimize(js);
    }
    return execute(js, options.context || Haml, options.locals);
  };

  function execute(js, self, locals) {
    return (function () {
      with(locals || {}) {
        try {
          var _$output;
          eval("(" + js + ")");
          return _$output; //set in eval
        } catch (e) {
          return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
        }

      }
    }).call(self);
  };

  Haml = function (haml, config) {
    if(typeof(config) != "object"){
      forceXML = config;
      config = {};
    }
    
    var escaper;
    if(config.customEscape){
      escaper = "";
      escaperName = config.customEscape;
    }else{
      escaper = html_escape.toString() + "\n";
      escaperName = "html_escape";
    }
    
    escapeHtmlByDefault = (config.escapeHtmlByDefault || config.escapeHTML || config.escape_html);
    
    var js = optimize(compile(haml));
    
    var str = "with(locals || {}) {\n" +
    "  try {\n" +
    "   var _$output=" + js + ";\n return _$output;" +
    "  } catch (e) {\n" +
    "    return \"\\n<pre class='error'>\" + "+escaperName+"(e.stack) + \"</pre>\\n\";\n" +
    "  }\n" +
    "}"

    return new Function("locals",  escaper + str );
  }

  Haml.compile = compile;
  Haml.optimize = optimize;
  Haml.render = render;
  Haml.execute = execute;
  Haml.html_escape = html_escape;
}());

// Hook into module system
if (typeof module !== 'undefined') {
  module.exports = Haml;
}