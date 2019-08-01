import React, { Component } from 'react';
import Graph from '../dataStructs/Graph'



class Something extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");


g.addEdge("A", "C", 100);
g.addEdge("A", "B", 3);
g.addEdge("A", "D", 4);
g.addEdge("C", "D", 3);
g.addEdge("D", "E", 8);
g.addEdge("E", "F", 10);
g.addEdge("B", "G", 9);

g.primsMST().display();


        return ( 
           <div>hi</div>
         );
    }
}
 
export default Something;