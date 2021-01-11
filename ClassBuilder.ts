export class ClassBuilder {
    className: string = "";
    
    properties: ClassProperty[] = [];

    addProperty(property: ClassProperty) {
        this.properties.push(property);
    } 
}

export class ClassProperty {
    
    public type: string;
    
    public name: string;
    
    public decorator: string;

    constructor(type: string, name: string, decorator: string) {
        this.type = type;
        this.name = name;
        this.decorator = decorator;
    }
}
