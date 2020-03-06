'use strict';

/* global navigator, WorkerNavigator */

const require_method = require;

// Prevent React Native packager from seeing modules required with this
function nodeRequire(module) {
    return require_method(module);
}

const Realm = require('realm');
const TestCase = require('./asserts');

module.exports = {
    testNewApp: function () {
        let app = new Realm.App('my-awesone-app');
        TestCase.assertTrue(app instanceof Realm.App);
    },

    testNewAppWithConfig: function () {
        const config = {
            url: 'http://localhost:9090',
            timeout: 1000,
            app: {
                name: 'My Awesome App',
                version: '42'
            }
        };

        let app = new Realm.App('my-awesome-app', config);
        TestCase.assertTrue(app instanceof Realm.App);

        let credentials = Realm.Credentials.anonymous();
        return app.login(credentials);
    },
};