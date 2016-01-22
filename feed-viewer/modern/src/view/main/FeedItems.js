/**
 * A data view that shows items from an RSS list.
 */
Ext.define('FeedViewer.view.main.FeedItems', {
    extend: 'Ext.dataview.List',
    xtype: 'feeditems',

    cls: 'feed-items-list',

    viewModel: {
        links: {
            feed: {
                type: 'FeedViewer.model.RSSFeed',
                create: true
            }
        }
    },

    itemTpl: '{title}',

    bind: {
        store: '{feed.entries}'
    }
});
