import * as nwi from "./nwInterfaces";
import Result from "./Result";

const {widget} = figma;
const {AutoLayout, Rectangle, Text, useSyncedState} = widget;

type ResultsListProps = {
    results: nwi.Daum[]
}

export default function ResultsList({results}: ResultsListProps) {

    return <AutoLayout
        name="ScrollingResult"
        direction="vertical"
        padding={{
            vertical: 24,
            horizontal: 24,
        }}
        width="fill-parent"
        horizontalAlignItems="center"
    >
        <AutoLayout
            name="Frame 4"
            overflow="scroll"
            direction="vertical"
            width="fill-parent"
            spacing={16}
        >
            {results.map((result, index) => {
                return <Result resultInfo={result} index={index}/>
            })}
        </AutoLayout>
    </AutoLayout>
}