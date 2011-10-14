// Templator.js - Take control of tmplating.
//
// Take back control of javascript templating with Templator. Templator 
// allows you load files, elements, and cache them if you want for later usage
// with templating languages such as: Moustache, EJS, jSmart, and more.
//
// On top of that, it also has a built in cache manager and multiple output
// methods.
//
// > Author: Nijikokun <nijikokun@gmail.com><br />
// > Copyright: 2011 (c) Nijikokun<br />
// > Licensing: AOL License <http://aol.nexua.org><br />
function Templator (settings) {
    var my = {
        settings: {
            language: '',
            cache: {
                enabled: false,
                life: 32000,
                tick: 1000
            },
            action: 'inject'
        }
    };
    
    my.templates = {};
    
    if(my.settings.cache.enabled)
        my.cache = {};
        
    if(my.settings.cache.life > 0 && my.settings.cache.enabled)
        my.cacheHandler = setInterval(my.releaseCache, my.settings.cache.tick);
        
    my.cacheRelease = function() {
        if (jQuery.isEmptyObject(my.cache))
            return;
            
        for (var key in my.cache) {
            if (!my.cache.hasOwnProperty(key))
                continue;
            
            var store = my.cache[key];
            
            if((+(new Date()) - store.time) <= my.settings.cache.life)
                delete my.cache[key];
        }
    }
    
    // Clear current element for inject, prepending, and appending.
    my.clearOn = function() {
        my.element = null;
        
        return my;
    }
    
    // Set the element you wish to inject, prepend, and append on.
    my.on = function (element) { 
        my.element = element;
        
        return my;
    }
    
    // Simple method for utilizing inline-elements for storage.
    my.storeElement = function (name, element, params) {
        return my.store(name, element, params, 'element');
    }
    
    // Create a template storage from an external or inline-element, with pre-given params.
    my.store = function(name, resource, params, type /* Optional */) {
        my.templates[name] = {
            element: type != null ? resource : false,
            url: type != null ? false : resource,
            params: params != null ? params : {},
            partials: {}
        }
        
        if(my.settings.cache.enabled)
            my.cache[name] = { data: fetch(resource, type), time: +(new Date()) };
        
        return my;
    }
    
    // Simple method for utilizing elements as partials
    my.partialElement = function(resource, params, on) {
        return my.partial(resource, params, on, 'element');
    }
    
    // Store a partial (External or Element) template on a pre-existing storage template.
    my.partial = function(resource, params, on, type /* Optional */) {
        if (resource instanceof Object) {
            for (var i in resource) {
                if (!resource.hasOwnProperty(i))
                    continue;
                    
                var 
                    name = i, 
                    data = resource[i], 
                    template = type != null ? $(data).html() : fetch(data)
                ;
                
                if(params == null)
                    params = {};
                
                my.templates[on].partials[i] = render(template, params, true);
            }
        }
        
        return my;
    }
    
    // Render html source from an inline-element
    my.renderElement = function(element, params) {
        return my.render(element, params, 'element');
    }
    
    // Render html source from an inline-element appended.
    my.appendElement = function(element, params) {
        return my.render(element, params, 'element', 'append');
    }
    
    // Render html source from an inline-element prepended.
    my.prependElement = function(element, params) {
        return my.render(element, params, 'element', 'prepend');
    }
    
    // Render external file source appended.
    my.append = function(resource, params) {
        return my.render(resource, params, null, 'append');
    }
    
    // Render external file source prepended.
    my.prepend = function(resource, params) {
        return my.render(resource, params, null, 'prepend');
    }
    
    // Controls all resource rendering, except renderRaw, every other render method is sent to this.
    my.render = function(resource, params, type /* Optional */, action /* Optional */) {
        params = params != null ? 
                    params : 
                        my.templates[resource] != null && !jQuery.isEmptyObject(my.templates[resource].params) ? 
                            my.templates[resource].params : {};
        
        my.settings.action = action != null ? action : 'inject';
        
        if(my.templates[resource] == null)
            return render(fetch(resource, type), params);
        
        var data = my.templates[resource];
        
        if(!jQuery.isEmptyObject(data.partials))
            for(var i in data.partials) {
                if (!data.partials.hasOwnProperty(i))
                    continue;
                
                var name = i;
                
                if(name.startsWith('#') || name.startsWith('.'))
                    name = name.pop();
                    
                if(name.contains('/') && name.contains('.'))
                    name = url.split('/')[url.split('/').length].split(".")[0];
                    
                params[name] = data.partials[i];
            }
        
        if(data.element)
            type = 'element';
            
        if(my.settings.cache.enabled && my.cache[resource] != null)
            return render(my.cache[resource].data, params);
            
        if(type != null)
            return render(fetch(data.element, type), params);
        
        return render(fetch(data.url), params);
    }

    // Direct parsing, utilizes raw data and parameters. 
    // No cache or storage utilized.
    my.renderRaw = function (raw, params, action) {
        my.settings.action = action != null ? action : 'inject';
        return render(raw, params);
    }
    
    // Initialization
    //
    // Merge given settings with pre-existing settings.
    function init(settings) {
        settings = settings ? settings : {};
        
        $.extend(true, my.settings, settings);
        
        return my;
    }
    
    // Grab source of external files.
    function fetch(resource, type /* Optional */) {
        var data = null;
        
        if(type != null && type.equalsIgnoreCase("element"))
            return $(resource).html();
            
        $.ajax({
            async: !1,
            global: !1,
            url: resource,
            success: function(result) {
                data = result;
            }
        });
        
        return data;
    }
    
    // Controls rendering based on template language, raw data, and parameters given.
    // Inner overrides element control.
    function render(raw, params, inner /* Overrides .on */) {
        var tpl, output;
        
        switch(my.settings.language.toLowerCase()) {
            case 'moustache': case 'ms':
                output = Mustache.to_html(raw, params);
            break;
                
            case 'jst': case 'jstparser':
                output = Jst.evaluateSingleShot(raw, params);
            break;
                
            case 'jsmart': case 'smarty': case 'sm':
                tpl = new jSmart(raw);
                output = tpl.fetch( params );
            break;
                
            case 'trimpath': case 'trim':
                output = raw.process( params );
            break;
                
            case 'yajet':
                var yajet = new YAJET({ with_scope: true }), func = yajet.compile(raw);
                output = func( params );
            break;
                
            default:
                function t(s,d){ for(var p in d) s=s.replace(new RegExp('{'+p+'}','g'), d[p]); return s; }
                output = t(raw, params);
        }
        
        if(my.element != null && inner == null)
            switch(my.settings.action) {
                case 'append':
                    $(my.element).append(output);
                case 'prepend':
                    $(my.element).prepend(output);
                case 'inject': default:
                    $(my.element).html(output);
            }
            
        return output;
    }

    return init(settings);
};