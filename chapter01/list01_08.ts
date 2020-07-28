enum VehicleType {
  PedalCycle,
  MotorCycle,
  Car,
  Van,
  Bus,
  Lorry
}

const type = VehicleType.Lorry;
const typeName = VehicleType[type];
console.log(typeName);
