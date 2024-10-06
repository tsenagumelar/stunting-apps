import Realm from "realm";
import { createRealmContext } from "@realm/react";

import { Stunting } from "./schema";

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Stunting],
};

// Create a realm context
const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);

export { RealmProvider, useRealm, useObject, useQuery };
