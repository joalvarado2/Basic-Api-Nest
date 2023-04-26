import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brans.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ){}

  populateDB() {

    //CARS_SEED
    //BRANDS_SEED
    this.carsService.fillCarWithSeedData(CARS_SEED);
    this.brandsService.fillBrandWithSeedData(BRANDS_SEED);

    return 'SEED executed';
  }
}
