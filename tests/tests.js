 
exports.defineAutoTests = function () {
  describe('Whois (window.whois)', function () {
    it('should exist', function (done) {
      expect(window.whois).toBeDefined();
      done();
    });

    it('should contain a results specification that is an array', function (done) {
      var p = new window.whois(['apache.org@whois.pir.org']);
      setTimeout(function () {
        expect(p.results).toBeDefined();
        expect(p.results.length > 0).toBe(true);
        done();
      }, 1000);
    });
  });
};
