``` bash
 _____                     _       _             
/__   \___ _ __ ___  _ __ | | __ _| |_ ___  _ __ 
  / /\/ _ \ '_ ` _ \| '_ \| |/ _` | __/ _ \| '__|
 / / |  __/ | | | | | |_) | | (_| | || (_) | |   
 \/   \___|_| |_| |_| .__/|_|\__,_|\__\___/|_|.js
                    |_| Take control of templating          
```


Setup in HTML:

```html
    <script src="Template/lib/jquery.js">/* Required */</script>
    <script src="Template/lib/parsers/{language of choice goes here}.js">/* Required if utilizing 3rd party langauge */</script>
    <script src="Template/Templator.js">/* Required */</script>
```

To initialize Templator, load it into a variable like so:

```javascript
var Template = new Templator();
```

All options for Templator, not all required:

```javascript
var Template = new Templator({
    language: 'jSmart', // Supported Languages: jSmart, EJS, Moustache, Trimpath, YAJET, JST, HAML, or Empty
    cache: {
        enabled: false,
        life: 32000,
        tick: 1000
    }
});
```

# Basic Usage:

```javascript
var Template = new Templator({ language: '' });
Template.renderRaw('Hello {name}!', { name: 'World' });
```

That is about as simple as you can make it without utilizing any external templating libraries.

# Advanced Usage: 

Utilizing Partials, Storage, 3rd Party Templating language, and Element control

```javascript
var Template = new Templator({ language: 'yajet' });
    Template.storeElement('tmpl', '.tmpl', { foo: 'Hello', bar: 'World!' });
    Template.partialElement({ partial: '.partial' }, {}, 'tmpl');
    Template.on('.this');
    Template.render('tmpl');
```

Or you can chain it:

```javascript
var Template = new Templator({ language: 'yajet' })
   .storeElement('tmpl', '.tmpl', { foo: 'Hello', bar: 'World!' })
   .partialElement({ partial: '.partial' }, {}, 'tmpl')
   .on('.this')
   .render('tmpl');
```

HTML used for this example:

```html
<div class="this"></div>

<div class="tmpl">$partial you said: $foo $bar</div>
<div class="partial">Testing that </div>
```

# External File Usage:

```javascript
var Template = new Templator({ language: 'Moustache' })
   .store('main', 'templates/main.ms', { title: 'My Example - Home' })
   .partial({ header: 'templates/partials/header.ms', footer: 'templates/partials/footer.ms' }, { location: 'index' }, 'main')
   .partial({ content: 'templates/site/content.ms' }, {}, 'main')
   .on('body')
   .render('main');
```

Directory Setup:

* index.html
    * templates /
        * partials /
            * header.ms
            * content.ms
        * main.ms

# Credits & Copyright

To all templating languages that this supports. (jSmart, EJS, Moustache, Trimpath, YAJET, JST, TFTsl, HAML)

AOL License <http://aol.nexua.org>
Copyright 2011-2012 - Nijikokun <nijikokun@gmail.com>