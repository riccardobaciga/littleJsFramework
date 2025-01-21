# My Little JavaScript Framework

Download all files and learn how to use my little framework.

You can download the file `myFrame.js` or link it using the CDN:
[https://cdn.jsdelivr.net/gh/riccardobaciga/littleJsFramework@main/myFrame.js](https://cdn.jsdelivr.net/gh/riccardobaciga/littleJsFramework@main/myFrame.js)

## USING valueOf

You can use `valueOf` for tags like `input`, `select`, `div`, `span`, `p`.

### Example for DIV

Clicking the button will assign the value `pippo` to `myApp.nome`, and all the elements with `valueOf="nome"` will assume the assigned value.

```html
<div valueOf="nome">Nome</div>
<input type="text" valueOf="nome" placeholder="Nome" />
<button onclick="myApp.nome = 'pippo'">nome = Pippo</button>

<div valueOf="nome">Nome</div>
<input type="text" valueOf="nome" placeholder="Nome" />
<button onclick="myApp.nome = 'pippo'">nome = Pippo</button>
```
you can use _(ele) to select dom elements <br>
<hr>
Enjoy it <br>
Riccardo

