import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import CmsStore from './cms';
import CoreStore from './core';

let cms: CmsStore;
let core: CoreStore;
function initializeStores(store: Store<any>): void {
  cms = getModule(CmsStore, store);
  core = getModule(CoreStore, store);
}

export { cms, core };
export const plugins = [(store: Store<any>) => initializeStores(store)];
