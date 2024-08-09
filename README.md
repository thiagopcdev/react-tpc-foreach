# react-tpc-foreach


A React component that renders each element of collection using a function as child component.

## Installation

```
npm install --save react-tpc-foreach
```

## Usage

```js
<ForEach of={[1, 2, 3, 4, 5]} render={(value, index) => (
	<ListItem>{value}</ListItem>
)} />
```

## API

### Properties

Name | Type     | Default | Description
:--- |:---------| :------ | :----------
of | array    | | A list of items to render.
render | function | | A function that returns a React element for each item in the list. The function is called with two arguments: the item and the index of the item in the list.

## License

MIT
