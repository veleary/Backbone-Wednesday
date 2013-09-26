/**
 * This spec uses Jasmine Fixtures
 * See https://github.com/searls/jasmine-fixture
 */
describe("utility functions", function () {

  describe("#getTemplate", function () {

    it("returns a new template function", function () {
      $templatesDiv = affix('#templates script[type="text/template"].task');
      $templatesDiv.find('.task').text('abc123');

      var template = _.getTemplate('task');
      expect(template()).toEqual('abc123');
    });
  });

});
