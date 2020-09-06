import { Deserializable } from 'src/app/interfaces/deserializable'


export class Websites  implements Deserializable {

    name: string
    labelKey: string
    data:Array<any>

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
