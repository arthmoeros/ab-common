export abstract class FormManager{

    public abstract getFormsIndex(): string[];

    public abstract getForm(name: string): string;

}