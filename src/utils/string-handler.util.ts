import { StringContainer } from "./../container/string.container";

/**
 * @class StringHandlerUtil
 * @see npm @qsdt/common
 * @author arthmoeros (Arturo Saavedra) artu.saavedra@gmail.com
 * 
 * Class with static util methods for string handling
 * 
 */
export class StringHandlerUtil{
	
	/**
	 * Converts a CamelCase string to a dashed-lower-case string
	 * @example "ThisShortString" becomes "this-short-string"
	 * @param str string to convert
	 */
	public static convertCamelCaseToDashed(str: string): string {
		let firstPass: RegExp = new RegExp(/([a-z])([A-Z])/g);
		let secondPass: RegExp = new RegExp(/([A-Z])([A-Z])([a-z])/g);
		let result: StringContainer = new StringContainer(str);
		result.replace(firstPass, "$1-$2");
		result.replace(secondPass, "$1-$2$3");
		return result.toString().toLowerCase();
	}

	/**
	 * Converts a string to a class name string, it just uppercases the first character :P
	 * @example "badClassName" becomes "BadClassName", a NASA worthy code indeed...
	 * @param str string to convert
	 */
	public static convertToClassName(str: string): string {
		if (str.charAt(0) != str.charAt(0).toUpperCase()) {
			return str.charAt(0).toUpperCase().concat(str.slice(1, str.length));
		} else {
			return str;
		}
	}

	/**
	 * Determines from the string and index inputs, which line and column locates the index,
	 * to determine the line number it count the number of line feed character contained in
	 * the string up to the index (it removes any carriage returns from the string, to keep it 
	 * "cross-platform" compatible), the it determines the column by counting the number of 
	 * characters from the last line feed character up to the index.
	 * @param str string to do the search
	 * @param index index where to do the location
	 */
	public static locateLineColumnUpToIndex(str: string, index: number) : [number, number] {
		str = str.substring(0, index);
		str = str.replace(/\r/g, "");
		let lines: string[] = str.split("\n");
		let lineNum: number = lines.length;
		let colNum: number = lines[lines.length-1].length;
		return [lineNum, colNum];
	}
}