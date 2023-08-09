const {widget} = figma;
const {Frame, Rectangle, AutoLayout, Text} = widget;


export default function Card({children}) {
    return <Frame
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
            cornerRadius={
                23.43071174621582
            }
            strokeWidth={1.464}
            width={582.839}
            height={391}

        >
            <Rectangle
                name="widget-bg"
                fill="#FFF"
                cornerRadius={
                    23.43071174621582
                }
                strokeWidth={1.464}
                width={582.839}
                height={391}
            />
        <AutoLayout
                name="Title"
                x={-23.431}
                fill="#5551FF"
                strokeWidth={1.464}
                spacing={14.644}
                padding={14.644}
                width={628.236}
                horizontalAlignItems="center"
                verticalAlignItems="center"
            >
                <Text
                    name="日本語ウィジェット"
                    fill="#FFF"
                    verticalAlignText="center"
                    horizontalAlignText="center"
                    fontFamily="Roboto"
                    fontSize={
                        35.14606857299805
                    }
                    fontWeight={700}
                    strokeWidth={1.464}
                >
                    日本語 ウィジェット
                </Text>
            </AutoLayout>
        {children}
        <Rectangle
                name="Rectangle 2"
                x={18}
                y={356}
                fill="#FFF"
                width={512}
                height={35}
            />
    </Frame>

}