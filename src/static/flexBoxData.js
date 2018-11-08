export const flexBoxData = {
    childrenProperties: [
        {
            title: "flex-grow",
            camelCaseTitle: "flexGrow",
            items: ["a", "b", "c"],
        },
        {
            title: "flex-shrink",
            camelCaseTitle: "flexShrink",
            items: ["a", "b", "c"],
        },
    ]
}

export const childProperties = {
    defaultValues: {
        flexGrow: {a: 0, b: 0, c: 0},
        flexShrink: {a: 1, b: 1, c: 1},
        flexBasis: {a:"auto", b:"auto", c:"auto"},
        alignSelf: {a:"auto", b:"auto", c:"auto"},
        order: {a: 0, b: 0, c: 0},
    },
    detail: [
        {
            camelCaseTitle: 'justifyContent',
            kabobCaseTitle: 'justify-content',
            values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
            defaultValue: "flex-start",
            itemAmount: 4
        },
        {
            camelCaseTitle: 'alignItems',
            kabobCaseTitle: 'align-items',
            values: ["flex-start", "flex-end", "center", "stretch", "baseline"],
            defaultValue: "flex-start",
            itemAmount: 4
        },
        {
            camelCaseTitle: 'alignContent',
            kabobCaseTitle: 'align-content',
            values: ["flex-start", "flex-end", "center", "stretch", "space-between", "space-around"],
            defaultValue: "flex-start",
            itemAmount: 8
        },
        {
            camelCaseTitle: 'flexWrap',
            kabobCaseTitle: 'flex-wrap',
            values: ["no-wrap", "wrap", "wrap-reverse"],
            defaultValue: "no-wrap",
            itemAmount: 8
        },
    ]
}

export const childPropCardInfo = {
    items: ["a", "b", "c"],
    itemCardValues: [
        [{
            title: "flex-grow",
            camelCaseTitle: "flexGrow",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1,
            color: "orange"
        },
        {
            title: "flex-shrink",
            camelCaseTitle: "flexShrink",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1,
        },
        {
            title: "flex-basis",
            camelCaseTitle: "flexBasis",
            content: ["20%", "33%", "40%", "60%", "auto", "content"],
            defaultValue: "auto",
        }],
        [{
            title: "align-self",
            camelCaseTitle: "alignSelf",
            content: ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
            defaultValue: "auto",
        }],
        [{
            title: "order",
            camelCaseTitle: "order",
            content: [-1, 0, 1, 2, 3, 10],
            defaultValue: 0,
            color: "navy"
        }]
    ]
}