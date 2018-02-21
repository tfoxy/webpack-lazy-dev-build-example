const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const webpackConfig = require('./webpack.config');
const LazyBuild = require(`${process.env.LOCAL_LIB_PATH || ''}webpack-lazy-dev-build`);

const lazyBuild = new LazyBuild();
webpackConfig.plugins.push(lazyBuild.plugin);

const compiler = webpack(webpackConfig);
const app = express();

app.use(lazyBuild.createMiddleware(WebpackDevMiddleware(compiler)));

app.get('/', (req, res) => {
  const htmlFilepath = path.join(__dirname, 'src', 'index.html');
  fs.readFile(htmlFilepath, (err, content) => {
    res.write(content);
    res.end();
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
