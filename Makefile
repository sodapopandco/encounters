#
# BUILD THE SITE
#

build:
	cd docs; grunt build
	cd ..

#
# BUILD THE GH-PAGES BRANCH
#

gh-pages: build
	mkdir -p gh-pages
	cp -r docs/ gh-pages/
	cp -r dist gh-pages/dist
	cd gh-pages/
	cp -r dist encounters
	zip -r encounters.zip encounters
	rm -f .csslintrc
	rm -f bower.json
	rm -f Gruntfile.js
	rm -f package.json
	rm -rf encounters
	rm -rf node_modules
	rm -rf sass
	cd ..
	git fetch origin
	git checkout gh-pages
	rm -rf ./dist
	rm -rf ./icons
	rm -rf ./images
	rm -rf ./javascripts
	rm -rf ./stylesheets
	mv gh-pages/* .
	rm -rf gh-pages
