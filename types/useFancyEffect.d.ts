import * as React from 'react';

import { DependenciesObject } from '.';

export type FancyEffectHelper = (fancyEffectObject: DependenciesObject) => boolean;

/**
 * Accepts a callback that contains imperative, possibly effectful code.
 *
 * @param callback A callback that fires on specific conditions and can return a cleanup function.
 * @param dependencyList List of dependencies, changing them is one of the conditions helps callback fires.
 * @param fancyHelper A function that its return value act as another condition for firing callback.
 *
 * @version 0.1.0
 */
export function useFancyEffect(
  callback: React.EffectCallback,
  dependencyList?: React.DependencyList,
  fancyHelper?: FancyEffectHelper,
): void;
