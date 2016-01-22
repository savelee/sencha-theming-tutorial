/**
 * The main FeedViewer view.
 */
Ext.define('FeedViewer.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',

    requires : [
        'Ext.Toolbar'
    ],

    useTitleForBackButtonText: true,
    controller: 'main',

    navigationBar: {
        ui: 'dark',
        docked: 'top'
    },

    items: [{
        xtype: 'feedlist',
        reference: 'feedlist',
        title: 'Feeds',
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                iconCls: 'x-fa fa-pencil',
                reference: 'editbutton',
                ui: 'plain',
                handler: 'onEditFeeds'
            }, {
                align: 'right',
                iconCls: 'x-fa fa-plus-square',
                hidden: true,
                reference: 'newbutton',
                action: 'new',
                handler: 'onNewFeed'
            }]
        }]
    }]
});
