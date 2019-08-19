// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by oauth-lea-config-ui.js.
import { name as packageName } from "meteor/leaonline:oauth-lea-config-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('oauth-lea-config-ui - example', function (test) {
  test.equal(packageName, "oauth-lea-config-ui");
});
