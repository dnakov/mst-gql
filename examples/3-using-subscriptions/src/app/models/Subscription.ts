/* This is a mst-sql generated file */
import { types } from "mobx-state-tree"
import { MSTGQLObject } from "mst-gql"


/* #region type-imports */
import { Message } from "./index"
/* #endregion */

/* #region type-def */

/**
 * Subscription
 */
const Subscription = MSTGQLObject
  .named('Subscription')
  .props({
    newMessages: types.maybe(types.reference(Message)),
  })
/* #endregion */

  .actions(self => ({
    // this is just an auto-generated example action. 
    // Feel free to add your own actions, props, views etc to the model. 
    // Any code outside the '#region mst-gql-*'  regions will be preserved
    log() {
      console.log(JSON.stringify(self))
    }
  }))

export { Subscription }