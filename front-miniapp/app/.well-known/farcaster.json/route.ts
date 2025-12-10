import { NextResponse } from "next/server";

const requiredEnv = {
	accountHeader: process.env.FARCASTER_ACCOUNT_ASSOCIATION_HEADER,
	accountPayload: process.env.FARCASTER_ACCOUNT_ASSOCIATION_PAYLOAD,
	accountSignature: process.env.FARCASTER_ACCOUNT_ASSOCIATION_SIGNATURE,
	name: process.env.FARCASTER_MINIAPP_NAME,
	homeUrl: process.env.FARCASTER_MINIAPP_HOME_URL,
	iconUrl: process.env.FARCASTER_MINIAPP_ICON_URL,
	imageUrl: process.env.FARCASTER_MINIAPP_IMAGE_URL,
	buttonTitle: process.env.FARCASTER_MINIAPP_BUTTON_TITLE,
};

export async function GET() {
	const missing = Object.entries(requiredEnv)
		.filter(([, value]) => !value)
		.map(([key]) => key);

	if (missing.length > 0) {
		return NextResponse.json(
			{
				error: "Missing required environment variables",
				missing,
			},
			{ status: 500 }
		);
	}

	const manifest = {
		name: requiredEnv.name,
		description: process.env.FARCASTER_MINIAPP_DESCRIPTION ?? "V4ULT MiniApp",
		url: requiredEnv.homeUrl,
		iconUrl: requiredEnv.iconUrl,
		imageUrl: requiredEnv.imageUrl,
		buttonTitle: requiredEnv.buttonTitle,
		splashImageUrl: process.env.FARCASTER_MINIAPP_SPLASH_IMAGE_URL,
		splashBackgroundColor: process.env.FARCASTER_MINIAPP_SPLASH_BACKGROUND_COLOR,
		webhookUrl: process.env.FARCASTER_MINIAPP_WEBHOOK_URL,
		canonicalDomain: process.env.FARCASTER_MINIAPP_CANONICAL_DOMAIN,
		accountAssociation: {
			header: requiredEnv.accountHeader,
			payload: requiredEnv.accountPayload,
			signature: requiredEnv.accountSignature,
		},
	};

	// Drop undefined/empty optional fields
	const cleaned = Object.fromEntries(
		Object.entries(manifest).filter(([, value]) => value !== undefined && value !== null && value !== "")
	);

	return NextResponse.json(cleaned);
}
