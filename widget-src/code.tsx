import * as nwi from './nwInterfaces'
import Card from "./Card";

const {widget} = figma;
const {AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, Input, useSyncedState,} = widget;

function Widget() {
    const [text, setText] = useSyncedState("text", "");
    const [results, setResults] = useSyncedState("results", []);
    const onTextEnd = async (event) => {
        setText(event.characters);
        console.log('started --> NEW ->  ' + event.characters);
        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://jisho.org/api/v1/search/words?exact=true&keyword=' + encodeURIComponent(event.characters.toLowerCase()))
        const response = await fetch(url)
        const json = await response.json()
        setResults(json.data)
        console.log(results)
    };
    const onXClick = () => {
        setText('')
        setResults([])
    }
    const onResultClick = async (e, nodeInfo: nwi.Daum) => {
        console.log(e)
        console.log(nodeInfo)
        const node = await figma.createNodeFromJSXAsync(
            <AutoLayout
                name="VocabularyCard"
                effect={{
                    type: "drop-shadow",
                    color: "#0000001A",
                    offset: {
                        x: 0,
                        y: 4,
                    },
                    blur: 24,
                    showShadowBehindNode:
                        false,
                }}
                fill="#FFF"
                cornerRadius={16}
                direction="vertical"
                verticalAlignItems="center"
                horizontalAlignItems="center"
            >
                <Frame
                    name="Kanji-box"
                    effect={{
                        type: "inner-shadow",
                        color: "#0000001A",
                        offset: {
                            x: 0,
                            y: 0,
                        },
                        blur: 24,
                        visible: false,
                    }}
                    fill="#FFF"
                    width={387}
                    height={125}
                >
                    <AutoLayout
                        name="kanji-box"
                        x={{
                            type: "center",
                            offset: 0.5,
                        }}
                        y={{
                            type: "center",
                            offset: 22.5,
                        }}
                        strokeWidth={1.5}
                        overflow="visible"
                        direction="vertical"
                        height={114}
                        verticalAlignItems="center"
                        horizontalAlignItems="center"
                    >
                        <Text
                            name="魚"
                            opacity={0.8}
                            fill="#000"
                            width={96}
                            verticalAlignText="center"
                            horizontalAlignText="center"
                            lineHeight="100%"
                            fontFamily="Noto Serif Tamil"
                            fontSize={96}
                            fontWeight={900}
                            strokeWidth={
                                4.559
                            }
                        >
                            {nodeInfo.slug}
                        </Text>
                    </AutoLayout>
                    <Frame
                        name="Frame 9"
                        y={125}
                        width={387}
                        height={35}
                    />
                </Frame>
                <AutoLayout
                    name="levels"
                    overflow="visible"
                    width={315}
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                />
                <AutoLayout
                    name="Frame 10"
                    fill="#5551FF"
                    cornerRadius={50}
                    overflow="visible"
                    spacing={8}
                    padding={{
                        vertical: 8,
                        horizontal: 16,
                    }}
                    verticalAlignItems="center"
                >
                    <Image
                        name="Search"
                        blendMode="color-dodge"
                        strokeWidth={1.464}
                        width={23.431}
                        height={23.431}
                        src="<Add image URL here>"
                    />
                    <Text
                        name="Find sentences"
                        fill="#FFF"
                        verticalAlignText="center"
                        fontFamily="Inter"
                        fontWeight={300}
                    >
                        Find sentences
                    </Text>
                </AutoLayout>
                <AutoLayout
                    name="Definitions"
                    overflow="visible"
                    direction="vertical"
                    spacing={16}
                    padding={32}
                    width={387}
                >
                    <AutoLayout
                        name="definition-box"
                        overflow="visible"
                        direction="vertical"
                        width="fill-parent"
                        verticalAlignItems="center"
                    >
                        <Text
                            name="Reading"
                            fill="#699BF7"
                            width="fill-parent"
                            verticalAlignText="center"
                            fontFamily="Inter"
                            fontSize={8}
                            fontWeight={300}
                            strokeWidth={
                                1.464
                            }
                        >
                            Reading
                        </Text>
                        <Text
                            name="さかな"
                            fill="#F24E1E"
                            width="fill-parent"
                            verticalAlignText="center"
                            fontFamily="Inter"
                            fontWeight={700}
                            strokeWidth={
                                3.039
                            }
                        >
                            {nodeInfo.japanese[0].reading}
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
                            name="Godan verb with ru ending, Transitive verb"
                            fill="#699BF7"
                            width="fill-parent"
                            verticalAlignText="center"
                            fontFamily="Inter"
                            fontSize={8}
                            fontWeight={300}
                            strokeWidth={
                                1.464
                            }
                        >
                            {nodeInfo.senses[0].parts_of_speech.join('; ')}
                        </Text>
                        <Text
                            name="to fish"
                            fill="#000"
                            width="fill-parent"
                            verticalAlignText="center"
                            fontFamily="Inter"
                            fontWeight={500}
                            strokeWidth={
                                3.039
                            }
                        >
                            {nodeInfo.senses[0].english_definitions[0]}
                        </Text>
                    </AutoLayout>

                </AutoLayout>
                <Frame
                    name="Frame 11"
                    fill="#5551FF"
                    overflow="visible"
                    width={386}
                    height={42}
                >
                    <Text
                        name="JLPT N5 // WaniKani Lvl 7"
                        x={{
                            type: "left-right",
                            leftOffset: 0.5,
                            rightOffset: -0.5,
                        }}
                        y={-0.431}
                        fill="#FFF"
                        width={386}
                        height={42}
                        verticalAlignText="center"
                        horizontalAlignText="center"
                        fontFamily="Inter"
                        fontWeight={300}
                    >
                        {nodeInfo.jlpt.join('; ')}
                    </Text>
                </Frame>
            </AutoLayout>
        )
        node.visible=true
    }
    return (
        <Card>

        </Card>
    );
}

widget.register(Widget);
