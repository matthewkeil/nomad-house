import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

type Column = keyof CmsStore['tasks'];

interface MoveTask {
  from: string;
  taskIndex: number;
  to: string;
  newIndex: number;
}

@Module({
  name: 'cms',
  stateFactory: true,
  namespaced: true
})
export default class CmsStore extends VuexModule {
  tasks = {
    ready: ['slug-1', 'slug-2', 'slug-3'],
    reviewed: ['slug-4', 'slug-5', 'slug-6'],
    approved: ['slug-7', 'slug-8', 'slug-9']
  };

  @Action
  public moveTask({ from, taskIndex, to, newIndex }: MoveTask) {
    this.MOVE_TASK({ from, taskIndex, to, newIndex });
  }

  @Mutation
  private MOVE_TASK({ from, taskIndex, to, newIndex }: MoveTask) {
    const [task] = this.tasks[from as Column].splice(taskIndex, 1);
    this.tasks[to as Column].splice(newIndex, 0, task);
  }
}
