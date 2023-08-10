import * as nwi from "./nwInterfaces";
import VocabCard from "./VocabCard";
import * as util from "./Utils"

const {widget, widgetId} = figma;
const {AutoLayout, Rectangle, Text, useWidgetId} = widget;

function isWidgetNode(node: BaseNode): node is WidgetNode {
    return node.type === 'WIDGET'
}


export default function Result({resultInfo, index}: { resultInfo: nwi.Daum, index: number }): FigmaDeclarativeNode {
    const widgetId = useWidgetId()
    const onResultClick = async (e: WidgetClickEvent, nodeInfo: nwi.Daum) => {
        // const node = await figma.createNodeFromJSXAsync(
        //     <VocabCard nodeInfo={resultInfo}/>
        // )
        console.log('Result ----- >', nodeInfo)

        // const widgetNode = figma.getNodeById(widgetId) as WidgetNode | null
        const widgetNode = figma.getNodeById(widgetId)
        if (!widgetNode || !isWidgetNode(widgetNode)) {
            return // this should never happen
        }
        const node = widgetNode.cloneWidget({widgetType: 'vocab card', resultInfo: nodeInfo})
        widgetNode.parent?.insertChild(widgetNode.parent.children.indexOf(widgetNode), node)

        node.x = widgetNode.x + widgetNode.width + 16
    }


const isLongWord = util.word(resultInfo).length > 4

return <AutoLayout
    name="SearchBar"
    fill="#F5F5F5"
    width="fill-parent"
    cornerRadius={8}
    strokeWidth={1.464}
    overflow="visible"
    direction={isLongWord ? "vertical" : "horizontal"}
    spacing={10}
    padding={{
        vertical: 16,
        horizontal: 20,
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
        spacing={4}
        verticalAlignItems="center"
        horizontalAlignItems="center"
    >
        {util.shouldShowReading(resultInfo) &&
            <Text
                fill="#F24E1E"
                width="fill-parent"
                verticalAlignText="center"
                horizontalAlignText="left"
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
            width="fill-parent"
            verticalAlignText="center"
            horizontalAlignText="left"
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
        direction="horizontal"
        width="fill-parent"
        verticalAlignItems="center"
        spacing={10}
    >
        {isLongWord &&
            <AutoLayout
                name="fake-kanji-box"
                width={130}
                height={10}
            >
            </AutoLayout>
        }
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
    </AutoLayout>

    {resultInfo.is_common &&
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
