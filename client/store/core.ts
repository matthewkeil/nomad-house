import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({
  name: 'core',
  stateFactory: true,
  namespaced: true
})
export default class CoreStore extends VuexModule {
  public drawerOpen = false;
  public links = [
    { text: 'one', href: '', to: '' },
    { text: 'two', href: '', to: '' },
    { text: 'three', href: '', to: '' }
  ];

  @Action
  toggleDrawer(open?: boolean) {
    this.TOGGLE_DRAWER(open);
  }

  @Mutation
  private TOGGLE_DRAWER(open?: boolean) {
    this.drawerOpen = open !== undefined ? open : !this.drawerOpen;
  }
}
