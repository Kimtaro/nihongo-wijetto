(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // widget-src/code.tsx
  var { widget } = figma;
  var { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, Input, useSyncedState } = widget;
  function Widget() {
    const [text, setText] = useSyncedState("text", "");
    const [results, setResults] = useSyncedState("results", []);
    const onTextEnd = (event) => __async(this, null, function* () {
      setText(event.characters);
      console.log("started --> NEW ->  " + event.characters);
      const url = "https://corsproxy.io/?" + encodeURIComponent("https://jisho.org/api/v1/search/words?exact=true&keyword=" + encodeURIComponent(event.characters.toLowerCase()));
      const response = yield fetch(url);
      const json = yield response.json();
      setResults(json.data);
      console.log(results);
    });
    const onXClick = () => {
      setText("");
      setResults([]);
    };
    const onResultClick = (e, nodeInfo) => __async(this, null, function* () {
      console.log(e);
      console.log(nodeInfo);
      const node = yield figma.createNodeFromJSXAsync(/* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "VocabularyCard",
        effect: {
          type: "drop-shadow",
          color: "#0000001A",
          offset: {
            x: 0,
            y: 4
          },
          blur: 24,
          showShadowBehindNode: false
        },
        fill: "#FFF",
        cornerRadius: 16,
        direction: "vertical",
        verticalAlignItems: "center",
        horizontalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(Frame, {
        name: "Kanji-box",
        effect: {
          type: "inner-shadow",
          color: "#0000001A",
          offset: {
            x: 0,
            y: 0
          },
          blur: 24,
          visible: false
        },
        fill: "#FFF",
        width: 387,
        height: 125
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "kanji-box",
        x: {
          type: "center",
          offset: 0.5
        },
        y: {
          type: "center",
          offset: 22.5
        },
        strokeWidth: 1.5,
        overflow: "visible",
        direction: "vertical",
        height: 114,
        verticalAlignItems: "center",
        horizontalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(Text, {
        name: "\u9B5A",
        opacity: 0.8,
        fill: "#000",
        width: 96,
        verticalAlignText: "center",
        horizontalAlignText: "center",
        lineHeight: "100%",
        fontFamily: "Noto Serif Tamil",
        fontSize: 96,
        fontWeight: 900,
        strokeWidth: 4.559
      }, nodeInfo.slug)), /* @__PURE__ */ figma.widget.h(Frame, {
        name: "Frame 9",
        y: 125,
        width: 387,
        height: 35
      })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "levels",
        overflow: "visible",
        width: 315,
        horizontalAlignItems: "center",
        verticalAlignItems: "center"
      }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "Frame 10",
        fill: "#5551FF",
        cornerRadius: 50,
        overflow: "visible",
        spacing: 8,
        padding: {
          vertical: 8,
          horizontal: 16
        },
        verticalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(Image, {
        name: "Search",
        blendMode: "color-dodge",
        strokeWidth: 1.464,
        width: 23.431,
        height: 23.431,
        src: "<Add image URL here>"
      }), /* @__PURE__ */ figma.widget.h(Text, {
        name: "Find sentences",
        fill: "#FFF",
        verticalAlignText: "center",
        fontFamily: "Inter",
        fontWeight: 300
      }, "Find sentences")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "Definitions",
        overflow: "visible",
        direction: "vertical",
        spacing: 16,
        padding: 32,
        width: 387
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "definition-box",
        overflow: "visible",
        direction: "vertical",
        width: "fill-parent",
        verticalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(Text, {
        name: "Reading",
        fill: "#699BF7",
        width: "fill-parent",
        verticalAlignText: "center",
        fontFamily: "Inter",
        fontSize: 8,
        fontWeight: 300,
        strokeWidth: 1.464
      }, "Reading"), /* @__PURE__ */ figma.widget.h(Text, {
        name: "\u3055\u304B\u306A",
        fill: "#F24E1E",
        width: "fill-parent",
        verticalAlignText: "center",
        fontFamily: "Inter",
        fontWeight: 700,
        strokeWidth: 3.039
      }, nodeInfo.japanese[0].reading)), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "definition-box",
        overflow: "visible",
        direction: "vertical",
        width: "fill-parent",
        verticalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(Text, {
        name: "Godan verb with ru ending, Transitive verb",
        fill: "#699BF7",
        width: "fill-parent",
        verticalAlignText: "center",
        fontFamily: "Inter",
        fontSize: 8,
        fontWeight: 300,
        strokeWidth: 1.464
      }, nodeInfo.senses[0].parts_of_speech.join("; ")), /* @__PURE__ */ figma.widget.h(Text, {
        name: "to fish",
        fill: "#000",
        width: "fill-parent",
        verticalAlignText: "center",
        fontFamily: "Inter",
        fontWeight: 500,
        strokeWidth: 3.039
      }, nodeInfo.senses[0].english_definitions[0]))), /* @__PURE__ */ figma.widget.h(Frame, {
        name: "Frame 11",
        fill: "#5551FF",
        overflow: "visible",
        width: 386,
        height: 42
      }, /* @__PURE__ */ figma.widget.h(Text, {
        name: "JLPT N5 // WaniKani Lvl 7",
        x: {
          type: "left-right",
          leftOffset: 0.5,
          rightOffset: -0.5
        },
        y: -0.431,
        fill: "#FFF",
        width: 386,
        height: 42,
        verticalAlignText: "center",
        horizontalAlignText: "center",
        fontFamily: "Inter",
        fontWeight: 300
      }, nodeInfo.jlpt.join("; ")))));
      node.visible = true;
    });
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Card",
      effect: {
        type: "drop-shadow",
        color: "#00000026",
        offset: {
          x: 0,
          y: 23.431
        },
        blur: 46.861,
        showShadowBehindNode: false
      },
      cornerRadius: 23.43071174621582,
      strokeWidth: 1.464,
      width: 582.839,
      height: 391
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "widget-bg",
      fill: "#FFF",
      cornerRadius: 23.43071174621582,
      strokeWidth: 1.464,
      width: 582.839,
      height: 391
    }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Title",
      x: -23.431,
      fill: "#5551FF",
      strokeWidth: 1.464,
      spacing: 14.644,
      padding: 14.644,
      width: 628.236,
      horizontalAlignItems: "center",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "\u65E5\u672C\u8A9E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
      fill: "#FFF",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Roboto",
      fontSize: 35.14606857299805,
      fontWeight: 700,
      strokeWidth: 1.464
    }, "\u65E5\u672C\u8A9E \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8")), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "search-bar",
      x: 17.573,
      y: 95.187,
      fill: "#FFF",
      stroke: "#0000004D",
      cornerRadius: 16,
      overflow: "visible",
      spacing: "auto",
      padding: 16,
      width: 550.622,
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "search-bar-contents",
      strokeWidth: 1.464,
      overflow: "visible",
      spacing: 8,
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "search-icon",
      strokeWidth: 0.805,
      width: 32,
      height: 32
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Union",
      x: 9.664,
      y: 9.664,
      height: 13,
      width: 13,
      src: "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path fill-rule='evenodd' clip-rule='evenodd' d='M9.90112 6.08601C9.90112 8.53227 7.91803 10.5154 5.47177 10.5154C3.0255 10.5154 1.04241 8.53227 1.04241 6.08601C1.04241 3.63974 3.0255 1.65666 5.47177 1.65666C7.91803 1.65666 9.90112 3.63974 9.90112 6.08601ZM8.87763 10.0613C7.96215 10.8464 6.77235 11.3207 5.47177 11.3207C2.58073 11.3207 0.237076 8.97705 0.237076 6.08601C0.237076 3.19497 2.58073 0.851318 5.47177 0.851318C8.36281 0.851318 10.7065 3.19497 10.7065 6.08601C10.7065 7.38658 10.2322 8.57638 9.44709 9.49186L13.0045 13.0493L12.4351 13.6188L8.87763 10.0613Z' fill='black' fill-opacity='0.8'/>\n</svg>\n"
    })), /* @__PURE__ */ figma.widget.h(Input, {
      fontSize: 16,
      fill: "#000000",
      inputFrameProps: {
        cornerRadius: 8
      },
      onTextEditEnd: onTextEnd,
      placeholder: "Your annotation here...",
      value: text,
      width: 446
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "32 / x",
      overflow: "visible",
      width: 32,
      height: 32,
      onClick: onXClick
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Union",
      x: 10.647,
      y: 10.647,
      height: 11,
      width: 11,
      src: "<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path fill-rule='evenodd' clip-rule='evenodd' d='M6.19478 5.48033L10.8412 0.833862L11.5484 1.54097L6.90189 6.18743L11.5484 10.8339L10.8412 11.541L6.19478 6.89454L1.54835 11.541L0.841248 10.8339L5.48767 6.18744L0.841249 1.54105L1.54835 0.833938L6.19478 5.48033Z' fill='black' fill-opacity='0.8'/>\n</svg>\n"
    }))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "scrolling result",
      x: 18,
      y: 148,
      direction: "vertical",
      padding: {
        vertical: 24,
        horizontal: 0
      },
      height: 208,
      horizontalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Frame 4",
      overflow: "scroll",
      direction: "vertical",
      spacing: 16
    }, results.map((result, index) => {
      return /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "search-bar",
        fill: "#F5F5F5",
        key: index,
        cornerRadius: 8,
        strokeWidth: 1.464,
        overflow: "scroll",
        spacing: 32,
        padding: {
          vertical: 16,
          horizontal: 40
        },
        width: 512,
        horizontalAlignItems: "center",
        onClick: (e) => __async(this, null, function* () {
          yield onResultClick(e, result);
        })
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "kanji-box",
        overflow: "visible",
        direction: "vertical",
        spacing: 8,
        verticalAlignItems: "center",
        horizontalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(Text, {
        fill: "#F24E1E",
        verticalAlignText: "center",
        horizontalAlignText: "center",
        fontFamily: "Zen Kaku Gothic Antique",
        fontSize: 12,
        fontWeight: 500,
        strokeWidth: 1.464
      }, result.japanese[0].reading), /* @__PURE__ */ figma.widget.h(Text, {
        fill: "#000",
        verticalAlignText: "center",
        horizontalAlignText: "center",
        fontFamily: "Roboto",
        fontSize: 32,
        strokeWidth: 3.039
      }, result.slug)), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "Frame 7",
        overflow: "visible",
        direction: "vertical",
        spacing: 8,
        width: "fill-parent",
        height: "fill-parent",
        verticalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        name: "definition-box",
        overflow: "visible",
        direction: "vertical",
        width: "fill-parent",
        verticalAlignItems: "center"
      }, /* @__PURE__ */ figma.widget.h(Text, {
        fill: "#909090",
        verticalAlignText: "center",
        horizontalAlignText: "center",
        fontFamily: "Inter",
        fontSize: 8,
        strokeWidth: 1.464
      }, result.senses[0].parts_of_speech.join("; ")), /* @__PURE__ */ figma.widget.h(Text, {
        fill: "#0006",
        verticalAlignText: "center",
        horizontalAlignText: "center",
        fontFamily: "Roboto",
        fontSize: 24,
        strokeWidth: 3.039
      }, result.senses[0].english_definitions.join("; ")))), /* @__PURE__ */ figma.widget.h(Rectangle, {
        name: "common-word-signal",
        y: {
          type: "top-bottom",
          topOffset: 0,
          bottomOffset: 0
        },
        positioning: "absolute",
        fill: "#0FA958",
        cornerRadius: {
          topLeft: 8,
          topRight: 0,
          bottomRight: 0,
          bottomLeft: 8
        },
        width: 7,
        height: 95
      }));
    }))), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 2",
      x: 18,
      y: 356,
      fill: "#FFF",
      width: 512,
      height: 35
    }));
  }
  widget.register(Widget);
})();
