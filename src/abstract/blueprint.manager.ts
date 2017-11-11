import { BlueprintContainer } from '../container/blueprint.container';

export abstract class BlueprintManager {

    public abstract getBlueprint(name: string, task: string): BlueprintContainer;

    public abstract getBlueprintMaterial(blueprintName: string, materialLocation: string): Buffer;

}