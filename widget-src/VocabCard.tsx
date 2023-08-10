import * as nwi from "./nwInterfaces";
import * as util from "./Utils"

const {widget} = figma;
const {AutoLayout, Rectangle, Text, Frame, Image} = widget;

type VocabCardProps = {
    nodeInfo: nwi.Daum
}
export default function VocabCard({nodeInfo}: VocabCardProps) {
    return <AutoLayout
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
        overflow="visible"
        direction="vertical"
        spacing={10}
        width={387}
        horizontalAlignItems="center"
    >
        <AutoLayout
            name="Kanji-box"
            effect={{
                type: "inner-shadow",
                color: "#0000001A",
                offset: {
                    x: 0,
                    y: 0,
                },
                blur: 24,
                visible:false
            }}
            fill="#FFF"
            direction="vertical"
            padding={{
                top: 10,
                right: 0,
                bottom: 0,
                left: 0,
            }}
            width="fill-parent"
            height={105}
            horizontalAlignItems="center"
            cornerRadius={{
                topLeft: 16,
                topRight: 16,
                bottomRight: 0,
                bottomLeft: 0,
            }}
        >
            <AutoLayout
                name="kanji-box"
                strokeWidth={1.5}
                overflow="visible"
                direction="vertical"
                width="fill-parent"
                height="fill-parent"
                verticalAlignItems="center"
                horizontalAlignItems="center"
            >
                <Text
                    name="魚"
                    opacity={0.8}
                    fill="#000"
                    width="fill-parent"
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
                    {util.word(nodeInfo)}
                </Text>
            </AutoLayout>
        </AutoLayout>
        <AutoLayout
            name="Find Sentences Container"
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
            name="Definitions Container"
            overflow="visible"
            direction="vertical"
            spacing={16}
            padding={{
                top: 8,
                right: 32,
                bottom: 32,
                left: 32,
            }}
            width="fill-parent"
        >
            {util.shouldShowReading(nodeInfo) &&
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
                        {util.reading(nodeInfo)}
                    </Text>
                </AutoLayout>
            }
            {nodeInfo.senses.map((sense) => {
                return <AutoLayout
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
                        {sense.parts_of_speech.join('; ')}
                    </Text>
                    <Text
                        fill="#000"
                        width="fill-parent"
                        verticalAlignText="center"
                        fontFamily="Inter"
                        fontWeight={500}
                        strokeWidth={
                            3.039
                        }
                    >
                        {sense.english_definitions.join('; ')}
                    </Text>
                </AutoLayout>
            })}


        </AutoLayout>
        <Frame
            name="Frame 11"
            fill="#5551FF"
            overflow="visible"
            width='fill-parent'
            height={42}
            cornerRadius={{
                topLeft: 0,
                topRight: 0,
                bottomRight: 16,
                bottomLeft: 16,
            }}
        >
            <Text
                name="JLPT N5 // WaniKani Lvl 7"
                x={{
                    type: "left-right",
                    leftOffset: 0.5,
                    rightOffset: -0.5,
                }}
                fill="#FFF"
                width="fill-parent"
                height={42}
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Inter"
                fontWeight={500}
                fontSize={24}
            >
                {nodeInfo.jlpt.join('; ').toUpperCase()}
            </Text>
        </Frame>
    </AutoLayout>
}