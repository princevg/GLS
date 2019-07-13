var tour = new Tour({
    steps: [{
        "id": "1",
        "content": "tip on first div",
        "element": "#id_1",
        "next": "1",
        "placement": "bottom"
    },{
        "id": "2",
        "content": "tip on second div",
        "element": ".myClass2",
        "next": "2",
        "placement": "left"
    },{
        "id": "3",
        "content": "tip on third div.",
        "element": "div:eq(2)",
        "next": "0",
        "placement": "right"
    }],
    backdrop: true,
    backdropContainer: 'body',
    backdropPadding: 0,
});

