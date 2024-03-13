export function thousandsFormat(num: any, fractionDigits?: number) {
	if (!num || isNaN(Number(num))) {
		return num;
	}
	return Number(num).toLocaleString(
		"zh",
		fractionDigits
			? {
					minimumFractionDigits: fractionDigits,
					maximumFractionDigits: fractionDigits,
			  }
			: {}
	);
}
