export abstract class FormManager{

    public abstract async getFormsIndex(): Promise<string[]>;

    public abstract async getForm(name: string): Promise<string>;

}