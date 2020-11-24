import {Character} from "./base/character";
import {pcAlex} from "./pc/pcAlex";
import {npcEliza} from "./npc/npcEliza";
import {selection} from "./base/selection";
import {render, renderAdditive} from "./renderer";

export var textArea = document.getElementById('text-area')!;
textArea.addEventListener('click', init);

export let pc: Character = new pcAlex();
let eliza: Character = new npcEliza();

function init() {
  render("Welcome...")

  textArea.removeEventListener('click', init)
  textArea.addEventListener('click', intro)
}


function intro() {
  textArea.removeEventListener('click', intro)

  render("Hi!")

  let sel = selection.buildOption(1, "prompt1");

  // let cr: crossroads = new crossroads([
  //   selection.buildOption(1, "prompt1"),
  //   selection.buildOption(2, "prompt2"),
  //   selection.buildOption(3, "prompt3")
  // ])


  renderAdditive(sel.render())


//probably use fori so I can get rid of order
//   for (let opt of cr.selections) {
//     renderAdditive(opt.order + ": " + opt.prompt)
//   }

  //get user input
  //pick selection & run function

}
