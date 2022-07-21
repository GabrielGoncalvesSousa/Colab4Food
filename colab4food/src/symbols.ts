import type { InjectionKey } from 'vue'
import type { AxiosStatic } from 'axios'
import { inject } from '@vue/runtime-dom';

export const AxiosKey = Symbol() as InjectionKey<AxiosStatic>

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T){
    const resolved = inject(key, fallback);
    if (!resolved) {
      throw new Error(`Could not resolve ${key}`);
    }
    return resolved;
  }