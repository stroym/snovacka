import Attributes from "../base/character/attributes";
import Personal from "../base/character/personal";
import {Penis, Size, Urethra} from "../base/character/appearance/lewd/insertable";
import {Anus, Capacity, Mouth, Vagina} from "../base/character/appearance/lewd/penetrable";
import Appearance, {AppearanceLewd} from "../base/character/appearance/appearance";
import {Breasts, CupSize, Nipples} from "../base/character/appearance/lewd/breasts";
import {Archetype, Name, NonPlayableCharacter} from "../base/character/character";

//TODO we'll see if there's a case in which a character would need some custom implementations, extending would
// probably be the way to go then
export let eliza = new NonPlayableCharacter<AppearanceLewd>(
  new Name("Eliza", "Ko"),
  new Personal(Archetype.FUTA, 34, 192, 77),
  new AppearanceLewd(
    new Breasts(CupSize.D, 3, new Nipples(new Size(0, 0))),
    new Mouth(new Capacity(0, 0, 0, 0)),
    new Anus(new Capacity(0, 0, 0, 0)),
    new Vagina(new Capacity(0, 0, 0, 0)),
    new Penis(0, 0, new Urethra(new Capacity(0, 0, 0, 0)))
  ),
  new Attributes()
);

//character map is good enough for now, but if there's more things, it'll probably have to go to the same map
// maybe a map of maps... but that'd require prefixing the accessors (e.g. eliza... → character.eliza)
export let characters = new Map<string, NonPlayableCharacter<Appearance>>([
  ["eliza", eliza]
]);

export default characters;