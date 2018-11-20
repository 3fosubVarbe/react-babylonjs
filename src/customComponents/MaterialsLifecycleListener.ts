import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";

export default class MaterialsLifecycleListener implements LifecycleListener {
  onParented(parent: CreatedInstance<any>) {}
  onChildAdded(child: CreatedInstance<any>) {}
  onMount(instance: CreatedInstance<any>) {
    let material = instance.hostInstance
    let tmp: CreatedInstance<any> | null = instance.parent
    while (tmp != null) {
      if (tmp.metadata && tmp.metadata.acceptsMaterials === true) {
        tmp.hostInstance.material = material
        break
      }
      tmp = tmp.parent
    }
  }
}
