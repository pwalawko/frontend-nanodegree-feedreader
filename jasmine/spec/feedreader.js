/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        function definedAndNotEmpty(element) {
            expect(element).toBeDefined();
            expect(element.length).not.toBe(0);
        }


        it('are defined', function() {
            definedAndNotEmpty(allFeeds);
        });

        it('have URLs', function() {
            allFeeds.forEach(function(element) {
                definedAndNotEmpty(element.url);
            });
        });

        it('have names', function() {
            allFeeds.forEach(function(element) {
                definedAndNotEmpty(element.name);
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        const menuIcon = document.querySelector('.icon-list');
        const body = document.querySelector('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect(body.className).toEqual('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {
            menuIcon.click();
            expect(body.className).toEqual('');
            menuIcon.click();
            expect(body.className).toEqual('menu-hidden');
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('has at least a single .entry element', function(done) {
            const entryElements = document.querySelectorAll('.feed .entry')
            expect(entryElements.length).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let feed1, feed2, feed3;

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    });

}());
