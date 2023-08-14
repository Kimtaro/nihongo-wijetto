import * as nwi from './nwInterfaces'
import { primitive } from "../ui-src/tokensPrimitives";
import { theme } from '../ui-src/tokensThemes';

const {widget} = figma;
const {AutoLayout, Text, useSyncedState} = widget;

type SentenceBoxProps = {
    sentence: nwi.Sentence
    index: number
}
export default function SentenceBox({sentence, index}: SentenceBoxProps): FigmaDeclarativeNode {
    const [isBlurred, setIsBlurred] = useSyncedState<boolean>(`isBlurred-${index}`, true)
    const onEnglishClick = () => {
        setIsBlurred(!isBlurred)
    }

    return <AutoLayout
        name="vocabSentences"
        overflow="visible"
        direction="vertical"
        width="fill-parent"
        verticalAlignItems="start"
    >
        <AutoLayout
            name="vocabSentenceGroup"
            overflow="visible"
            direction="vertical"
            width="fill-parent"
            spacing={primitive.medium}
        >
            <Text
                name="vocabSentenceText"
                fill={theme.textPrimary}
                width="fill-parent"
                fontFamily="Inter"
                fontSize={primitive.large}
                fontWeight={400}
                lineHeight={primitive.large}
            >
                {sentence['japanese']}
            </Text>
            <Text
                name="vocabSentenceTranslation"
                fill={theme.textSecondary}
                width="fill-parent"
                fontFamily="Inter"
                fontSize={primitive.large}
                fontWeight={400}
                lineHeight={primitive.large}
                onClick={onEnglishClick}
                effect={{
                    blur: isBlurred ? primitive.small : 0,
                    type: "layer-blur"
                }}

            >
                {sentence['english']}
            </Text>
        </AutoLayout>
    </AutoLayout>
}