const request = require('request-promise')
const getContentUrl = (entryId, locale) => {
    const _locale = locale || 'en-US'
    const HOST_URL = `https://cdn.contentful.com/spaces/v7rhwo5gj231/environments/master/entries/${entryId}?`;
    const ACCESS_TOKEN = `12185f5e477d00e585905d1eef079fd58068d183ea72d0477ca7bbcf0ad77b79`
    const QUERY_STRING = `access_token=${ACCESS_TOKEN}&locale=${_locale}`;
    return `${HOST_URL}${QUERY_STRING}`;
}

exports.ENTRY = {
    'HEADERS': '4pgzXQSJ4caQmQ8KOMSa8G',
    'HOMEPAGE': '2Yi01j8sk82mSWS4Gqc4MO',
    'FOOTERS': '2x4Su4e9qMy2GgcCameGOC',
    'FRONTPAGE': '2Yi01j8sk82mSWS4Gqc4MO',
    'META': '7zpiHV3GIWPOURkioArCF7',
    'PARTNER': '35XhhKCcUg2CmGym26oQMs',
    'ONBOARDING': '1Ws0Ha9sOs2SSa0w2c8euc',
    'PRIVACY': '5zLGHcxUwowsiuAOQSias4',
    'TERMS': '7v3lyskWasg2meAG4emcQW',
    'DISCLAIMER': '2wE6yLqVusa0uIeuI648u4',
    'COPYRIGHT': '3Um0JxOudqEoKmo4E6wwKO',
    'FAQ': 'v5eedRWXWCkmSaoEg8GOI',
    'CONTACT': '1S5DrsRr5Ss0q4EsuamE6U'
}

// fetch to contentful for the contents
exports.fetch = async (entryId, locale) => await request(getContentUrl(entryId, locale))