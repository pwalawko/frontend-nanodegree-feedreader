/* This is the spec file that Jasmine will read and contains
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
         * empty.
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


    describe('The menu', function() {
        /* The test for the menu.
         */

        const menuIcon = document.querySelector('.icon-list');
        const body = document.querySelector('body');

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(body.className).toEqual('menu-hidden');
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('changes visibility when the menu icon is clicked', function() {
            menuIcon.click();
            expect($('body').hasClass('')).toBe(true);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    describe('Initial Entries', function() {
        /* The test for initial entries.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('has at least a single .entry element', function(done) {
            const entryElements = document.querySelectorAll('.feed .entry')
            expect(entryElements.length).toBeGreaterThan(0);
            done();
        });

    });


    describe('New Feed Selection', function() {
        /* The test for the new feed selection.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                prevFeedData = document.querySelectorAll('.feed .entry');

                loadFeed(1, function() {
                    newFeedData = document.querySelectorAll('.feed .entry');
                    done();
                });
            });
        });

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('has new feed loaded by the loadFeed function', function(done) {
            expect(prevFeedData).not.toBe(newFeedData);
            done();
        });

    });

}());
