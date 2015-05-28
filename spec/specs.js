describe('Dog', function() {
  it("creates a new dog with the given specifications", function() {
    var testDog = new Dog("Paco",["brown","white"],3);
    expect(testDog.name).to.equal("Paco");
  });
});
