set -e
npm run docs:build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/CaiPeng1989/CaiPeng1989.github.io master
cd -
