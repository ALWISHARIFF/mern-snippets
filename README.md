**_If some snippets do not show up, add the following to your settings file_**

```json
    "configurationDefaults": {
        "files.associations": {
            "*.ejs": "html"
        },
        "emmet.includeLanguages": {
            "ejs": "html"
        }
    }
```

or you can dowinlode mern-snippets-0.0.1.vsix frome :
https://github.com/moh2medkhaled/mern-snippets/blob/master/mern-snippets-0.0.1.vsix

This problem occurs because vs code deletes this command frome package.json.
This problem may appear when using EJS - HBS - MongoDB snippets

# Express Snippets

| Prefix         | Method                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app.get`      | `Express GET request`                                                                                                                                                                 |
| `app.post`     | ` Express POST request`                                                                                                                                                               |
| `app.put `     | `Express PUT request `                                                                                                                                                                |
| `app.delete`   | `Express DELETE request `                                                                                                                                                             |
| `app.all`      | `This method is like the standard app.METHOD() methods, except it matches all HTTP verbs.`                                                                                            |
| `app.disable`  | `Sets the Boolean setting name to false, where name is one of the properties from the app settings table. `                                                                           |
| `app.disabled` | `Returns true if the Boolean setting name is disabled (false), where name is one of the properties from the app settings table.`                                                      |
| `app.set`      | `Assigns setting name to value, where name is one of the properties from the app settings table."`                                                                                    |
| `app.use`      | `Mounts the specified middleware function or functions at the specified path. If path is not specified. `                                                                             |
| `app.listen `  | `Binds and listens for connections on the specified host and port. This method is identical to Node's http.Server.listen().`                                                          |
| `app.render`   | `Returns the rendered HTML of a view via the callback function. It accepts an optional parameter that is an object containing local variables for the view.`                          |
| `app.param `   | `Add callback triggers to route parameters, where name is the name of the parameter or an array of them, and callback is the callback function.`                                      |
| `app.patch`    | `Routes HTTP PATCH request to the specifed path with the specified callback functions.`                                                                                               |
| `app.route`    | `Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names (and thus typo errors).` |
| `res.send`     | `Express RESPONSE object`                                                                                                                                                             |

## express function

| Prefix                     | Method                                     |
| -------------------------- | ------------------------------------------ |
| `jwt.creat`                | `to creat jsonwebtoken`                    |
| `jwt.verify`               | `to verify jsonwebtoken`                   |
| `json.successResponse`     | `api json success Response`                |
| `json.errorResponse`       | `api json Error Response`                  |
| `error-class`              | `Error handler class helper with example ` |
| `nodeMailer`               | `node mailer for sending email massage`    |
| `session-with-mongo-store` | `session with mongoDB store `              |
| `multer.mi`                | `node mailer for sending email massage "`  |
| `multer.si`                | `node mailer for sending singlr image `    |
| `joiV`                     | `joi Validation`                           |
| `auth-mid`                 | `To confirm whether it is login or not`    |
| `e-controller`             | `express controller`                       |

//////////////////////////////////

### react Snippets

|  Prefix | Method                                              |
| ------: | --------------------------------------------------- |
|  `imp→` | `import moduleName from 'module'`                   |
|  `imn→` | `import 'module'`                                   |
|  `imd→` | `import { destructuredModule } from 'module'`       |
|  `ime→` | `import * as alias from 'module'`                   |
|  `ima→` | `import { originalName as aliasName} from 'module'` |
|  `exp→` | `export default moduleName`                         |
|  `exd→` | `export { destructuredModule } from 'module'`       |
|  `exa→` | `export { originalName as aliasName} from 'module'` |
|  `enf→` | `export const functionName = (params) => { }`       |
|  `edf→` | `export default (params) => { }`                    |
| `ednf→` | `export default function functionName(params) { }`  |
|  `met→` | `methodName = (params) => { }`                      |
|  `fre→` | `arrayName.forEach(element => { }`                  |
|  `fof→` | `for(let itemName of objectName { }`                |
|  `fin→` | `for(let itemName in objectName { }`                |
| `anfn→` | `(params) => { }`                                   |
|  `nfn→` | `const functionName = (params) => { }`              |
|  `dob→` | `const {propName} = objectToDescruct`               |
|  `dar→` | `const [propName] = arrayToDescruct`                |
|  `sti→` | `setInterval(() => { }, intervalTime`               |
|  `sto→` | `setTimeout(() => { }, delayTime`                   |
| `prom→` | `return new Promise((resolve, reject) => { }`       |
| `cmmb→` | `comment block`                                     |
|   `cp→` | `const { } = this.props`                            |
|   `cs→` | `const { } = this.state`                            |

### React

|      Prefix | Method                                                                              |
| ----------: | ----------------------------------------------------------------------------------- |
|      `imr→` | `import React from 'react'`                                                         |
|     `imrd→` | `import ReactDOM from 'react-dom'`                                                  |
|     `imrc→` | `import React, { Component } from 'react'`                                          |
|    `imrcp→` | `import React, { Component } from 'react' & import PropTypes from 'prop-types'`     |
|    `imrpc→` | `import React, { PureComponent } from 'react'`                                      |
|   `imrpcp→` | `import React, { PureComponent } from 'react' & import PropTypes from 'prop-types'` |
|     `imrm→` | `import React, { memo } from 'react'`                                               |
|    `imrmp→` | `import React, { memo } from 'react' & import PropTypes from 'prop-types'`          |
|     `impt→` | `import PropTypes from 'prop-types'`                                                |
|     `imrr→` | `import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'`         |
|     `imbr→` | `import { BrowserRouter as Router} from 'react-router-dom'`                         |
|    `imbrc→` | `import { Route, Switch, NavLink, Link } from react-router-dom'`                    |
|    `imbrr→` | `import { Route } from 'react-router-dom'`                                          |
|    `imbrs→` | `import { Switch } from 'react-router-dom'`                                         |
|    `imbrl→` | `import { Link } from 'react-router-dom'`                                           |
|   `imbrnl→` | `import { NavLink } from 'react-router-dom'`                                        |
|     `imrs→` | `import React, { useState } from 'react'`                                           |
|    `imrse→` | `import React, { useState, useEffect } from 'react'`                                |
|    `redux→` | `import { connect } from 'react-redux'`                                             |
|   `rconst→` | `constructor(props) with this.state`                                                |
|    `rconc→` | `constructor(props, context) with this.state`                                       |
|      `est→` | `this.state = { }`                                                                  |
|      `cwm→` | `componentWillMount = () => { }` DEPRECATED!!!                                      |
|      `cdm→` | `componentDidMount = () => { }`                                                     |
|      `cwr→` | `componentWillReceiveProps = (nextProps) => { }` DEPRECATED!!!                      |
|      `scu→` | `shouldComponentUpdate = (nextProps, nextState) => { }`                             |
|     `cwup→` | `componentWillUpdate = (nextProps, nextState) => { }` DEPRECATED!!!                 |
|     `cdup→` | `componentDidUpdate = (prevProps, prevState) => { }`                                |
|     `cwun→` | `componentWillUnmount = () => { }`                                                  |
|    `gdsfp→` | `static getDerivedStateFromProps(nextProps, prevState) { }`                         |
|     `gsbu→` | `getSnapshotBeforeUpdate = (prevProps, prevState) => { }`                           |
|      `ren→` | `render() { return( ) }`                                                            |
|      `sst→` | `this.setState({ })`                                                                |
|      `ssf→` | `this.setState((state, props) => return { })`                                       |
|    `props→` | `this.props.propName`                                                               |
|    `state→` | `this.state.stateName`                                                              |
| `rcontext→` | `const ${1:contextName} = React.createContext()`                                    |
|     `cref→` | `this.${1:refName}Ref = React.createRef()`                                          |
|     `fref→` | `const ref = React.createRef()`                                                     |
|      `bnd→` | `this.methodName = this.methodName.bind(this)`                                      |

### React Hooks

- All hooks from [official docs](https://reactjs.org/docs/hooks-reference.html) are added with hook name prefix.

| Prefix | Method                              |
| -----: | ----------------------------------- |
| `rch→` | `import { $1 } from 'react-native'` |

### React Native

|     Prefix | Method                                 |
| ---------: | -------------------------------------- |
|    `imrn→` | `import { $1 } from 'react-native'`    |
| `rnstyle→` | `const styles = StyleSheet.create({})` |

### Redux

|       Prefix | Method                    |
| -----------: | ------------------------- |
|  `rxaction→` | `redux action template`   |
|   `rxconst→` | `export const $1 = '$1'`  |
| `rxreducer→` | `redux reducer template`  |
|  `rxselect→` | `redux selector template` |
|   `rxslice→` | `redux slice template`    |

### PropTypes

|    Prefix | Method                                   |
| --------: | ---------------------------------------- |
|    `pta→` | `PropTypes.array`                        |
|   `ptar→` | `PropTypes.array.isRequired`             |
|    `ptb→` | `PropTypes.bool`                         |
|   `ptbr→` | `PropTypes.bool.isRequired`              |
|    `ptf→` | `PropTypes.func`                         |
|   `ptfr→` | `PropTypes.func.isRequired`              |
|    `ptn→` | `PropTypes.number`                       |
|   `ptnr→` | `PropTypes.number.isRequired`            |
|    `pto→` | `PropTypes.object`                       |
|   `ptor→` | `PropTypes.object.isRequired`            |
|    `pts→` | `PropTypes.string`                       |
|   `ptsr→` | `PropTypes.string.isRequired`            |
|   `ptnd→` | `PropTypes.node`                         |
|  `ptndr→` | `PropTypes.node.isRequired`              |
|   `ptel→` | `PropTypes.element`                      |
|  `ptelr→` | `PropTypes.element.isRequired`           |
|    `pti→` | `PropTypes.instanceOf(name)`             |
|   `ptir→` | `PropTypes.instanceOf(name).isRequired`  |
|    `pte→` | `PropTypes.oneOf([name])`                |
|   `pter→` | `PropTypes.oneOf([name]).isRequired`     |
|   `ptet→` | `PropTypes.oneOfType([name])`            |
|  `ptetr→` | `PropTypes.oneOfType([name]).isRequired` |
|   `ptao→` | `PropTypes.arrayOf(name)`                |
|  `ptaor→` | `PropTypes.arrayOf(name).isRequired`     |
|   `ptoo→` | `PropTypes.objectOf(name)`               |
|  `ptoor→` | `PropTypes.objectOf(name).isRequired`    |
|   `ptsh→` | `PropTypes.shape({ })`                   |
|  `ptshr→` | `PropTypes.shape({ }).isRequired`        |
|  `ptany→` | `PropTypes.any`                          |
| `ptypes→` | `static propTypes = {}`                  |

### GraphQL

|     Prefix | Method                                                  |
| ---------: | ------------------------------------------------------- |
| `graphql→` | `import { compose, graphql } from react-apollo'`        |
| `expgql->` | `export default compose(graphql($1, { name: $2 }))($3)` |

### Console

| Prefix | Method                                                       |
| ------ | ------------------------------------------------------------ |
| `clg→` | `console.log(object)`                                        |
| `clo→` | `` console.log(`object`, object) ``                          |
| `clj→` | `` console.log(`object`, JSON.stringify(object, null, 2)) `` |
| `ctm→` | `` console.time(`timeId`) ``                                 |
| `cte→` | `` console.timeEnd(`timeId`) ``                              |
| `cas→` | `console.assert(expression,object)`                          |
| `ccl→` | `console.clear()`                                            |
| `cco→` | `console.count(label)`                                       |
| `cdi→` | `console.dir`                                                |
| `cer→` | `console.error(object)`                                      |
| `cgr→` | `console.group(label)`                                       |
| `cge→` | `console.groupEnd()`                                         |
| `ctr→` | `console.trace(object)`                                      |
| `cwa→` | `console.warn`                                               |
| `cin→` | `console.info`                                               |

///////////////////////

# mongoDB Snippets

|       **Type/No.**       |  **Snippet**   |       **Stands For**        |          **Function**          |
| :----------------------: | :------------: | :-------------------------: | :----------------------------: |
|       **Generic:**       |                |                             |                                |
|            1.            |   **!mdbc**    |       MongoDB Connect       | MongoDB connect on port 27017  |
|            2.            |  **!mdbgum**   | MongoDB Generate User Model |  Generate typical user model   |
|            3.            |   **!mdba**    |      MongoDB Aggregate      |    _Model.aggregate_ query     |
|            4.            |   **!mdbcd**   |   MongoDB CountDocuments    |  _Model.countDocuments_ query  |
|            5.            |   **!mdbmr**   |      MongoDB MapReduce      |    _Model.mapReduce_ query     |
|            6.            |   **!mdbp**    |      MongoDB Populate       |     _Model.populate_ query     |
|            7.            |   **!mdbbw**   |      MongoDB BulkWrite      |    _Model.bulkWrite_ query     |
|    **Create/Insert:**    |                |                             |                                |
|            1.            |   **!mdbcr**   |       MongoDB Create        |      _Model.create_ query      |
|            2.            |   **!mdbcc**   |  MongoDB CreateCollection   | _Model.createCollection_ query |
|            3.            |   **!mdbim**   |     MongoDB InsertMany      |    _Model.insertMany_ query    |
|        **Find:**         |                |                             |                                |
|            1.            |   **!mdbf**    |        MongoDB Find         |       _Model.find_ query       |
|            2.            |   **!mdbfo**   |       MongoDB FindOne       |     _Model.findOne_ query      |
|            3.            |  **!mdbfbi**   |      MongoDB FindById       |     _Model.findById_ query     |
|       **Replace:**       |                |                             |                                |
|            1.            |   **!mdbro**   |     MongoDB ReplaceOne      |    _Model.replaceOne_ query    |
|       **Update:**        |                |                             |                                |
|            1.            |  **!mdbfoau**  |  MongoDB FindOneAndUpdate   | _Model.findOneAndUpdate_ query |
|            2.            |   **!mdbuo**   |      MongoDB UpdateOne      |    _Model.updateOne_ query     |
|            3.            |   **!mdbum**   |     MongoDB UpdateMany      |    _Model.updateMany_ query    |
|       **Delete:**        |                |                             |                                |
|            1.            |  **!mdbfoad**  |  MongoDB FindOneAndDelete   | _Model.findOneAndDelete_ query |
|            2.            |   **!mdbdo**   |      MongoDB DeleteOne      |    _Model.deleteOne_ query     |
|            3.            |   **!mdbdm**   |     MongoDB DeleteMany      |    _Model.deleteMany_ query    |
| **Methods and Statics:** |                |                             |                                |
|            1.            | **!mdbmethod** |       MongoDB Methods       |   _schema.methods.function_    |
|            2.            | **!mdbstatic** |       MongoDB Statics       |   _schema.statics.function_    |

# jest snipets

- `jest-suite`, adds a test suite
- `jest-test`, adds a test
- `jest-test-expect`, adds a test with an expect
- `jest-expect`, adds an expect, using `toBe()`
- `jest-expect-to-equal`, adds expect, using `toEqual()`
- `jest-test-expect-to-equal`, adds a test with an expect, using `toEqual()`
- `jest-expect-to-throw`, adds an expect, using `toThrow()`
- `jest-test-expect-to-throw`, adds a test with an expect, using `toThrow()`,
- `jest-test-beforeAll`, adds a `beforeAll()`, this method runs before all tests
- `jest-test-afterAll`, adds a `afterAll()`, this method runs after all tests
- `supertest-init`, adds the initial imports for supertest and the app you are about to test. I assume the app you are about to test looks something like this:

- `supertest-beforeall`, configures supertest to use the app instance, this is a needed step to initialize supertest
- `supertest-aftereall`, ensures the web app closes down after the test run, this is a needed step.
- `supertest-testget`, an example of supertest testing a GET route
- `supertest-testgetwithparam`, an example of supertest testing a GET route with a route parameter
- `supertest-testpost`, an example of supertest testing a POST route with a payload

# EJS Snippets

→ Denotes the `TAB` key.

| Snippet→   | Alternate | Output                                                                                                  |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------- |
| `ejs→`     | `<%`      | `<% %>` - No output tag                                                                                 |
| `ejsout→`  | `<%=`     | `<%= %>` - Outputs HTML value                                                                           |
| `ejsesc→`  | `<%-`     | `<%- %>` - Outputs unescaped                                                                            |
| `ejscom→`  | `<%#`     | `<%# %>` - Comment tag                                                                                  |
| `ejslit→`  | `<%%`     | `<%% %>` - Outputs Literal <%                                                                           |
| `ejsinc→`  | `<%`      | `include` statement                                                                                     |
| `ejsfor→`  | `<%`      | `for` Javascript Loop                                                                                   |
| `ejseach→` | `<%`      | `forEach` Javascript Loop                                                                               |
| `ejsif→`   | `<%`      | `if` Statement with condition                                                                           |
| `ejselif→` | `<%`      | `else if` Statement - _Middle section only._ Assumes you have already written the first `if` statement. |
| `ejselse→` | `<%`      | `else` Statement - _Middle section only._ Assumes you have already written the first `if` statement.    |

## hbs Snippets

|      Prefix | Method                   |
| ----------: | ------------------------ |
|      `hbs→` | `simple hbs syntax`      |
|      `hif→` | `if condition`           |
|    `helif→` | `if else condition`      |
|    `heach→` | `each method`            |
|     `hpar→` | `partial method`         |
|      `hun→` | `unless method`          |
| `hcusfunc→` | `Custom Helper function` |
|     `hlog→` | `Hbs logger helper`      |
|  `hlookup→` | `Hbs lookup helper`      |
|      `hwi→` | `with condition`         |
