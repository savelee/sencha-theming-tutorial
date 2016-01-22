Ext.define('FeedViewer.model.RSSItem', {
    extend: 'FeedViewer.model.Base',

    isRssItem: true,

    fields: [
        'title',
        'author',
        'link',
        'categories',
        'url',
        {
            name: 'publishedDate',
            type: 'date',
            dateFormat : 'c'
        },
        'content',
        'contentSnippet'
    ]
});
