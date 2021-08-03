import { CreatedInstance } from "./CreatedInstance";

/**
 * Props passed from controls that are not part of generated props and custom handling.  Typically used to aid declarative composition.
 */
 export type CustomProps = {
  /**
   * Assign to this property on the parent.  Parent property is cleared on umnount.
   */
  assignTo?: string | string[]
  /**
   * Assigned from this existing property on the parent.  Will assign this host element to a parent property that contains an existing instance (no new instances created and no dispose called).
   */
  assignFrom?: string
  /**
   * allows components to use instances of objects created non-declaratively
   */
  fromInstance?: any
  /**
   * To automatically dispose of the underlying object when "fromInstance" is used.  Is not applied for regularly instanced objects.
   * 
   * Default: false
   */
  disposeInstanceOnUnmount?: boolean
}

export type MaterialCustomProps = {
  /**
   * For attaching the same material to multiple meshes (by mesh name)
   */
   attachToMeshesByName?: string[]
} & CustomProps;

export type ShadowGeneratorCustomProps = {
  /**
   * List of mesh names to search for, which will be added as shadow casters.
   */
   shadowCasters?: string[]
   /**
    * List of mesh names to exclude from casting shadows (all other meshes by name will cast shadows)
    */
   shadowCastersExcluding?: string[]
} & CustomProps;

export type VirtualKeyboardCustomProps = {
  /**
   * for VirtualKeyboard (2d input control names)
   */
   connectControlNames?: string[]
   /**
    * for VirtualKeyboard
    */
   defaultKeyboard?: boolean
} & CustomProps;

export type VRExperienceHelperCustomProps = {
  enableInteractions?: boolean
} & CustomProps;

export type Control3DCustomProps = {
  /**
   * for 3D control ".content" (which is 2D)
   */
  childrenAsContent?: boolean
  /**
   * for Control3D, which has position, but not other properties like rotation.
   */
  linkToTransformNodeByName?: string
  /**
   * See manager and Control lifecycle listener for details.
   */
  onControlAdded?: (instance: CreatedInstance<any>) => void
} & CustomProps;

export type ADTCustomProps = {
  /**
   * Only applicable for AdvanceDynamicTexture to attach to a mesh.  ADT.CreateForMesh(parent, ...)
   */
   createForParentMesh?: boolean
};
