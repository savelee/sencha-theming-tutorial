Ext.define('FeedViewer.model.RSSFeed', {
    extend: 'FeedViewer.model.Base',

    requires: [
        'FeedViewer.model.RSSItem'
    ],

    fields: [
        'title', 'author', 'link', 'description', 'feedUrl', 'type'
    ],

    hasMany: {
        model: 'FeedViewer.model.RSSItem',
        name: 'entries'
    },

    proxy: {
        type: 'googglerss'
    }
});
