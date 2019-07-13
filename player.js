var tour = new Tour({
    steps: [{
        "id": "1",
        "content": "tip on first div",
        "element": "#id_1",
        "next": "1"
    },{
        "id": "2",
        "content": "tip on second div",
        "element": ".myClass2",
        "next": "2"
    },{
        "id": "3",
        "content": "tip on third div.",
        "element": "div:eq(2)",
        "next": "0"
    }],
    backdrop: true,
    backdropContainer: 'body',
    backdropPadding: 0,});
  
  // Initialize the tour
  tour.init();
  
  // Start the tour
  tour.start();