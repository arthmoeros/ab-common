/**
 * Defines constant object for content type definition
 */
export class ContentType{
	public static readonly applicationJson: ContentType = new ContentType("application/json");
	public static readonly testPlain: ContentType = new ContentType("text/plain");
	public static readonly urlEncoded: ContentType = new ContentType("application/x-www-form-urlencoded");
	public static readonly applicationZip: ContentType = new ContentType("application/zip");
	public static readonly raw: ContentType = new ContentType("raw");

	private constructor(private inner: string){
	}

	public get value(){
		return this.inner;
	}
}