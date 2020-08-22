const fs = require("fs");

const options = {
    baseUrl: '../dist/',
    name: 'cutlery.js'
}

module.exports = (eleventyConfig) => { 
    eleventyConfig.setBrowserSyncConfig({
        server: options.baseUrl,
        startPath: `/${options.name}`
    });
    
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addWatchTarget("./src/");
    
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy({ 
      'src/_static': 'static/',
      'src/robots.txt': 'robots.txt'
    });
      
    // layout alias
    eleventyConfig.addLayoutAlias('default', 'default.liquid');
    eleventyConfig.addLayoutAlias('page', 'page.liquid');
    
    // collections
    eleventyConfig.addCollection('sections', (collection) => {
        return collection.getFilteredByGlob("./src/_collections/sections/*.md");
    });
    
    return {
        pathPrefix: options.name,
        dir: {
            output: `${options.baseUrl}${options.name}`,
            input: 'src/',
            data: '_data',
            pages: '_pages',
            includes: '_includes',
            layouts: '_layouts',
        },
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'liquid',
    }
};