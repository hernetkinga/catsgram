import { Breed } from "./breed.model";
import { Category } from "./category.model";

export class Breeds {
    breeds!: [Breed];
    categories!: [Category];
    id!: string;
    url!: string;
    favourite?: {
        id: string;
    }
}
