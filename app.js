const DUMMY_DATA = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 11, region: 'Germany' },
    { id: 'd3', value: 12, region: 'Costa Rica' },
    { id: 'd4', value: 6, region: 'Palestine' },
]

d3.select('div')
    .selectAll('p')
    .data(DUMMY_DATA)
    .enter()
    .append('p')
    .text(dta => dta.region)