export default responsiveEmbeds;
declare function responsiveEmbeds(
	items: string | HTMLElement | NodeList,
	params?: {
		watch?: boolean | string | HTMLElement;
		wrapClass?: string;
	}
): void;
