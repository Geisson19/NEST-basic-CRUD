import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateDTO } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Ford',
    //   model: 'Fiesta',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }

  create({ brand, model }: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      brand: brand,
      model: model,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDTO: UpdateDTO) {
    const updatedCar = this.findOne(id);
    updatedCar.brand = updateCarDTO.brand || updatedCar.brand;
    updatedCar.model = updateCarDTO.model || updatedCar.model;
    this.cars = this.cars.map((car) => (car.id === id ? updatedCar : car));
    return updatedCar;
  }

  delete(id: string) {
    const car = this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
