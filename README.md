# @artifacter/common
### Common components and utilities for Artifacter

#### What's this? - Intro

This module only contains common components and utilities for Artifacter, but you can use it on your own project/application if you like them, these only depends on **reflect-metadata** at the moment. For now it is very tiny.

#### What's in here? - API

##### StringContainer

Class for containing a string "reference", for example, you can pass an instance of this class through methods and work with the "same" string. Strings are inmutable, so keeping a var back-reference through a stack of methods is impossible, but if you pass this reference and work with the contained string, you can save a lot of additional code if you do a heavy string work.
It also provides basic methods for string manipulation, not all but a few. Feel free to submit pull requests for additional methods you may require.

##### StringHandlerUtil

Class with static util methods for string handling

##### NumberHandlerUtil

Class with static util methods for number handling

##### Annotation

Handles Metadata Decorators accessing keys and also provides an utility static method for retrieval of @RestService metadata information

##### RestMethod

Enum used to identify types of Rest Methods (HTTP), such as POST, GET, PUT, DELETE

##### ContentType

Utility class handling static instances of different ContentTypes used by the @RestService decorator

##### Metadata Decorators (Annotations)

**Annotation** | **Description**|**Usage**
---------------|----------------|-------------
@RestService | Tags a public method as a Rest Service and specifies its metadata (http method, path, content types for request and response) | *Used by @artifacter/worker*
@PipeFunction | Tags a public method as a Pipe Function | *Used by @artifacter/template-engine*
@TemplateFunction | Tags a public method as a Template Function | *Used by @artifacter/template-engine*
