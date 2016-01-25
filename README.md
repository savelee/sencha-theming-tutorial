# sencha-theming-tutorial
This a theming tutorial for a sencha blog post. This repository contains my Spotifext theme. A Spotify look a like theme.

#Requirements
* ExtJS6 Beta
* Sencha Cmd version 6 (to check it, run: `sencha which` on the CLI)
* (optionally) Sencha App Inspector, the new stand-alone app, which contains the theme roller.

#Getting Started

1. Navigate to your Ext6 SDK on the CLI
2. Generate a workspace
<from-ext6-folder>$ `sencha generate workspace ../sencha-theming-tutorial`
3. `cd ext`
4. `sencha generate app -starter=false ThemingApp ../extthemingapp`
5. Download the zip from this Github repo,
and copy *extthemingapp* into your workspace.
(Say yes to replace.)
6. Run `sencha app refresh`
7. Run `sencha app watch`
8. Checkout the theming app in your browser: *http://localhost:1841/extthemingapp/?platformTags=fashion:true*
(make sure the url contains the ?platformTags=fashion:true)

#How to create your own theme package

Take a look into my blog post:
* https://www.sencha.com/blog/how-to-create-a-dark-ext-js-theme-part-1/
* https://www.sencha.com/blog/how-to-create-a-dark-ext-js-theme-part-2/

