import { Algorithm } from './types';
import { searchingAlgorithms } from './searching';
import { sortingAlgorithms } from './sorting';
import { dataStructureAlgorithms } from './data-structures';
import { graphAlgorithms } from './graphs';
import { dpAlgorithms } from './dynamic-programming';
import { recursionAlgorithms } from './recursion-backtracking';
import { greedyAlgorithms } from './greedy';
import { patternAlgorithms } from './patterns';
import { stringAlgorithms } from './strings';

export * from './types';
export * from './searching';
export * from './sorting';
export * from './data-structures';
export * from './graphs';
export * from './dynamic-programming';
export * from './recursion-backtracking';
export * from './greedy';
export * from './patterns';
export * from './strings';

export const algorithms: Algorithm[] = [
    ...searchingAlgorithms,
    ...sortingAlgorithms,
    ...dataStructureAlgorithms,
    ...graphAlgorithms,
    ...dpAlgorithms,
    ...recursionAlgorithms,
    ...greedyAlgorithms,
    ...patternAlgorithms,
    ...stringAlgorithms
];
