export class BlueprintContainer {

    private contained: any;

    constructor(name: string, contents: string, task: string){
        this.contained = JSON.parse(contents)[task];
        if(this.contained === undefined){
            throw new Error(`Couldn't find a task named '${task}' at the blueprint '${name}'`);
        }
    }

    public getContents(): any{
        return this.contained;
    }

}