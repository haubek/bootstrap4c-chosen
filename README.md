# Bootstrap4C

### chosen

This is a Fork of **alxlit**'s great stylesheet (https://github.com/alxlit/bootstrap-chosen).

The Bootstrap4C Chosen is a simple Bootstrap 4 styled component for the brilliant Harvest Chosen jQuery plugin (https://github.com/harvesthq/chosen). The component change the default bitmap icons into nice SVG and works better with the Bootstrap 4 variables.

See demo here => https://haubek.github.io

### NPM install

```
npm install bootstrap4c-chosen
```

### CSS

```
<link href="path/to/component-chosen.min.css" rel="stylesheet">
```

### HTML5 markup

```
<select id="single" class="form-control form-control-chosen" data-placeholder="Please select...">
  <option></option>
  <option>Option One</option>
  <option>Option Two</option>
  <option>Option Three</option>
</select>
```

```
<select id="multiple" class="form-control form-control-chosen" data-placeholder="Please select..." multiple>
  <option></option>
  <option>Option One</option>
  <option>Option Two</option>
  <option>Option Three</option>
</select>
```

### Javascript

```
$('.form-control-chosen').chosen();
```

