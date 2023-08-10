const {widget} = figma;
const {AutoLayout, Text} = widget;

type CardProps = {
    children: FigmaDeclarativeChildren<any>
}

export default function Card({children}: CardProps): FigmaDeclarativeNode {
    return <AutoLayout
        name="Card"
        effect={{
            type: "drop-shadow",
            color: "#00000026",
            offset: {
                x: 0,
                y: 23.431,
            },
            blur: 46.861,
            showShadowBehindNode:
                false,
        }}
        fill="#FFF"
        cornerRadius={
            23.43071174621582
        }
        strokeWidth={1.464}
        direction="vertical"
        width={550.62}
    >

        {children}
    </AutoLayout>

}