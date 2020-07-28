interface House {
  bedrooms: number;
  bathrooms: number;
}

interface Mansion {
  bedrooms: number;
  bathrooms: number;
  butlers: number;
}

const avenueRoad: House = {
  bedrooms: 11,
  bathrooms: 10,
};

const mansion: Mansion = <Mansion> avenueRoad;
console.log(mansion);
