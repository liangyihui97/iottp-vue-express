var graph = new Q.Graph('canvas');

                var node1 = graph.createNode("AM600\n汇川工控", -250, -50);
                node1.image = "http://"+location.hostname+":4000/images/node6.png";
		node1.size = {width: 90};
                var node2 = graph.createNode("智能网关", 0, -50);
                node2.image = "http://"+location.hostname+":4000/images/node7.png";
		node2.size = {width: 40};
		var node3 = graph.createNode("中央控制器", 250, -50);
		node3.image = "http://"+location.hostname+":4000/images/node4.png";
		node3.size = {width: 70};

                var edge = graph.createEdge("TCP/IP", node1, node2);
              
                edge.setStyle(Q.Styles.EDGE_COLOR, '#88AAEE');
		edge.setStyle(Q.Styles.EDGE_WIDTH, 2);
		edge.edgeType = Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL;

                /*连线文字样式*/
                edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
                edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
                edge.setStyle(Q.Styles.LABEL_BORDER, 1);
                edge.setStyle(Q.Styles.LABEL_POINTER, true);
                edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
                edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT,
                Q.Gradient.LINEAR_GRADIENT_VERTICAL);

		var edge = graph.createEdge("TCP/IP", node2, node3);
                /*虚线样式*/
                edge.setStyle(Q.Styles.EDGE_COLOR, '#88AAEE');
		edge.setStyle(Q.Styles.EDGE_WIDTH, 2);
		edge.edgeType = Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL;
                /*连线文字样式*/
                edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
                edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
                edge.setStyle(Q.Styles.LABEL_BORDER, 1);
                edge.setStyle(Q.Styles.LABEL_POINTER, true);
                edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
                edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT,
                Q.Gradient.LINEAR_GRADIENT_VERTICAL);

                /*双击改名*/
                graph.ondblclick = function(evt){
                    var node = graph.getElementByMouseEvent(evt);
                    if(node){
                        var newName = prompt("New Name:");
                        if(newName){
                            node.name = newName;
                        }
                    }
                }
