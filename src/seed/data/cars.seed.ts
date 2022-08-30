import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A4',
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: 'X5',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    model: 'C class',
  },
];
