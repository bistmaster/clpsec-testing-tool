const request = require('request-promise');
const keys = require('../../config/contentful.conf')
const getContentUrl = (entryId, locale) => {
    const _locale = locale || 'en-US'
    const HOST_URL = `https://cdn.contentful.com/spaces/v7rhwo5gj231/environments/master/entries/${entryId}?`;
    const ACCESS_TOKEN = `12185f5e477d00e585905d1eef079fd58068d183ea72d0477ca7bbcf0ad77b79`
    const QUERY_STRING = `access_token=${ACCESS_TOKEN}&locale=${_locale}`;
    return `${HOST_URL}${QUERY_STRING}`;
}

exports.ENTRY = keys;
// fetch to contentful for the contents
exports.fetch = async (entryId, locale) => await request(getContentUrl(entryId, locale))