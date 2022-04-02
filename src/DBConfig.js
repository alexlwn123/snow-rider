export const DBConfig = {
  name: "TrackDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "tracks",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "trackName", keypath: "trackName", options: { unique: false } },
        { name: "creator", keypath: "creator", options: { unique: false } },
        { name: "plays", keypath: "plays", options: { unique: false } },
        { name: "published", keypath: "published", options: { unique: false } },
        { name: "lines", keypath: "lines", options: { unique: false } },
      ],
    },
    {
      store: "autosave",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "published", keypath: "published", options: { unique: false } },
        { name: "lines", keypath: "lines", options: { unique: false } },
      ],
    },
  ],
};
