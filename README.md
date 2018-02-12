# react-split-flap-display

A React component that mimics a Split-Flap/Solari display, cos I like Solari boards.

[![NPM](https://img.shields.io/npm/v/react-split-flap-display.svg)](https://www.npmjs.com/package/react-split-flap-display)

## Install

```bash
npm install --save react-split-flap-display
```

or

```bash
yarn add react-split-flap-display
```

This packages has a peer dependency on [`styled-components`](https://github.com/styled-components/styled-components)

## Usage

```jsx
import React, { Component } from 'react';

import SplitFlapDisplay from 'react-split-flap-display';

class Display extends Component {
  render() {
    return <SplitFlapDisplay characterSet={['1', '2', '3', '4', ':']} value="12:34" />;
  }
}
```

## License

MIT © [Robin Yang](https://github.com/robonyong)
