"use client";
import { useMemo } from "react";
import { useAccount, useConnect, useConnections } from "wagmi";

type ConnectButtonProps = {
	disabled?: boolean;
};

export default function ConnectButton({ disabled }: ConnectButtonProps) {
	const { isConnected, address } = useAccount();
	const { connect, connectors, isPending, error } = useConnect();
	const connections = useConnections();

	const connector = useMemo(() => connectors.find((item) => item.id === "farcaster" || item.type === "farcasterMiniApp"), [connectors]);

	const farcasterConnection = useMemo(
		() => connections.find((item) => item.connector.id === connector?.id || item.connector.type === "farcasterMiniApp"),
		[connections, connector?.id, connector?.type]
	);

	const connectedAddress = address ?? farcasterConnection?.accounts?.[0];

	if (isConnected || farcasterConnection) return <p>Connected: {connectedAddress}</p>;

	return (
		<div className='flex flex-col items-center gap-2'>
			<button
				onClick={() => connector && !farcasterConnection && connect({ connector })}
				disabled={!connector || disabled || isPending || !!farcasterConnection}
				className='rounded-full bg-purple-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-purple-400'>
				{isPending ? "Conectando..." : "Conectar Wallet"}
			</button>
			{!connector && <p className='text-sm text-red-500'>No se encontró el conector de Farcaster.</p>}
			{error && <p className='text-sm text-red-500'>{error.message}</p>}
		</div>
	);
}
