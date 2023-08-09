import * as nwi from "./nwInterfaces";
const {widget} = figma;
const {AutoLayout, Rectangle, Text, useSyncedState} = widget;


export default function ResultsList() {

    return <AutoLayout
        name="scrolling result"
        x={18}
        y={148}
        direction="vertical"
        padding={{
            vertical: 24,
            horizontal: 0,
        }}
        height={208}
        horizontalAlignItems="center"
    >
        <AutoLayout
            name="Frame 4"
            overflow="scroll"
            direction="vertical"
            spacing={16}
        >


        </AutoLayout>
    </AutoLayout>
}