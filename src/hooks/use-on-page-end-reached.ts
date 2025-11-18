import { useEffect } from "react";

const useOnPageEndReached = (onPageEndReached: () => void) => {
	useEffect(() => {
		const checkIfPageEndReachedOnScroll = () => {
			console.log("checkIfPageEndReachedOnScroll called");
			const { scrollTop, clientHeight, scrollHeight } =
				document.documentElement;

			if (Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 10) {
				onPageEndReached();
			}
		};

		document.addEventListener("scroll", checkIfPageEndReachedOnScroll);

		return () =>
			document.removeEventListener("scroll", checkIfPageEndReachedOnScroll);
	}, [onPageEndReached]);
};

export default useOnPageEndReached;
