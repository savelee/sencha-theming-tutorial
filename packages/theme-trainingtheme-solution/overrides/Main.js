Ext.define('Theme.overrides.Main', {
  override: 'FeedViewer.view.main.Main',

  frame: true,
  dockedItems : [{
      xtype : 'toolbar',
      dock : 'top',
      items : [ {
          xtype: 'component',
          height: 40,
          cls: 'logo',
          html : document.title
      }]
  }]
});
