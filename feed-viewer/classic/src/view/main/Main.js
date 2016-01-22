/**
 * The main FeedViewer view.
 */
Ext.define('FeedViewer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'border'
    },

    viewModel: {
        data: {
            // This object is shared by all views
            main: {
                currentFeed: null
            }
        }
    },

    items: [
        {
            xtype: 'feedlist',
            reference: 'feedList',
            title: 'Feeds',
            iconCls: 'rss',
            region: 'west',
            collapsible: true,
            width: 225,
            minWidth: 175,
            split: true
        },
        {
            xtype: 'feedtabs',
            reference: 'feedTabs',
            region: 'center'
        }
    ]
});
