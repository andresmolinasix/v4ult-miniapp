// Minimal stub for @react-native-async-storage/async-storage to satisfy web builds.
const AsyncStorage = {
	getItem: async (_key: string) => null,
	setItem: async (_key: string, _value: string) => {},
	removeItem: async (_key: string) => {},
};

export default AsyncStorage;
