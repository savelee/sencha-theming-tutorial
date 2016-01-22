Ext.define('FeedViewer.store.FeedItems', {
    extend: 'Ext.data.Store',
    alias: 'store.feeditems',

    storeId: 'FeedItems',

    model: 'FeedViewer.model.RSSItem'
});
