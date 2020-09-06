import { Deserializable } from 'src/app/interfaces/deserializable'

export class EmojiModel implements Deserializable {
    
    value: string
    emoji: string
    emoji_style: any

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    
}
