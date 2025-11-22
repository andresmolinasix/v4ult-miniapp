"use client";
// import { SparklesCore } from "@/components/ui/sparkles";
import ConnectButton from "./components/connectButton";
import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect, useState } from "react";

export default function Home() {
	const [isMiniApp, setIsMiniApp] = useState(false);

	useEffect(() => {
		let cancelled = false;
		void (async () => {
			try {
				const inMiniApp = await sdk.isInMiniApp();
				if (!cancelled) {
					setIsMiniApp(inMiniApp);
				}

				// Only signal readiness when running inside a Farcaster client.
				if (inMiniApp) {
					await sdk.actions.ready();
				}
			} catch (error) {
				console.error("Error while initializing Farcaster MiniApp SDK", error);
			}
		})();

		return () => {
			cancelled = true;
		};
	}, []);
	return (
		<div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			{/* <BoxesCore /> */}
			<div className='flex flex-col items-center gap-4'>
				<ConnectButton disabled={!isMiniApp} />
				{!isMiniApp && (
					<p className='text-sm text-gray-600 dark:text-gray-300'>
						Abre esta miniapp desde Farcaster para habilitar la conexión a tu wallet.
					</p>
				)}
			</div>
		</div>
	);
}
