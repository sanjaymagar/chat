# It's like bootstrap for applications (instead of pages)

## Updating node package

`npm publish`

## Updating gem

-1. `gulp`
0. `cp public/css/app.css appcss/app/assets/stylesheets/appcss/`
1. `cd` to `appcss/`
2. `rvm use 2.1.2`
3. `rvm gemset use appcss`
4. Change version in lib/appcss/version.rb
5. `gem build appcss.gemspec`
6. `gem push appcss-x.x.x.gem` (Replace the "x"s)

## Possibly quicker version

0. `cd appcss`
1. `rvm use 2.1.2`
2. `rvm gemset use appcss`
3. `make` (Edit version)
4. `make finish`
6. `gem push appcss-x.x.x.gem` (Replace the "x"s)
