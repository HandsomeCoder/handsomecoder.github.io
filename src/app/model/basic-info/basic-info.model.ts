import { Gender } from 'src/app/enums/gender.enum'
import { Deserializable } from 'src/app/interfaces/deserializable'
import * as moment from 'moment'
import { EmojiModel } from '../emoji-value/emoji.model'

export class BasicInfoModel  implements Deserializable {
    
    "image": string
    "name": {
        first_name: string
        middle_name: string
        last_name: string
        order: Array<string>
    }
    "gender": EmojiModel
    "dob": EmojiModel

    deserialize(input: any): this {
        Object.assign(this, input);

        this.gender = new EmojiModel().deserialize(input.gender);
        this.dob = new EmojiModel().deserialize(input.dob);

        this.gender.value = Gender[input.gender.value];
        this.dob.value = moment(input.dob.value).format('LL');
        return this;
    }
}
