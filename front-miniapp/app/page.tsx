"use client";
import { BoxesCore } from "@/app/components/ui/background-boxes";
// import { SparklesCore } from "@/components/ui/sparkles";
import ConnectButton from "./components/connectButton";
import { sdk } from "@farcaster/miniapp-sdk";
import { use, useEffect, useState } from "react";
import BalancingForm from "./components/balancingForm";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { FlipWords } from "@/components/ui/flip-words";
import Footer from "./components/footer";

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

	if (!isMiniApp) {
		return (
			<div className='relative overflow-hidden'>
				<div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 overflow-hidden'>
					<div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
				</div>
				<div className='flex min-h-screen items-center justify-center flex-col'>
					<div className='flex flex-col items-center gap-4'>
						<div className='h-[15rem] flex items-center justify-center z-10 select-none flex-col'>
							<DottedGlowBackground
								className='pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100'
								opacity={0.5}
								gap={10}
								radius={1.6}
								colorLightVar='--color-neutral-500'
								glowColorLightVar='--color-neutral-600'
								colorDarkVar='--color-neutral-500'
								glowColorDarkVar='--color-sky-800'
								backgroundOpacity={0}
								speedMin={0.3}
								speedMax={1.6}
								speedScale={1}
							/>
							<TextHoverEffect text='V4ULT' />
						</div>
					</div>
					<div className='text-center max-w-md mx-auto'>
						<ConnectButton disabled={!isMiniApp} />
						<p className='text-sm text-gray-600 dark:text-gray-300 mt-4'>
							Open this MiniApp inside the Farcaster mobile app to connect your wallet.
						</p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<>
			<div className='relative overflow-hidden'>
				<div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 overflow-hidden'>
					<div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
				</div>
				<div className='flex min-h-screen items-center justify-center '>
					<div className='flex flex-col items-center gap-4'>
						<div className='h-[15rem] flex items-center justify-center z-10 select-none flex-col'>
							<DottedGlowBackground
								className='pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100'
								opacity={0.5}
								gap={10}
								radius={1.6}
								colorLightVar='--color-neutral-500'
								glowColorLightVar='--color-neutral-600'
								colorDarkVar='--color-neutral-500'
								glowColorDarkVar='--color-sky-800'
								backgroundOpacity={0}
								speedMin={0.3}
								speedMax={1.6}
								speedScale={1}
							/>
							<TextHoverEffect text='V4ULT' />

							<div className='text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center'>
								Manage <FlipWords words={["dynamic", "profitable", "low-risk"]} />
								liquidity with a single deposit
							</div>
						</div>

						{/* <ConnectButton disabled={!isMiniApp} />
						{!isMiniApp && (
							<p className='text-sm text-gray-600 dark:text-gray-300'>
								Open this MiniApp inside the Farcaster mobile app to connect your wallet.
							</p>
						)} */}
						<BalancingForm />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
