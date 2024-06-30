import { Gender } from 'src/app/enums/gender.enum';
import { Deserializable } from 'src/app/interfaces/deserializable';
import { EmojiModel } from '../emoji-value/emoji.model';
import { Pronouns } from 'src/app/enums/pronouns.enum';

export class BasicInfoModel  implements Deserializable {
    
    "image": string
    "name": {
        first_name: string
        middle_name: string
        last_name: string
        order: Array<string>
    }
    "gender": EmojiModel
    "pronouns": EmojiModel
    "dob": EmojiModel

    deserialize(input: any): this {
        Object.assign(this, input);

        if(input.gender){
            this.gender = new EmojiModel().deserialize(input.gender);
            this.gender.value = Gender[input.gender.value];
        }

        if(input.pronouns){
            this.pronouns = new EmojiModel().deserialize(input.pronouns);
            this.pronouns.value = Pronouns[input.pronouns.value];
        }

        
        return this;
    }
}
