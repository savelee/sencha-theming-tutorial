Ext.define('FeedViewer.store.Feeds', {
    extend: 'Ext.data.Store',
    alias: 'store.feeds',

    model: 'FeedViewer.model.RSSFeed',

    storeId: 'Feeds',

    data: [
        { id: 1, "title": "Sencha", "feedUrl": "http://feeds.feedburner.com/sencha" },
        { id: 2, "title": "Lee Boonstra Dev blog", "feedUrl": "http://www.ladysign-apps.com/developer/feed/atom/" },
        { id: 3, "title": "Lee's Twitterfeed", "feedUrl": "https://twitrss.me/twitter_user_to_rss/?user=ladysign&replies=on"},
        { id: 4, "title": "Art Kay Dev blog", "feedUrl": "http://www.akawebdesign.com/stuff/feed/atom/" },
        { id: 5, "title": "Mitchell Simoens Dev blog", "feedUrl": "https://mitchellsimoens.com/rss/"},
        { id: 6, "title": "Steve Druckers Dev blog", "feedUrl": "https://druckit.wordpress.com/feed/" },

        { id: 7, "title": "Saki's Dev blog", "feedUrl": "http://extjs.eu/blog/feed/atom/" },
        { id: 8, "title": "Chris Heilmann Dev blog", "feedUrl": "http://feeds.feedburner.com/chrisheilmann" },
        { id: 9, "title": "David Walsh Dev blog", "feedUrl": "https://davidwalsh.name/feed" },
        { id: 10, "title": "Paul Irish Dev blog", "feedUrl": "http://feeds.feedburner.com/feedburner/lcYz" },
        { id: 11, "title": "Paul Kinlan Dev blog", "feedUrl": "http://feeds.feedburner.com/TalesOfADeveloperAdvocate" },
        { id: 12, "title": "Lea Verou Dev blog", "feedUrl": "http://feeds.feedburner.com/leaverou" },

        { id: 13, "title": "Ajaxian", "feedUrl": "http://feeds.feedburner.com/ajaxian" },
        { id: 14, "title": "Chromium Dev blog", "feedUrl": "http://blog.chromium.org/feeds/posts/default" },
        { id: 15, "title": "MS Edge Dev blog", "feedUrl": "http://blogs.windows.com/msedgedev/feed/" },

        { id: 16, "title": "IGN VideoGame News", "feedUrl": "http://feeds.ign.com/ign/all"},
        { id: 17, "title": "The Verge", "feedUrl": "http://www.theverge.com/rss/index.xml"},
        { id: 18, "title": "Gizmodo", "feedUrl": "http://feeds.gawker.com/gizmodo/full"}


    ]
});
