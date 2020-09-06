import { Deserializable } from 'src/app/interfaces/deserializable'
import { Websites } from './websites.model';
import { EmojiModel } from '../emoji-value/emoji.model';


export class ContactInfoModel  implements Deserializable {
    
    phone_no: EmojiModel
    email_id: EmojiModel
    websites: Array<Websites>

    deserialize(input: any): this {
        Object.assign(this, input);
        this.phone_no = new EmojiModel().deserialize(input.phone_no)
        this.email_id = new EmojiModel().deserialize(input.email_id)
        return this;
    }
}
