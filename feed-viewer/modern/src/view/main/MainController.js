Ext.define('FeedViewer.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        component: {
            'feedlist': {
                select: 'onFeedSelect',
                disclose: 'onFeedSelect'
            },
            'feeditems': {
                select: 'onFeedItemSelect',
                disclose: 'onFeedItemSelect'
            },
            'feedform button[action=save]': {
                tap: 'onSaveFeed'
            }
        }
    },

    /**
     * React to selection of a feed, load the items.
     */
    onFeedSelect: function (view, feed) {
        var me = this,
            viewport = me.getView();

        if (view.isEditing) {
            me.removeFeed(feed);
        } else {
            feed.load(
                {
                    url: feed.get('feedUrl'),
                    limit: 30,
                    callback: function (records, operation, success) {
                        var list, vm;
                        if (success) {
                            list = viewport.push({
                                xtype: 'feeditems',
                                reference: 'feeditems',
                                title: feed.get('title')
                            });

                            vm = list.getViewModel();
                            vm.set('feed', feed);
                            vm.notify(); // notify Feed model binders

                        }
                        view.deselectAll();
                    }
                }
            );
        }
    },

    /**
     * React to selection of an item, load the post.
     */
    onFeedItemSelect: function (view, feed) {
        var me = this,
            vm,
            viewport = me.getView();

        viewport.push({
            xtype: 'feedpost',
            title: feed.get('title')
        });

        view.deselectAll();

        vm = viewport.down('feedpost').getViewModel();
        vm.set('feed', feed.data);
    },

    /**
     * React to the new form save button being clicked.
     */
    onSaveFeed: function () {
        var form = this.getView().down('feedform').getValues(),
            feed = Ext.create('FeedViewer.model.RSSFeed');

        if (form && form.feedUrl) {
            feed.load({
                url : form.feedUrl,
                callback: 'validateFeed',
                scope: this
            });
        }
    },

    /**
     * Validates a feed from save click callback, adds the feed and returns to list.
     */
    validateFeed: function (feed, operation, success) {
        var me = this,
            view = this.getView();

        if (success) {
            view.down('feedlist').getStore().add(feed);
            view.pop();
            me.onEditFeeds();  //toggle edit states
        }
    },

    /**
     * React to new button to open form.
     */
    onNewFeed: function () {
        var navView = this.getView(),
            form = navView.child('feedform');

        if (!form) {
            navView.push({
                xtype: 'feedform',
                reference: 'feedform'
            });
        } else {
            navView.setActiveItem(form);
        }
    },

    /**
     * React to edit feed list
     */
    onEditFeeds: function () {
        var feeds = this.getView().getActiveItem(),
            refs = this.getReferences();

        if (feeds.isEditing) {
            feeds.isEditing = false;
            feeds.removeCls(feeds.editingCls);
            refs.newbutton.hide();
        } else {
            feeds.addCls(feeds.editingCls);
            feeds.isEditing = true;
            refs.newbutton.show();
        }
    },

    /**
     * React to remove button
     */
    removeFeed: function (feed) {
        var store = this.lookupReference('feedlist').getStore();
        store.remove(feed);
    }
});
