import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const requiredEnvVars = [
	"FARCASTER_ACCOUNT_ASSOCIATION_HEADER",
	"FARCASTER_ACCOUNT_ASSOCIATION_PAYLOAD",
	"FARCASTER_ACCOUNT_ASSOCIATION_SIGNATURE",
	"FARCASTER_MINIAPP_NAME",
	"FARCASTER_MINIAPP_HOME_URL",
	"FARCASTER_MINIAPP_ICON_URL",
	"FARCASTER_MINIAPP_IMAGE_URL",
	"FARCASTER_MINIAPP_BUTTON_TITLE",
] as const;

export async function GET() {
	const missing = requiredEnvVars.filter((key) => !process.env[key]);

	if (missing.length) {
		return NextResponse.json(
			{
				error: "Faltan variables de entorno para generar /.well-known/farcaster.json",
				missing,
			},
			{ status: 500 },
		);
	}

	const manifest = {
		accountAssociation: {
			header: process.env.FARCASTER_ACCOUNT_ASSOCIATION_HEADER as string,
			payload: process.env.FARCASTER_ACCOUNT_ASSOCIATION_PAYLOAD as string,
			signature: process.env.FARCASTER_ACCOUNT_ASSOCIATION_SIGNATURE as string,
		},
		miniapp: {
			version: "1" as const,
			name: process.env.FARCASTER_MINIAPP_NAME as string,
			homeUrl: process.env.FARCASTER_MINIAPP_HOME_URL as string,
			iconUrl: process.env.FARCASTER_MINIAPP_ICON_URL as string,
			imageUrl: process.env.FARCASTER_MINIAPP_IMAGE_URL as string,
			buttonTitle: process.env.FARCASTER_MINIAPP_BUTTON_TITLE as string,
			splashImageUrl: process.env.FARCASTER_MINIAPP_SPLASH_IMAGE_URL,
			splashBackgroundColor: process.env.FARCASTER_MINIAPP_SPLASH_BACKGROUND_COLOR,
			webhookUrl: process.env.FARCASTER_MINIAPP_WEBHOOK_URL,
			canonicalDomain: process.env.FARCASTER_MINIAPP_CANONICAL_DOMAIN,
		},
	};

	return NextResponse.json(manifest, {
		headers: {
			"Cache-Control": "public, max-age=60",
		},
	});
}
