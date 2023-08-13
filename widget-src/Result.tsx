import { primitive } from "../ui-src/tokensPrimitives";
import { theme } from '../ui-src/tokensThemes';
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
    name="searchResult"
    fill={theme.bgPrimary}
    width="fill-parent"
    cornerRadius={primitive.xxlarge}
    overflow="hidden"
    direction="vertical"
    horizontalAlignItems="start"
    spacing={primitive.large}
    padding={{
        vertical: primitive.xxlarge,
        horizontal: primitive.xxlarge,
    }}
    onClick={async (e) => {
        await onResultClick(e, resultInfo)
    }}
    key={index}
>
    <AutoLayout
        name="searchResultCard"
        overflow="visible"
        direction="vertical"
        spacing={primitive.large}
        verticalAlignItems="center"
        horizontalAlignItems="center"
    >
        {util.shouldShowReading(resultInfo) &&
            <Text
                name="resultReading"
                fill={theme.textFocus}
                width="fill-parent"
                verticalAlignText="center"
                horizontalAlignText="left"
                fontFamily="Inter"
                fontSize={primitive.medium}
                fontWeight={700}
                lineHeight={primitive.medium}
            >
                {util.reading(resultInfo)}
            </Text>
        }
        <Text
            name="resultKanji"
            fill={theme.textPrimary}
            width="fill-parent"
            verticalAlignText="center"
            horizontalAlignText="left"
            fontFamily="Inter"
            fontSize={primitive.xlarge}
            fontWeight={900}
            lineHeight={primitive.xlarge}
        >
            {util.word(resultInfo)}
        </Text>
    </AutoLayout>
    <AutoLayout
        name="resultDefinition"
        overflow="visible"
        direction="vertical"
        width="fill-parent"
        verticalAlignItems="center"
        spacing={primitive.small}
    >
            <Text
                name="resultLabel"
                fill={theme.textSecondary}
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Inter"
                fontSize={primitive.medium}
                fontWeight={400}
                lineHeight={primitive.medium}
            >
                {resultInfo.senses[0].parts_of_speech.join('; ')}
            </Text>
            <Text
                name="resultDefinitionText"
                fill={theme.textPrimary}
                width="fill-parent"
                verticalAlignText="top"
                fontFamily="Inter"
                fontSize={primitive.large}
                fontWeight={400}
                lineHeight={primitive.large}
            >
                {resultInfo.senses[0].english_definitions.join('; ')}
            </Text>
    </AutoLayout>

    {resultInfo.is_common &&
        <Rectangle
            name="commonWordLabel"
            y={{
                type: "top-bottom",
                topOffset: primitive.xxlarge,
                bottomOffset: primitive.xxlarge,
            }}
            x={primitive.large}
            positioning="absolute"
            fill={theme.textSignal}
            cornerRadius={primitive.xxlarge}
            width={primitive.small}
        />
    }
</AutoLayout>

}
