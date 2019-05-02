var options = {
    slack_message: function(results, options) { // function or message string
        return {
            text: 'Test completed, passed ' + results.passed + ', failed ' + results.failed,
            username: 'Nightwatch',
            icon_emoji: ':ghost:',
            channel: '#operation'
        } // Message payload or string
    },
    slack_webhook_url: 'https://hooks.slack.com/services/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' || process.env.SLACK_WEBHOOK_URL
    // This can be specified with SLACK_WEBHOOK_URL environment variable
}

module.exports = {
    reporter: (require('nightwatch-slack-reporter')(options))
}   