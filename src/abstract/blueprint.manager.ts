import { BlueprintContainer } from '../container/blueprint.container';

export abstract class BlueprintManager {

    public abstract async getBlueprint(name: string, task: string): Promise<BlueprintContainer>;

    public abstract async getBlueprintMaterial(blueprintName: string, materialLocation: string): Promise<string>;

}