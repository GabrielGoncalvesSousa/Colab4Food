import type { InjectionKey } from 'vue'
import type { AxiosStatic } from 'axios'


export const AxiosKey = Symbol() as InjectionKey<AxiosStatic>

