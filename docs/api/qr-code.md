```html
<div id="qr-code"></div>

<script type="text/javascript">
new QRCode(document.getElementById("qr-code"), "https://stacksjs.org");
</script>
```

If you want to customize the QR code, you can pass in an options object:

```html
<div id="qr-code"></div>

<script type="text/javascript">
const options = {
  width: 2,
  height: 100,
  format: 'auto',
  displayValue: true,
  fontOptions: '',
  font: 'monospace',
  text: undefined,
  textAlign: 'center',
  textPosition: 'bottom',
  textMargin: 2,
  fontSize: 20,
  background: '#ffffff',
  lineColor: '#000000',
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  valid() { },
}

var qrCode = new QRCode(document.getElementById("qr-code"), options);
</script>
```

You can also use methods to interact with the QR code:

```ts
qrCode.clear() // clear the code
qrCode.makeCode('https://docs.stacksjs.org') // create another code
```
