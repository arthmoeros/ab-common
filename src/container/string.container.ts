/**
 * @class StringContainer
 * @version 0.9.0
 * @see npm @ab/common
 * @author arthmoeros (Arturo Saavedra) artu.saavedra@gmail.com
 * 
 * Class for containing a string "reference", for example, you can pass an instance of this class
 * through methods and work with the "same" string. Strings are inmutable, so keeping a var reference through methods is impossible,
 * but if you pass this reference and work with the contained string, you save a lot of additional code if you do a heavy string work.
 * 
 * Also provides basic methods for string manipulation, not all but a few. Feel free to submit pull requests for additional methods
 * 
 */
export class StringContainer{

	private containedString: string;

	/**
	 * Instances a StringContainer with a initialized string
	 * @param initial initial string
	 */
	constructor(initial?: string){
		if(initial){
			this.containedString = initial;
		}else{
			this.containedString = "";
		}
	}

	/**
	 * Appends a string at the end of the contained string
	 * @param str string to be appended
	 */
	public append(str: string|StringContainer): StringContainer{
		return this.concat(str);
	}

	/**
	 * Alias for StringContainer.append
	 * @see StringContainer.append
	 * @param str string to be appended
	 */
	public concat(str: string|StringContainer): StringContainer{
		if(str instanceof StringContainer){
			str = str.getString();
		}
		this.containedString = this.containedString.concat(str);
		return this;
	}
	
	/**
	 * Inserts a string at the specified index, pushing all the remaining characters forward
	 * @param str string to be inserted
	 * @param index index from the contained string where the insertion must be done
	 */
	public insert(str: string|StringContainer, index: number): StringContainer {
		if(str instanceof StringContainer){
			str = str.getString();
		}
    	if(index > 0){
			this.containedString = this.containedString.replace(new RegExp('.{' + index + '}'), '$&' + str);
		}else{
			this.containedString = str.concat(this.containedString);
		}
		return this;
	}

	/**
	 * Replaces the found string(s) with the replace specified in the contained string
	 * @param find string or RegExp to look for
	 * @param replace string to replace the searched string of RegExp
	 */
	public replace(find: any, replace: string|StringContainer): StringContainer{
		if(replace instanceof StringContainer){
			replace = replace.getString();
		}
		if(find instanceof StringContainer){
			find = find.getString();
		}
		this.containedString = this.containedString.replace(find, replace);
		return this;
	}

	/**
	 * Replaces the contained string in the specified range, with the replacement value
	 * @param start starting index from where to replace
	 * @param end ending index (inclusive) up until where to replace
	 * @param value string to replace with the given range
	 */
	public replaceRange(start: number, end: number, value: string|StringContainer): StringContainer{
		if(value instanceof StringContainer){
			value = value.getString();
		}
		this.containedString = this.containedString.substr(0,start) + value + this.containedString.substr(end, this.containedString.length);
		return this;
	}

	/**
	 * Replaces all matches of the searched string with the replacement string in the contained string
	 * @param find string to look for
	 * @param replace string to replace the searched string in all its found instances
	 */
	public replaceAll(find: string|StringContainer, replace: string|StringContainer): StringContainer{
		if(replace == null){
			replace = "";
		}
		if(replace instanceof StringContainer){
			replace = replace.getString();
		}
		if(find instanceof StringContainer){
			find = find.getString();
		}
		this.containedString = this.containedString.replace(new RegExp("/"+find+"/g"),replace);
		return this;
	}

	/**
	 * Get the contained string as string type
	 */
	public getString(): string{
		return this.containedString;
	}

	/**
	 * Alias for getString()
	 * @see StringContainer#getString
	 */
	public toString(): string{
		return this.containedString;
	}
	
}