/**
 * A data view that shows default rss feeds and allows you to add or view them.
 */
Ext.define('FeedViewer.view.main.FeedList', {
    extend: 'Ext.dataview.List',
    xtype: 'feedlist',

    cls: 'feed-list',
    onItemDisclosure : true,

    editingCls: 'feed-list-editing',

    itemTpl: '{title}',

    store: {
        type: 'feeds'
    }
});
