import useArticleReadingProgress from "@/hooks/use-article-reading-progress";
import { Progress } from "./ui/progress";

const ReadingProgress = () => {
	const progress = useArticleReadingProgress();

	return (
		<div className="relative">
			<Progress value={progress} className="h-6" />
			<span
				className={`absolute inset-0 flex items-center justify-center font-medium text-foreground ${progress >= 49 ? "text-white" : "text-primary"}`}
			>
				{Math.round(progress)}%
			</span>
		</div>
	);
};

export default ReadingProgress;
