import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { celo, celoAlfajores } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";
import { farcasterMiniApp as miniAppConnector } from "@farcaster/miniapp-wagmi-connector";

// Project ID is used by WalletConnect-compatible connectors.
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
	throw new Error("Project ID is not defined");
}

export const config = createConfig({
	chains: [celoAlfajores, celo],
	transports: {
		[celoAlfajores.id]: http(),
		[celo.id]: http(),
	},
	connectors: [
		miniAppConnector(),
		injected({ shimDisconnect: true }),
		walletConnect({
			projectId,
			metadata: {
				name: "V4ULT Mini App",
				description: "Manage and balance your V4ULT assets",
				url: "https://localhost",
				icons: ["https://avatars.githubusercontent.com/u/179229932"],
			},
		}),
		coinbaseWallet({
			appName: "V4ULT Mini App",
		}),
	],
	storage: createStorage({
		storage: cookieStorage,
	}),
	ssr: true,
});
