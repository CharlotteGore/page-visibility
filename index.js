var PageVisibility = function(){

    var body = document.body,
        self = this,
        hidden = "hidden";

    this.callbacks = {
        visible : [],
        hidden : []
    }

    var onChange= function(){

        document[hidden] ? self.isHidden() : self.isVisible();
    }

    var listen = function(prefix){
        document.addEventListener(prefix + 'visibilitychange', onChange);
    }

    var test = function( prop ){

        if(prop in document){

            hidden = prop;
            return true;

        } else {

            return false;

        }

    }

    if( test("hidden") ){
        listen('');
    } else if( test("mozHidden") ){
        listen('moz');
    } else if( test("webkitHidden") ){
        listen('webkit');
    } else if( test("msHidden") ){
        listen('ms');
    } else if( 'onfocusin' in document ){
        document.onfocusin = function(){ self.isVisible(); };
        document.onfocusout = function(){ self.isHidden(); };
    } else {
        window.onfocus = function(){ self.isVisible(); };
        window.onblur = function(){ self.isHidden(); };
    }

}

PageVisibility.prototype = {

    isVisible : function(){

        var i = 0,
            length = this.callbacks.visible.length;

        while(i < length && this.callbacks.visible[i++]() !== false);

        return this;
    },

    isHidden : function(){

        var i = 0,
            length = this.callbacks.hidden.length;
            
        while(i < length && this.callbacks.hidden[i++]() !== false);

        return this;

    },

    onVisible : function( callback ){

        this.callbacks.visible.push( callback );
        return this;

    },

    onHidden : function( callback ){

        this.callbacks.hidden.push( callback );
        return this;

    }

}

pageVis = new PageVisibility();

module.exports = pageVis;