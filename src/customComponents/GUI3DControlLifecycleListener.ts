import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";

export default class GUI3DControlLifecycleListener implements LifecycleListener {
  // private added: boolean = false;

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    // if (this.added !== true) {
    //     console.warn('Need to set state as remove/adding dynamically while running are done differently.', instance);
    // }
  }
}
