# Kingstinct Utility Library

Collection of reusable code with TypeScript bindings.

Main ideas:
* Add generic pieces of code that are reused in many projects
* Minimal amount of dependencies, where needed try to use light dependencies
* Allow tree for shaking as much as possible

## Install

`yarn add kingstinct`

or

`npm install kingstinct`

## Usage

```javascript
import DateTimeWithOffset from 'kingstinct/graphql/scalars/DateTimeWithOffset'
import useUpdateInterval from 'kingstinct/hooks/useUpdateInterval'
import findAndReplace from 'kingstinct/findAndReplace'

...
```