import * as nwi from "./nwInterfaces";
import * as util from "./Utils"

const {widget} = figma;
const {AutoLayout, Text, Frame, Image, SVG, useSyncedState} = widget;

type VocabCardProps = {
    nodeInfo: nwi.Daum
}
export default function VocabCard({nodeInfo}: VocabCardProps): FigmaDeclarativeNode  {
    const [sentences, setSentences] = useSyncedState<nwi.Sentence[]>("sentences", [])
    const [showSentences, setShowSentences] = useSyncedState<boolean>("showDefinitions", false)
    const onVocabButtonClick = async () => {
        const sentences = ["1"]
        if (sentences.length > 0) {
            const url = 'https://corsproxy.io/?' + encodeURIComponent('https://mysite-1ka9.onrender.com/api/v1/sentences?word=' + encodeURIComponent(util.word(nodeInfo)))
            console.log(util.word(nodeInfo))
            const response = await fetch(url)
            const json = await response.json()
            console.log(json.sentences)
        }
    }

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
                visible: false
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
                    fontSize={42}
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
            onClick={onVocabButtonClick}
        >
            <SVG
                name="Search"
                x={9.664}
                y={9.664}
                height={13}
                width={13}
                src="<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path fill-rule='evenodd' clip-rule='evenodd' d='M9.90112 6.08601C9.90112 8.53227 7.91803 10.5154 5.47177 10.5154C3.0255 10.5154 1.04241 8.53227 1.04241 6.08601C1.04241 3.63974 3.0255 1.65666 5.47177 1.65666C7.91803 1.65666 9.90112 3.63974 9.90112 6.08601ZM8.87763 10.0613C7.96215 10.8464 6.77235 11.3207 5.47177 11.3207C2.58073 11.3207 0.237076 8.97705 0.237076 6.08601C0.237076 3.19497 2.58073 0.851318 5.47177 0.851318C8.36281 0.851318 10.7065 3.19497 10.7065 6.08601C10.7065 7.38658 10.2322 8.57638 9.44709 9.49186L13.0045 13.0493L12.4351 13.6188L8.87763 10.0613Z' fill='white' fill-opacity='0.8'/>
                    </svg>"
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
            {true ? nodeInfo.senses.map((sense) => {
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
            }) : ""
            }


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