module List03_02 {
  
  class Totalizer {
    private total = 0;
    private taxRateFactor = 0.2;

    addDnation(amount: number) {
      if (amount <= 0) {
        throw new Error('Donation exception');
      }

      const taxRebate = amount * this.taxRateFactor;
      const totalDonation = amount + taxRebate;

      this.total += totalDonation;
    }

    getAmountRaised() {
      return this.total;
    }
  }

  const totalizder = new Totalizer();
  totalizder.addDnation(100.00);

  const fundsRaised = totalizder.getAmountRaised();

  console.log(fundsRaised);

}
