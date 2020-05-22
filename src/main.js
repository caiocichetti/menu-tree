import Tree from './tree.js';

const menu = [
    { id: 1, name: "Desktops", parent: 3 },
    { id: 3, name: "Computers", parent: 8 },
    { id: 4, name: "Mother Board", parent: 6 },
    { id: 6, name: "Hardware", parent: 3 },
    { id: 7, name: "Processor", parent: 6 },
    { id: 8, name: "Electronics", parent: null },
    { id: 18, name: "Camping", parent: null },
    { id: 10, name: "TV", parent: 8 },
    { id: 20, name: 'AMD Ryzen 9', parent: 7 },
    { id: 13, name: "Remotes", parent: 14 },
    { id: 14, name: "Accessories", parent: 10 }
]

Tree(menu);