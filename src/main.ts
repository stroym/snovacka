import { Scene } from "./base/Scene"

var textArea = document.getElementById('text-area')!;
textArea.addEventListener('click', render);

function render() {

  let bob = new Scene(1)


  document.getElementById('text-area')!.innerHTML = bob.render()

}

function hello(compiler: string) {
  console.log(`Hello from ${compiler}`);
}

hello("TypeScript");