#
# BUILD THE SITE
#

build:
	cd docs && grunt build
	cd ..

#
# BUILD THE GH-PAGES BRANCH
#

gh-pages: build
	mkdir -p gh-pages
	cp -r docs/ gh-pages/
	cp -r dist gh-pages/encounters
	zip -r gh-pages/encounters.zip gh-pages/encounters
	rm -f gh-pages/.csslintrc
	rm -f gh-pages/bower.json
	rm -f gh-pages/Gruntfile.js
	rm -f gh-pages/package.json
	rm -rf gh-pages/.sass-cache
	rm -rf gh-pages/encounters
	rm -rf gh-pages/node_modules
	rm -rf gh-pages/sass
	rm -rf gh-pages/temp
	git fetch origin
	git checkout gh-pages
	rm -rf ./components
	rm -rf ./dist
	rm -rf ./icons
	rm -rf ./images
	rm -rf ./javascripts
	rm -rf ./stylesheets
	mv gh-pages/* .
	rm -rf gh-pages
