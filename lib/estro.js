// Extended String Object (Estro)
//
// A Small library (< 3kb) to give strings more functionality while not becoming obtrusive.
//
// > Author: Nijikokun <nijikokun@gmail.com><br />
// > Copyright: 2011 (c) Nijikokun<br />
// > Licensing: AOL License <http://aol.nexua.org><br />
(function () {
    // Initialize Estro Object
    // This will be our holder for all of the Prototype functions.
    var Estro = {
        version: "2.1"
    };
    
    // String based functions
    // ----------------------
    Estro.String = {
        // Checks whether or not the `string` is `empty`
        isEmpty: function () {
            return (!this || 0 === this.length);
        },
        
        // Check whether the string is `blank` (Null, Undefined, Empty)
        isBlank: function() {
            return (!this || /^\s*$/.test(this));
        },
        
        // Compares the given `string` to the original lexicographically
        compareTo: function (s) {
            var o = this,
                x = o.length,
                z = s.length,
                n = (x < z ? x : z);
            
            for (var i = 0; i < n; i++) {
                var a = o.charCodeAt(i), b = s.charCodeAt(i);
                
                if (a != b) 
                    return (a - b);
            }
            
            return (x - z);
        },
        
        // Tests if this string starts with the specified prefix.
        startsWith: function (str) {
            return !this.indexOf(str);
        },
        
        // Tests if this string ends with the specified suffix.
        endsWith: function (str) {
            return this.indexOf(str, this.length - str.length) !== -1;
        },
        
        // Verifies if this string contains the given needle.
        contains: function (n) {
            return this.indexOf(n) != -1;
        },
        
        // Compares both strings to each other.
        equals: function (str) {
            return (this == str);
        },
        
        // Compares both strings without case sensitivity.
        equalsIgnoreCase: function (str) {
            var o = this;
            return (o == str) ? true : ((!str.isEmpty()) && (str.length == o.length) && o.toLowerCase() == str.toLowerCase());
        },
        
        // Removes leading and trailing whitespace.
        trim: function () {
            return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        },
        
        // Removes the leading whitespace
        trimLeft: function () {
            return this.trimLeft ? this.trimLeft() : this.replace(/^\s+/, '');
        },

        // Removes the trailing whitespace
        trimRight: function () {
            return this.trimRight ? this.trimRight() : this.replace(/\s+$/, '');
        },
        
        // Removes all Alphanumeric characters from the given string
        trimNonAlpha: function () {
            return this.replace(/[^A-Za-z ]+/g, '');
        },
        
        // Removes all Non-Alphanumeric characters from the given string
        trimNonAlphaNumeric: function () {
            return this.replace(/[^A-Za-z0-9 ]+/g, '');
        },
        
        // Removes all characters that aren't numbers from the given string.
        trimNonNumeric: function () {
            return this.replace(/[^0-9-.]/g, '');
        },
        
        // Removes all numbers from the given string
        trimNumeric: function () {
            return this.replace(/[0-9]/g, '');
        },
        
        // Appends the current string `n` times to itself.
        repeat: function (n) {
            return new Array(n ? n + 1 : 2).join(this);
        },
        
        // Reverse the order of characters in a string.
        // 
        //     'hello'.reverse() becomes olleh
        //
        reverse: function () {
            return this.split('').reverse().join('');
        },

        // Insert a `string` at the `index` given.
        insert: function (s, i) {
            return this.slice(0, i) + s + this.slice(i);
        },
        
        // Removes a certain amount of characters between the 
        // `start` and `end` of the string given.
        remove: function (s, e) {
            return this.slice(0, s) + this.slice(e);
        },
        
        // Removes a certain amount of characters from the start of
        // the current string.
        pop: function (a) {
            return this.slice(a ? a>0 ? a : a*1 : 1, this.length);
        },
        
        // Removes a certain amount of characters from the end of
        // the current string.
        //
        // Argument `a` is optional. Default is `1`
        chop: function (a) {
            return this.slice(0, a ? a<0 ? a : a*-1 : -1);
        },
        
        // Capitalizes the first word of the current string.
        capitalize: function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        
        // Un-Capitalizes the first word of the current string.
        uncapitalize: function () {
            return this.charAt(0).toLowerCase() + this.slice(1);
        },
        
        // Capitalizes each word in the current string.
        capitalizeWords: function () {
            return this.replace(/\w+/g, function (w) {
                return w.capitalize();
            });
        },

		// Un-Capitalizes each word.
        uncapitalizeWords: function () {
            return this.replace(/\w+/g, function (w) {
                return w.uncapitalize();
            });
        },

		// Verifies if the character at indice `i` is upper-case.
        isUpperCaseAt: function (i) {
            return this.charAt(i).toUpperCase() === this.charAt(i);
        },

		// Verifies if the character at indice `i` is lower-case.
        isLowerCaseAt: function (i) {
            return this.charAt(i).toLowerCase() === this.charAt(i);
        },
        
		// Swaps out the casing of the current string.
		//
		//    upper -> lower
		//    lower -> upper
		//
		// etc...
        swapCase: function () {
            return this.replace(/([a-z]+)|([A-Z]+)/g, function (m, l, u) {
                return l ? m.toUpperCase() : m.toLowerCase();
            });
        },
        
        // Converts a string of words to camelCase.
        camelize: function() {
            return this.replace(/\W+(.)/g, function (m, l) {
                return l.toUpperCase();
            });
        },
        
        // Hyphenates the current string of words.
        //
        //     un capitalize -> un-capitalize
        //
        dasherize: function () {
            return this.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
        },
        
        // Converts spaces to underscores.
        //
        //     system out -> system_out
        //
        underscore: function () {
            return this.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
        },
        
        // Small templating / printf capabilities.
        //
        //     'Hello %{who}!'.bind({who: "World"})
        //      Outputs: Hello World!
        //
        bind: function (d) {
            var m, o = this;
            
            while (m = /%\{\s*([^\}\s]+)\s*\}/.exec(o))
                o = o.replace(m[0], d[m[1]] || '??');
            
            return o;
        },
        
        // Extracts a Regular Expression from the current 
        // String. Somewhat like `matches` from Java.
        //
        //      'Hello'.extract(/e/, 1)
        extract: function (rgx, n) {
            n = (n === undefined) ? 0 : n;
            
            if (!rgx.global)
                return this.match(rgx)[n] || '';
            
            var m, e = [];
            
            while ((m = rgx.exec(this))) 
                e[e.length] = m[n] || '';
            
            return e;
        },
        
        // Converts the current string into it's numeric value.
        //
        // Returns as an array.
        toInt: function () {
            for(var b=[],a=0;a<this.length;a++)
                b[a] = this.charCodeAt(a);
                
            return b
        },
        
        // Converts the current string to a hashcode.
        //
        // Java function.
        toHash: function() {
            var h = 0, l = this.length;
            for (var i = 0; i < l; i++)
                h = 31 * h + this.charCodeAt(i);
            return h; 
        }
    };
    
    for (var e in Estro.String)
        if (!String.prototype[e]) 
            String.prototype[e] = Estro.String[e];
})();