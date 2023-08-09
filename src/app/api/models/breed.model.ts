export class Breed {
    id!: string;
    name!: string;
    description!: string;
    temperament!: string;
    life_span!: string;
    weight!: {
        imperial: string;
        metric: string;
    }
    origin!: string;
    bred_for!: string;
}
