import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Mazda',
        model: 'CX30'
    },
    {
        id: uuid(),
        brand: 'Renault',
        model: 'Duster'
    },
]