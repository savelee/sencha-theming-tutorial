Ext.define('FeedViewer.view.feed.BaseListController', {
    extend: 'Ext.app.ViewController',

     /**
      * Inserts a new model.RSSFeed into the dataview.
      * @param {FeedViewer.model.RSSFeed} feed
      */
     addFeed: function (feed) {
         var feedGrid = this.lookupReference('feedGrid');
             store = feedGrid.getStore();

         store.add(feed);
     },

    onFeedSelection: function (selModel) {
        var feed = this.getSelectedItem();

        if (feed && !feed.loaded) {
            // Start loading the feed's entries
            feed.load({
                url: feed.get('feedUrl'),
                limit: 10,
                callback: function (record, operation, success) {
                    feed.loaded = success;
                }
            });
        }

        // Fire a controller event to allow the tabController to setActiveTab
        this.fireEvent('feedselect', this, feed);
    },

    /**
     * Returns the selected feed or false if nothing is selected.
     * @return {FeedViewer.model.RSSFeed}
     */
    getSelectedItem: function () {
        var feedGrid = this.lookupReference('feedGrid'),
            selection = feedGrid.getSelection();

        return selection ? selection[0] : null;
    },

    selectFirstFeed: function () {
        var feedGrid = this.lookupReference('feedGrid'),
            store = feedGrid.getStore(),
            selection;

        if (store && store.getCount()) {
            selection = feedGrid.getSelection();
            if (!selection || !selection.length) {
                feedGrid.getSelectionModel().select(0);
            }
        }
    }
});
