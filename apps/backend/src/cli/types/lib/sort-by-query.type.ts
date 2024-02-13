import { Guitar } from './guitar.interface';


export type SortByQuery = keyof Pick<Guitar, 'createdAt' | 'price'>

export type SortByOrder = 'desc' | 'asc';
