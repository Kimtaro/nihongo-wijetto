import * as nwi from "./nwInterfaces";
import VocabCard from "./VocabCard";
import * as util from "./Utils"
const {widget} = figma;
const {AutoLayout, Rectangle, Text} = widget;

export default function Result({resultInfo, index}: { resultInfo: nwi.Daum, index: number }) {

    const onResultClick = async (e: WidgetClickEvent, nodeInfo: nwi.Daum) => {
        const node = await figma.createNodeFromJSXAsync(
            <VocabCard nodeInfo={resultInfo}/>
        )
    }
    return <AutoLayout
        name="SearchBar"
        fill="#F5F5F5"
        width="fill-parent"
        cornerRadius={8}
        strokeWidth={1.464}
        overflow="visible"
        spacing={32}
        padding={{
            vertical: 16,
            horizontal: 40,
        }}
        onClick={async (e) => {
            await onResultClick(e, resultInfo)
        }}
        key={index}
    >
        <AutoLayout
            name="kanji-box"
            overflow="visible"
            direction="vertical"
            spacing={8}
            verticalAlignItems="center"
            horizontalAlignItems="center"
        >
            {util.shouldShowReading(resultInfo) &&
            <Text
                fill="#F24E1E"
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Zen Kaku Gothic Antique"
                fontSize={12}
                fontWeight={
                    500
                }
                strokeWidth={
                    1.464
                }
            >
                {util.reading(resultInfo)}
            </Text>
            }
            <Text
                fill="#000"
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Roboto"
                fontSize={32}
                strokeWidth={
                    3.039
                }
            >
                {util.word(resultInfo)}
            </Text>
        </AutoLayout>

        <AutoLayout
            name="definition-box"
            overflow="visible"
            direction="vertical"
            width="fill-parent"
            verticalAlignItems="center"
        >
            <Text
                fill="#909090"
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Inter"
                fontSize={8}
                strokeWidth={
                    1.464
                }
            >
                {resultInfo.senses[0].parts_of_speech.join('; ')}
            </Text>
            <Text
                fill="#0006"
                width="fill-parent"
                verticalAlignText="center"
                fontFamily="Inter"
                fontSize={24}
                fontWeight={500}
                strokeWidth={3.039}
            >
                {resultInfo.senses[0].english_definitions.join('; ')}
            </Text>
        </AutoLayout>

        { resultInfo.is_common &&
            <Rectangle
                name="common-word-signal"
                y={{
                    type: "top-bottom",
                    topOffset: 0,
                    bottomOffset: 0,
                }}
                positioning="absolute"
                fill="#0FA958"
                cornerRadius={{
                    topLeft: 8,
                    topRight: 0,
                    bottomRight: 0,
                    bottomLeft: 8,
                }}
                width={7}
                height={95}
            />
        }
    </AutoLayout>

}
