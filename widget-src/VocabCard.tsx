import * as nwi from "./nwInterfaces";
import * as util from "./Utils"
import SentenceBox from "./SentenceBox";
import { primitive } from "../ui-src/tokensPrimitives";
import { theme } from '../ui-src/tokensThemes';

const {widget} = figma;
const {AutoLayout, Text, Frame, useSyncedState} = widget;

type VocabCardProps = {
    nodeInfo: nwi.Daum
}
export default function VocabCard({nodeInfo}: VocabCardProps): FigmaDeclarativeNode {
    const [sentences, setSentences] = useSyncedState<nwi.Sentence[]>("sentences", [])
    const [showSentences, setShowSentences] = useSyncedState<boolean>("showDefinitions", false)
    const onVocabButtonClick = async () => {
        console.log("Click handler")
        if (sentences.length == 0) {
            console.log("Fetching sentences")
            const url = 'https://corsproxy.io/?' + encodeURIComponent('https://mysite-1ka9.onrender.com/api/v1/sentences?word=' + encodeURIComponent(util.word(nodeInfo)))
            console.log(util.word(nodeInfo))
            const response = await fetch(url)
            const json = await response.json()
            if (json.sentences.length > 4) {
                setSentences(json.sentences.slice(0, 4))
            } else {
                setSentences(json.sentences)
            }
        }
        console.log("Showing sentences")
        console.log(sentences)
        setShowSentences(!showSentences)
    }

    return <AutoLayout
        name="VocabularyCard"
        fill={theme.bgPrimary}
        cornerRadius={primitive.xlarge}
        direction="vertical"
        spacing={primitive.large}
        width={800}
        horizontalAlignItems="center"
        effect={{
            type: "drop-shadow",
            color: primitive.dropShadow,
            offset: {
                x: 0,
                y: 24,
            },
            blur: 40,
            showShadowBehindNode:
                false,
        }}
    >
        <AutoLayout
            name="vocabKanji"
            fill={theme.bgSecondary}
            direction="vertical"
            padding={{
                vertical: primitive.xlarge,
                horizontal: primitive.small,
            }}
            width="fill-parent"
            height="hug-contents"
            minHeight={200}
            horizontalAlignItems="center"
            verticalAlignItems="center">
                <Text
                    name="kanji"
                    fill={theme.textPrimary}
                    width="fill-parent"
                    verticalAlignText="center"
                    horizontalAlignText="center"
                    lineHeight={primitive.large}
                    fontFamily="Inter"
                    fontSize={primitive.xlarge}
                    fontWeight={700}
                >
                    {util.word(nodeInfo)}
                </Text>
            </AutoLayout>
        <AutoLayout
            name="vocabButton"
            fill={theme.bgAccent}
            cornerRadius={primitive.xxlarge}
            overflow="hidden"
            padding={{
                vertical: primitive.large,
                horizontal: primitive.xxlarge,
            }}
            verticalAlignItems="center"
            onClick={onVocabButtonClick}
        >
            <Text
                name="button"
                fill={theme.textAccent}
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Inter"
                fontSize={primitive.large}
                fontWeight={400}
                lineHeight={primitive.large}
            >
                {showSentences ? "Show Definitions" : "Show Sentences"}
            </Text>
        </AutoLayout>
        <AutoLayout
            name="vocabDefinition"
            overflow="visible"
            direction="vertical"
            spacing={primitive.large}
            padding={primitive.xxlarge}
            width="fill-parent"
        >
            {util.shouldShowReading(nodeInfo) && !showSentences &&
                <AutoLayout
                    name="details-box"
                    overflow="visible"
                    direction="vertical"
                    width="fill-parent"
                    verticalAlignItems="center"
                >
                    <Text
                        name="vocabReadingLabel"
                        fill={theme.textSecondary}
                        width="fill-parent"
                        verticalAlignText="center"
                        fontFamily="Inter"
                        fontSize={primitive.medium}
                        fontWeight={700}
                        line-height={primitive.large}
                    >
                        Reading
                    </Text>
                    <Text
                        name="vocabReading"
                        fill={theme.textFocus}
                        width="fill-parent"
                        verticalAlignText="center"
                        fontFamily="Inter"
                        fontSize={primitive.large}
                        fontWeight={400}
                        lineHeight={primitive.large}
                    >
                        {util.reading(nodeInfo)}
                    </Text>
                </AutoLayout>
            }
            {showSentences ?
                sentences.map((sent, index) => {
                    return <SentenceBox sentence={sent} key={index} index={index}/>
                })
                :
                nodeInfo.senses.map((sense) => {
                    return <AutoLayout
                        name="definition-box"
                        overflow="visible"
                        direction="vertical"
                        width="fill-parent"
                        verticalAlignItems="center"
                    >
                        <Text
                            name="definitionLabel"
                            fill={theme.textSecondary}
                            width="fill-parent"
                            verticalAlignText="center"
                            fontFamily="Inter"
                            fontSize={primitive.medium}
                            fontWeight={700}
                            lineHeight={primitive.large}
                        >
                            {sense.parts_of_speech.join('; ')}
                        </Text>
                        <Text
                            name="definitionText"
                            fill={theme.textPrimary}
                            width="fill-parent"
                            verticalAlignText="center"
                            fontFamily="Inter"
                            fontSize={primitive.large}
                            fontWeight={400}
                            lineHeight={primitive.large}
                        >
                            {sense.english_definitions.join('; ')}
                        </Text>
                    </AutoLayout>
                })
            }
        </AutoLayout>
        <AutoLayout
            name="vocabLevel"
            fill={theme.bgAccent}
            overflow="hidden"
            width="fill-parent"
            height="hug-contents"
            padding={{
                vertical: primitive.large,
                horizontal: primitive.xlarge,
            }}
            verticalAlignItems='center'
            horizontalAlignItems='center'
        >
            <Text
                name="vocabLevelText"
                fill={theme.textAccent}
                width="fill-parent"
                height={primitive.large}
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Inter"
                fontSize={primitive.large}
                fontWeight={400}
                lineHeight={primitive.large}
            >
                {nodeInfo.jlpt.join('; ').toUpperCase()}
            </Text>
        </AutoLayout>
    </AutoLayout>
}