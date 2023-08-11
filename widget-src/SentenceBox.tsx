import * as nwi from './nwInterfaces'

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
        name="sentence-box"
        overflow="visible"
        direction="vertical"
        width="fill-parent"
        verticalAlignItems="center"
    >
        <Text
            name="Sentence"
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
            Sentence
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
            {sentence['japanese']}
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
            onClick={onEnglishClick}
            effect={{
                blur: isBlurred ? 10 : 0,
                type: "layer-blur"
            }}

        >
            {sentence['english']}
        </Text>
    </AutoLayout>
}