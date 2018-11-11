call npm run docs:build

cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:wmfs/tymly-website.git master:gh-pages

cd ../../../
