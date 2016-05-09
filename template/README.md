# <%= name %>
> A <%= name %> component for Vue.js.

## Demo
http://element-component.github.io/<%= name %>

## Installation
```shell
npm i <%= name %> -D
```

## Usage
```javascript
import Vue from 'vue'
import <%= ComponentName %> from '<%= name %>'
import 'element-theme-default'

Vue.use(<%= ComponentName %>)
```

or

```javascript
import Vue from 'vue'
import { <%= ComponentName %> } from '<%= name %>'

Vue.component('<%= name %>', <%= ComponentName %>)
```


## Options

|     name    | description |     type    |   default   |
|-------------|-------------|-------------|-------------|
|             |             |             |             |

## Development
```shell
make dev

## test
make test

## build
make build
```

# License
[MIT](https://opensource.org/licenses/MIT)
