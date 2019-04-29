### CLPSEC Testing tool

End-to-end testing for the CLPSEC site. It uses nightwatch to test run the test with browserstack integration. Covers both english and chinese language.


### Setup

1. Install the nightwatch as global. `npm i nightwatch -g` and also for dev `npm i nightwatch`
2. Install Dependencies - `npm install`
3. Run the scripts based on the environment you want to test.
4. If needed please use a new browsertack account. You can change it in config files. `'browserstack.user': '<username>', 'browserstack.key': 'KsRB2ahsy3zxxkmCzskx'`


### Languages

Test case with [filename].[`zh`].js means this intended for chinese testing. Default is english.

### Environments

#### Production

##### Desktop

1. Chrome - `nightwatch --env production:chrome tests/specs/desktop/`
2. Safari - `nightwatch --env production:safari tests/specs/desktop/`
3. Firefox - `nightwatch --env production:firefox tests/specs/desktop/`

##### Mobile

1. Chrome - `nightwatch --env production:chrome tests/specs/mobile/`

#### BrowserStack

1. Chrome - `nightwatch --env default -c config/browserstack.conf.js tests/specs/desktop/`
2. Internet Explorer - `nightwatch --env ie -c config/browserstack.conf.js tests/specs/desktop/`
3. Firefox - `nightwatch --env firefox -c config/browserstack.conf.js tests/specs/desktop/`
4. Safari - `nightwatch --env safari -c config/browserstack.conf.js tests/specs/desktop/`

##### Mobile

1. TODO

#### Local

##### Desktop

1. Chrome - `nightwatch --env default tests/specs/desktop/`
2. Safari - `nightwatch --env safari tests/specs/desktop/`
3. Firefox - `nightwatch --env firefox tests/specs/desktop/`

##### Mobile

1. Chrome - `nightwatch --env default tests/specs/mobile/`