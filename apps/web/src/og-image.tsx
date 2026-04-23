type AgentData = {
	name: string;
	image: string;
	type: string;
	_id: string;
	isPublic?: boolean;
};

// TODO: Implement convertWebPToPNG()
async function convertWebPToPNG(imageUrl: string): Promise<string | null> {
	return null;
}

// TODO: Implement convertLogoToPNG()
async function convertLogoToPNG(): Promise<string | null> {
	return null;
}

// TODO: Implement generateOGImage(agent: AgentData)
async function generateOGImage(agent: AgentData) {
	return new Response("Not Implemented", { status: 501 });
}

// TODO: Implement generateNotFoundImage()
async function generateNotFoundImage() {
	return new Response("Not Implemented", { status: 501 });
}
