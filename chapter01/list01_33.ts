{
  const ScopeLosingExample = {
    text: 'Property from lexical scope',
    run: function() {
      setTimeout(() => {
        console.log(this.text);
      }, 1000);   
    }
  };

  ScopeLosingExample.run();
}
