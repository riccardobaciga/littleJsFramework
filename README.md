# My Little JavaScript Framework 
![](https://avatars.githubusercontent.com/u/6079827?s=400&u=445781b6ddba286d493a23cc8501b6309964d1dc&v=4)


Download all files and look how to use my little framework.

You can download the file `myFrame.js` or link it using the CDN:
[https://cdn.jsdelivr.net/gh/riccardobaciga/littleJsFramework@main/myFrame.js]

# Instruction

## USING valueOf

You can use `valueOf` for tags like `input`, `select`, `div`, `span`, `p`.

### Example

Clicking the button will assign the value `pippo` to `myApp.nome`, and all the elements with `valueOf="nome"` will assume the assigned value.

```html
<script src="https://cdn.jsdelivr.net/gh/riccardobaciga/littleJsFramework@main/myFrame.js"></script>

<div valueOf="nome">Nome</div>
<input type="text" valueOf="nome1" placeholder="Nome" />

<div valueOf="nome">Nome</div>
<input type="text" valueOf="nome2" placeholder="Nome" />
<button onclick="myApp.nome = 'pippo'">nome = Pippo</button>
```
## USING classOf

You can use `classOf` for all dom elements.

### Example

Clicking the button will assign the class `pippo` to `myApp.myClass`, and all the elements with `classOf="myClass"` will assume the assigned class.

```html
<script src="https://cdn.jsdelivr.net/gh/riccardobaciga/littleJsFramework@main/myFrame.js"></script>
<style>
  .red {
    background-color: red;
  }
</style>

<div valueOf="nome" classOf="myClass">Nome</div>
<input type="text" valueOf="nome" placeholder="Nome" class="myClass" />
<button onclick="myApp.myClass = 'red'">class to Red</button>
```

### License
This software is completely free to use. If you use it, please credit the author: 
<b>Riccardo Bacigalupo</b>

<hr>
Enjoy it <br>
Riccardo
