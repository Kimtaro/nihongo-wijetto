import * as nwi from "./nwInterfaces";
import VocabCard from "./VocabCard";

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
        cornerRadius={8}
        strokeWidth={1.464}
        overflow="visible"
        spacing={32}
        padding={{
            vertical: 16,
            horizontal: 40,
        }}
        width={512}
        horizontalAlignItems="center"
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
                {resultInfo.japanese[0].reading}
            </Text>
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
                {resultInfo.slug}
            </Text>
        </AutoLayout>
        <AutoLayout
            name="Frame 7"
            overflow="visible"
            direction="vertical"
            spacing={8}
            width="fill-parent"
            height="fill-parent"
            verticalAlignItems="center"
        >
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
                    verticalAlignText="center"
                    horizontalAlignText="center"
                    fontFamily="Roboto"
                    fontSize={
                        24
                    }
                    strokeWidth={
                        3.039
                    }
                >
                    {resultInfo.senses[0].english_definitions.join('; ')}
                </Text>
            </AutoLayout>
        </AutoLayout>
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
    </AutoLayout>

}