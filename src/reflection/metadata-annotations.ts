import "reflect-metadata";

/**
 * @class Annotation
 * @see npm @artifacter/common
 * @author arthmoeros (Arturo Saavedra) artu.saavedra@gmail.com
 * 
 * This Class defines constants to identify metadata keys from reflect-metadata
 * decorators
 * 
 */
export class Annotation {
	public static readonly RestMethod: string = "RestMethod:path";
	public static readonly RestRequestType: string = "RestResponseType:requestContentType";
	public static readonly RestResponseType: string = "RestResponseType:responseContentType";
	public static readonly PipeFunction: string = "PipeFunction";
	public static readonly TemplateFunction: string = "TemplateFunction";
}

export function RestMethod(path){
	return Reflect.metadata(Annotation.RestMethod, path);
}

export function RestRequestType(requestContentType){
	return Reflect.metadata(Annotation.RestRequestType, requestContentType);
}

export function RestResponseType(responseContentType){
	return Reflect.metadata(Annotation.RestResponseType, responseContentType);
}

export function PipeFunction(){
	return Reflect.metadata(Annotation.PipeFunction, Annotation.PipeFunction);
}

export function TemplateFunction(){
	return Reflect.metadata(Annotation.TemplateFunction, Annotation.TemplateFunction);
}