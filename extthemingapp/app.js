/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'ThemingApp',

    extend: 'ThemingApp.Application',

    requires: [
        'ThemingApp.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'ThemingApp.view.main.Main',

    launch: function(){

        //<debug>
        //SenchaInspector.init();

        // FANCY FASHION SHIT
        //http://localhost:1841/extthemingapp/?platformTags=fashion:true
        //sencha app watch
        /*
        function rnd() {
            return Math.floor(Math.random() * 256);
        }

        function rndc(){
            return '#' + (rnd()*256 * rnd()).toString(16) + "!dynamic";
        }

        li = Ext.interval(function() {
            Fashion.setVariables({'$base-color': rndc() });
        }); */

        //</debug>
    }

    //-------------------------------------------------------------------------
    // Most customizations should be made to ThemingApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
