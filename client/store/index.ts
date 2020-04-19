import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import CMS from './cms';

// eslint-disable-next-line import/no-mutable-exports
let cms: CMS;
function initializeStores(store: Store<any>): void {
  cms = getModule(CMS, store);
}

export { cms };
export const plugins = [(store: Store<any>) => initializeStores(store)];
