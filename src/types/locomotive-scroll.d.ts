declare module 'locomotive-scroll' {
	interface LocomotiveScrollOptions {
		el: HTMLElement;
		smooth: boolean;
		smoothMobile?: boolean;
		inertia?: number;
	}

	export default class LocomotiveScroll {
		constructor(options: LocomotiveScrollOptions);
		update(): void;
		destroy(): void;
	}
}
