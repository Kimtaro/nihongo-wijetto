import { theme } from "../ui-src/tokensThemes";
import { primitive } from "../ui-src/tokensPrimitives";

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
            color: primitive.dropShadow,
            offset: {
                x: 0,
                y: 24,
            },
            blur: 40,
            showShadowBehindNode:
                false,
        }}
        fill={theme.bgSecondary}
        cornerRadius={primitive.xlarge}
        strokeWidth={0}
        direction="vertical"
        width={800}
    >
        {children}
    </AutoLayout>

}