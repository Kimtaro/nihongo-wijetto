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
            horizontal: 0,
        }}
        width={550.62}
        horizontalAlignItems="center"
    >
        <AutoLayout
            name="Frame 4"
            overflow="scroll"
            direction="vertical"
            spacing={16}
        >
            {results.map((result, index) => {
                return <Result resultInfo={result} index={index}/>
            })}
        </AutoLayout>
    </AutoLayout>
}