import "reflect-metadata";

import { ContentType } from "./rest/content-type";
import { RestMethod } from "./rest/rest-method.enum";
/**
 * @class Annotation
 * @see npm @qsdt/common
 * @author arthmoeros (Arturo Saavedra) artu.saavedra@gmail.com
 * 
 * This Class defines constants to identify metadata keys from reflect-metadata
 * decorators
 * 
 */
export class Annotation {
	public static readonly RestService: string = "RestService:restDefinition";
	public static readonly PipeFunction: string = "PipeFunction";
	public static readonly TemplateFunction: string = "TemplateFunction";

	public static getRestServiceMetadata(restApi: any, member: string): { method: RestMethod, resource: string, requestContentType: ContentType, responseContentType: ContentType } {
		return Reflect.getMetadata(Annotation.RestService, restApi, member);
	}
}

/**
 * Annotates a public method as a Rest Service, all the rest definition must be supplied
 * @param restDefinition 
 */
export function RestService(restDefinition: { method: RestMethod, resource: string, requestContentType: ContentType, responseContentType: ContentType }) {
	return Reflect.metadata(Annotation.RestService, restDefinition);
}

/**
 * Annotates a public method as a Pipe Function
 */
export function PipeFunction() {
	return Reflect.metadata(Annotation.PipeFunction, Annotation.PipeFunction);
}

/**
 * Annotates a public method as a Template Function
 */
export function TemplateFunction() {
	return Reflect.metadata(Annotation.TemplateFunction, Annotation.TemplateFunction);
}